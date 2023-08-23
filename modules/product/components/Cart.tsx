import { CartContent } from "@/__generated__/types";
import { styled, Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { DeleteOutline } from "@mui/icons-material";
import { useStore } from "@/store";
import Image from "next/image";

const MotionedRoot = motion(styled("div")`
  width: 90%;
  height: 600px;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  background: white;
  border-radius: 10px;
  border: 1px solid gray;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  z-index: 3;
  > h1 {
    font-size: 36px;
    margin-bottom: 10px;
  }
  > h3 {
    font-size: 18px;
    padding-bottom: 10px;
    margin: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
  > section {
    width: 40%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    padding-bottom: 10px;
    margin: 20px 0 10px auto;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
`);
const MotionedCartItem = motion(styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  margin: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  section {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    h6 {
      font-size: 18px;
      margin-bottom: 20px;
    }
    span {
      font-weight: 300;
    }
  }
`);
const ActionGroup = styled("div")`
  margin-top: auto;
  margin-left: auto;
  display: flex;
  gap: 10px;
  button {
    margin-top: 20px;
  }
`;

export function Cart({ cartContent }: { cartContent: CartContent[] }) {
  const { setCartContent, setCartVisible } = useStore();

  return (
    <AnimatePresence>
      <MotionedRoot
        initial={{ opacity: 0, top: "100%" }}
        animate={{ opacity: 1, top: "50%" }}
        exit={{ opacity: 0, top: "-100%" }}
        transition={{ duration: 0.3 }}
      >
        <h1>您的購物車</h1>
        {cartContent.length === 0 ? (
          <>
            <h3>您的購物車是空的</h3>
            <ActionGroup>
              <Button
                color="info"
                variant="outlined"
                onClick={() => setCartVisible(false)}
              >
                確定
              </Button>
            </ActionGroup>
          </>
        ) : (
          <>
            <h3>已加入購物車的商品</h3>
            {cartContent.map((item: CartContent, idx) => (
              <>
                {!item.isPreviouslyAdded && <h3>新加入的商品</h3>}
                <MotionedCartItem
                  key={item.productID}
                  exit={{ opacity: 0, x: "-100%" }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={item.productThumbnail as string}
                    width={80}
                    height={100}
                    alt={item.productName as string}
                  />
                  <section>
                    <h6>商品名稱</h6>
                    <span>{item.productName}</span>
                  </section>
                  <section>
                    <h6>商品尺寸</h6>
                    <span>{item.selectedSize}</span>
                  </section>
                  <section>
                    <h6>商品顏色</h6>
                    <span>{item.selectedColor}</span>
                  </section>
                  <section>
                    <h6>商品數量</h6>
                    <span>{item.selectedQuantity}</span>
                  </section>
                  <section>
                    <h6>總金額</h6>
                    <span>{item.totalPrice}</span>
                  </section>
                  <Button
                    variant="outlined"
                    color="inherit"
                    startIcon={<DeleteOutline />}
                    onClick={() =>
                      setCartContent((prev) =>
                        prev.filter((_, index) => index !== idx),
                      )
                    }
                  >
                    刪除
                  </Button>
                </MotionedCartItem>
              </>
            ))}
            <section>
              <h3>購物車總金額</h3>
              <span>
                {cartContent.reduce(
                  (prev, curr) => (prev += curr.totalPrice!),
                  0,
                )}
              </span>
            </section>
            <ActionGroup>
              {!cartContent[cartContent.length - 1].isPreviouslyAdded && (
                <Button
                  color="info"
                  variant="outlined"
                  onClick={() => {
                    setCartContent((prev) =>
                      prev.filter((_, index) => index !== prev.length - 1),
                    );
                    setCartVisible(false);
                  }}
                >
                  取消加入購物車
                </Button>
              )}
              <Button
                color="info"
                variant="outlined"
                onClick={() => {
                  setCartVisible(false);
                  setCartContent((prev: CartContent[]) => {
                    const newCartContent = prev.map((item) => {
                      item.isPreviouslyAdded = true;
                      return item;
                    });
                    return newCartContent;
                  });
                }}
              >
                確定
              </Button>
              {cartContent[cartContent.length - 1].isPreviouslyAdded && (
                <Button
                  color="info"
                  variant="outlined"
                >
                  結帳
                </Button>
              )}
            </ActionGroup>
          </>
        )}
      </MotionedRoot>
    </AnimatePresence>
  );
}
