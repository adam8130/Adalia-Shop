import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Grid, styled } from "@mui/material";
import { AllProductGroup } from "@/__generated__/types";
import Image from "next/image";
import { useHoverImages } from "@/hooks/useHoverImages";

const Root = styled("div")`
  width: 100%;
  padding: 20px 40px;
  display: flex;
`;
const ProductWrapper = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 250px;
    height: 350px;
  }
  span {
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
  }
  h3 {
    letter-spacing: 2px;
    font-weight: 300;
  }
  h6 {
    letter-spacing: 1px;
  }
  img:hover {
    cursor: pointer;
  }
`;

function ProductWall({ productList }: { productList: AllProductGroup[] }): JSX.Element {
  
  const router = useRouter();
  const { setRefsCallback } = useHoverImages();

  return (
    <Root>
      <Grid container rowSpacing={5}>
        {productList.map((item) => item.products.map((item) => (
          <Grid
            item
            key={item.productID}
            xs={12}
            sm={6}
            md={4}
            columnSpacing={2}
          >
            <ProductWrapper
              onClick={() => router.push({ 
                pathname: `/product/${item.productSeriesEN.toLocaleLowerCase().replace(' ', '')}`, 
                query: { product: item.productID } 
              })}
            >
              <div ref={setRefsCallback}>
                <Image
                  src={item.productImages[0].url}
                  style={{ objectFit: 'cover' }}
                  alt={item.productName}
                  priority
                  sizes="(max-width: 768px) 100vw"
                  fill
                />
                <Image
                  src={item.productImages[1].url}
                  style={{ objectFit: 'cover' }}
                  alt={item.productName}
                  priority
                  sizes="(max-width: 768px) 100vw"
                  fill
                />
              </div>
              <span>{item.productSeriesZH}</span>
              <h3>{item.productName}</h3>
              <h6>{"$ "}{item.productPrice}</h6>
            </ProductWrapper>
          </Grid>
        )))}
      </Grid>
    </Root>
  );
}

export default ProductWall;
