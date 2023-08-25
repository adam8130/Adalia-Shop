import React, { useState } from "react";
import { Paper, InputBase, styled, useMediaQuery, Button } from "@mui/material";
import { Search, Menu } from "@mui/icons-material";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";
import { Cart } from "@/modules/product/components/Cart";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

const Prefixbar = styled("section")`
  width: 100%;
  background: rgba(240, 247, 205, 0.8);
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
  div {
    width: 240px;
    height: 40px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: black;
    font-weight: 300;
    letter-spacing: 2px;
    h3 {
      cursor: pointer;
    }
  }
`;
const Headerbar = styled("section")`
  width: 100%;
  padding: 10px 0;
  background: white;
  position: sticky;
  top: 0;
  z-index: 2;
`;
const Logobar = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  h1 {
    color: #212529;
    font-size: 40px;
    font-weight: 300;
    letter-spacing: 10px;
    margin-top: 10px;
    cursor: pointer;
  }
  .MuiPaper-root {
    padding: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
    position: absolute;
    right: 30px;
    box-shadow: 0 0 1px rgba(140, 140, 140);
  }
  .MuiButtonBase-root {
    position: absolute;
    right: 20px;
    border-radius: 5px;
    border: 1px solid gray;
    margin: 10px 0;
    span {
      margin: 0
    }
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;
const Menubar = styled("ul")`
  width: 100%;
  display: flex;
  justify-content: center;
  align-item: center;
  margin-top: 30px;
  margin-bottom: 10px;
  gap: 40px;
  li {
    color: rgba(0, 0, 0, 0.55);
    letter-spacing: 2px;
    transition: all 0.3s;
    cursor: pointer;
  }
  li:hover {
    color: rgb(227, 170, 4);
    transform: scale(1.1);
  }
  li:last-child {
    color: red;
  }
`;
const MotionedMobileMenubar = motion(styled("div")`
  width: 60%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: white;
  li {
    width: 75%;
    padding: 15px 0;
    margin-right: auto;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.55);
    border-bottom: 1px solid rgba(0, 0, 0, 0.55);
  }
  ul:nth-of-type(2) {
    height: max-content;
    li {
      border-bottom: none;
      padding: 10px 0;
    }
  }
`);

function Header() {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width:768px)");
  const { cartVisible, cartContent, setCartVisible } = useStore();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  return (
    <>
      {!isMobile && (
        <Prefixbar>
          <div>
            <h3 onClick={() => setCartVisible(true)}>
              {"購物車"}
              {!!cartContent.length && `(${cartContent.length})`}
            </h3>
            <h3>登入/註冊</h3>
          </div>
        </Prefixbar>
      )}
      <Headerbar>
        <Logobar>
          <h1 onClick={() => router.push(`/`)}>Adalia</h1>
          {!isMobile ? (
            <Paper>
              <Search />
              <InputBase placeholder="Search..." />
            </Paper>
          ) : (
            <Button
              color="inherit"
              startIcon={<Menu />}
              onClick={() => setMobileMenuVisible((prev) => !prev)}
            />
          )}
        </Logobar>
        {!isMobile && (
          <Menubar>
            <li>ALL</li>
            <li>NEW ARRIVALS</li>
            <li>RANKING</li>
            <li>TOPS</li>
            <li>DRESSES</li>
            <li>KNITWEAR</li>
            <li>SALE</li>
          </Menubar>
        )}
      </Headerbar>
      {cartVisible && <Cart cartContent={cartContent} />}
      {mobileMenuVisible && isMobile && (
        <AnimatePresence mode="wait">
          <MotionedMobileMenubar
            initial={{ opacity: 0, left: "-100%" }}
            animate={{ opacity: 1, left: "0" }}
            exit={{ opacity: 0, left: "-100%" }}
          >
            <ul>
              <li>ALL</li>
              <li>NEW ARRIVALS</li>
              <li>RANKING</li>
              <li>TOPS</li>
              <li>DRESSES</li>
              <li>KNITWEAR</li>
              <li>SALE</li>
            </ul>
            <ul>
              <li onClick={() => {
                setCartVisible(true)
                setMobileMenuVisible(false)
              }}>
                {"購物車"}
                {!!cartContent.length && `(${cartContent.length})`}
              </li>
              <li>登入/註冊</li>
            </ul>
          </MotionedMobileMenubar>          
        </AnimatePresence>
      )}
    </>
  );
}

export default observer(Header);
