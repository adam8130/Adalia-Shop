import React, { useState } from "react";
import { Paper, InputBase, styled, useMediaQuery, Button } from "@mui/material";
import { Search, Menu } from "@mui/icons-material";
import { Observer, observer } from "mobx-react-lite";
import { useStore } from "@/store";
import { Cart } from "@/components/Cart";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

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
    right: 10px;
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
  a {
    color: rgba(0, 0, 0, 0.55);
    letter-spacing: 2px;
    transition: all 0.3s;
    cursor: pointer;
  }
  a:hover {
    color: rgb(227, 170, 4);
    transform: scale(1.1);
  }
  a:last-child {
    color: red;
  }
`;
const MotionedMobileMenubar = motion(styled("div")`
  width: 60%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.35);
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: white;
  a {
    width: 75%;
    padding: 15px 0;
    display: block;
    margin-right: auto;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.55);
    border-bottom: 1px solid rgba(0, 0, 0, 0.55);
  }
  ul:nth-of-type(2) {
    height: max-content;
    a {
      border-bottom: none;
      padding: 10px 0;
    }
  }
`);
const MobileMnueShadow = styled("div")`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.35);
  z-index: 3;
`

function Header() {
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width:768px)');
  const { cartVisible, cartContent, setCartVisible, shopMenuItems } = useStore();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  return (
    <Observer>
      {() => (
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
                {shopMenuItems?.map((item, idx) => (
                  <Link 
                    key={idx}
                    href={`/${item.toLowerCase().replace(' ', '')}`}
                    onClick={() => setMobileMenuVisible(false)}
                  >
                    {item}
                  </Link>
                ))}
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
                  {shopMenuItems?.map((item, idx) => (
                    <Link 
                      key={idx}
                      href={`/${item.toLowerCase().replace(' ', '')}`}
                      onClick={() => setMobileMenuVisible(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </ul>
                <ul>
                  <Link href="#" onClick={() => {
                    setCartVisible(true)
                    setMobileMenuVisible(false)
                  }}>
                    {"購物車"}
                    {!!cartContent.length && `(${cartContent.length})`}
                  </Link>
                  <Link href="#">登入/註冊</Link>
                </ul>
              </MotionedMobileMenubar>
              <MobileMnueShadow onClick={() => setMobileMenuVisible((prev) => !prev)} />      
            </AnimatePresence>
          )}
        </>
      )}
    </Observer>
  );
}

export default observer(Header);
