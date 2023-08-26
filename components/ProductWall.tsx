import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Grid, styled } from "@mui/material";
import { AllProductGroup } from "@/__generated__/types";
import Image from "next/image";

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
    width: 300px;
    height: 450px;
    position: relative;
    img:nth-of-type(1) {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      opacity: 1;
      transition: all 0.5s;
    }
    img:nth-of-type(2) {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      opacity: 0;
      transition: all 0.5s;
    }
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

function ProductWall({
  displayAmount = 6,
  productList,
}: {
  displayAmount?: number;
  productList: AllProductGroup[];
}): JSX.Element {
  const [refsArray, setRefsArray] = useState<(HTMLDivElement | null)[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (!refsArray[0]) return;

    const handleMouseEnter = (ref: HTMLDivElement) => {
      (ref.children[0] as HTMLElement).style.zIndex = "0";
      (ref.children[1] as HTMLElement).style.zIndex = "1";
      (ref.children[0] as HTMLElement).style.opacity = "0";
      (ref.children[1] as HTMLElement).style.opacity = "1";
    };
    const handleMouseLeave = (ref: HTMLDivElement) => {
      (ref.children[0] as HTMLElement).style.zIndex = "1";
      (ref.children[1] as HTMLElement).style.zIndex = "0";
      (ref.children[0] as HTMLElement).style.opacity = "1";
      (ref.children[1] as HTMLElement).style.opacity = "0";
    };

    refsArray.forEach((ref) => {
      ref?.addEventListener("mouseenter", () => handleMouseEnter(ref));
      ref?.addEventListener("mouseleave", () => handleMouseLeave(ref));
    });

    return () => {
      refsArray.forEach((ref) => {
        if (ref) {
          ref.removeEventListener("mouseenter", () => handleMouseEnter(ref));
          ref.removeEventListener("mouseleave", () => handleMouseLeave(ref));
        }
      });
    };
  }, [refsArray]);

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
                pathname: `/product/[series]`,
                query: {
                  series: item.productSeriesEN.toLocaleLowerCase().replace(' ', ''),
                  product: item.productID,
                },
              })}
            >
              <div
                ref={(ref: HTMLDivElement) => {
                  !refsArray.includes(ref) &&
                    setRefsArray((prev) => [...prev, ref]);
                }}
              >
                <Image
                  src={item.productImages[0].url}
                  width={300}
                  height={450}
                  priority
                  alt={item.productName}
                />
                <Image
                  src={item.productImages[1].url}
                  width={300}
                  height={450}
                  priority
                  alt={item.productName}
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
