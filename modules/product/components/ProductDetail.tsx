import { useState } from "react";
import { ProductTips, Product } from "@/__generated__/types";
import { Button, Grid, Stack, styled, useMediaQuery } from "@mui/material";
import { useStore } from "@/store";
import { motion } from "framer-motion";
import { Observer } from "mobx-react-lite";
import Image from "next/image";

const RootGrid = styled(Grid)`
  width: 90%;
  margin: auto;
  display: flex;
`;
const ImagesGrid = styled(Grid)(({ mobile }: { mobile: Number }) => `
  width: 100%;
  height: ${mobile ? '400px' : '550px'};
  display: flex;
  margin: 20px 0;
  justify-content: center;
  gap: 10px;
  div:nth-of-type(1) {
    width: 400px;
    height: 100%;
    display: flex;
    position: relative;
    img {
      width: 400px;
      height: ${mobile ? '400px' : '550px'};
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.5s;
    }
  }
`);
const ThumbnailPannel = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  img {
    cursor: pointer;
  }
`;
const DetailGrid = styled(Grid)`
  width: 100%;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.3);
  > h1 {
    font-size: 40px;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }
  > h3 {
    width: 100%;
    padding: 0 20px;
    font-size: 16px;
    text-align: left;
  }
  > h6 {
    font-weight: 300;
    letter-spacing: 2px;
    margin-bottom: 20px;
  }
  > span {
    width: 100%;
    text-align: left;
    padding: 0 20px;
    font-size: 14px;
  }
`;
const AvailableOptions = styled("div")`
  width: 100%;
  padding: 0 20px;
  margin: 20px 0;
  h3 {
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 400;
  }
  select {
    width: 50%;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 5px 0;
    margin-bottom: 10px;
  }
  section {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    div {
      width: 40px;
      height: 40px;
      border-radius: 5px;
      box-sizing: content-box;;
      cursor: pointer;
    }
  }
`;

export function ProductDetail({
  product,
  productTips,
}: {
  product: Product;
  productTips: ProductTips;
}) {
  const isMobile = useMediaQuery("(max-width:768px)");
  const { setCartContent, setCartVisible } = useStore();
  const [currentProductIdx, setCurrentProductIdx] = useState(0);
  const [currentSizeIdx, setCurrentSizeIdx] = useState(0);
  const [currentColorIdx, setCurrentColorIdx] = useState(0);
  const [currentQuantity, setCurrentQuantity] = useState(1);

  return (
    <Observer>
      {() => (
        <RootGrid container>
          <ImagesGrid item sm={12} md={7} mobile={Number(isMobile)}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {product.images.map((item, idx) => (
                <Image
                  key={idx}
                  src={item.url}
                  width={400}
                  height={550}
                  priority
                  alt={product.productName}
                  style={{ opacity: idx === currentProductIdx ? 1 : 0 }}
                />
              ))}
            </motion.div>
            <ThumbnailPannel>
              {product.images.map((item, idx) => (
                <Image
                  key={idx}
                  src={item.url}
                  width={100}
                  height={150}
                  priority
                  alt={product.productName}
                  onClick={() => setCurrentProductIdx(idx)}
                />
              ))}
            </ThumbnailPannel>
          </ImagesGrid>
          <DetailGrid item sm={12} md={5}>
            <h1>{product.productName}</h1>
            <h6>{product.productSeries}</h6>
            {productTips.tips.map((item, idx) => (
              <span key={idx}>{item}</span>
            ))}
            <AvailableOptions>
              <h3>尺寸</h3>
              <select 
                value={currentSizeIdx} 
                onChange={(e) => setCurrentSizeIdx(Number(e.target.value))}
              >
                {product.availableSize?.map((item, idx) => (
                  <option key={idx} value={idx}>
                    {item.size}
                  </option>
                ))}
              </select>
              <h3>顏色</h3>
              <section>
                {product.availableSize?.[currentSizeIdx].stock?.map((item, idx) => (
                  <div
                    key={idx}
                    style={{ 
                      background: item?.backgroundColor as string,
                      border: idx === currentColorIdx ? "2px solid #60c6db" : "1px solid gray"
                    }}
                    onClick={() => setCurrentColorIdx(idx)}
                  />
                ))}
              </section>
              <h3>數量</h3>
              <select
                value={currentQuantity}
                onChange={(e) => setCurrentQuantity(Number(e.target.value))}
              >
                {Array.from(
                  Array(
                    product.availableSize?.[currentSizeIdx]?.stock?.[currentColorIdx]?.stock|| 1
                  ).keys(),
                ).map((item, idx) => (
                  <option key={idx} value={item + 1}>
                    {item + 1}
                  </option>
                ))}
              </select>
            </AvailableOptions>
            <h3>{"售價 NTD "}{currentQuantity * product.price}</h3>
            <Stack direction="row" spacing={2} width="100%" my="20px" pl="20px">
              <Button 
                variant="outlined" 
                color="info"
                onClick={() => {
                  setCartVisible(true);
                  setCartContent((prev) => [...prev,{
                    productID: product.productID,
                    productName: product.productName,
                    productThumbnail: product.images[0].url,
                    selectedSize: product.availableSize?.[currentSizeIdx].size,
                    selectedColor: product.availableSize?.[currentSizeIdx]?.stock?.[currentColorIdx]?.color,
                    selectedQuantity: currentQuantity,
                    totalPrice: currentQuantity * product.price,
                    isPreviouslyAdded: false
                  }])
                }}
              >
                加入購物車
              </Button>
              <Button variant="outlined" color="success">立即購買</Button>
            </Stack>
          </DetailGrid>
        </RootGrid>
      )}
    </Observer>
  );
}
