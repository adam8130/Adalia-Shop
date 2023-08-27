import { styled, Grid, useMediaQuery } from "@mui/material";
import { RelatedProducts } from "@/__generated__/types";
import { useStore } from "@/store";
import Image from "next/image";
import { useHoverImages } from "@/hooks/useHoverImages";
import { useRouter } from "next/router";

const RootGrid = styled(Grid)(
  ({ mobile }: { mobile: number }) => `
    width: 90%;
    margin: 20px auto;
    .MuiGrid-container {
      margin-top: 10px;
      padding: 20px;
      border: 1px solid rgba(0, 0, 0, 0.3);
    }
    .MuiGrid-item {
      padding: 0 10px;
      margin: 10px 0;
      p {
        font-weight: 300;
      }
      h1 {
        margin-bottom: 10px;
      }
      h1:nth-of-type(2) {
        margin-top: 20px;
      }
    }
    ${!mobile && `
      .MuiGrid-item:nth-of-type(2) {
        border-left: 1px solid rgba(0, 0, 0, 0.2);
        padding-left: 40px;
      }
    `};
    h1 {
      font-size: 24px;
      letter-spacing: 2px;
    }
  `
);
const RelatedProductGrid = styled(Grid)(
  ({ mobile }: { mobile: number }) => `
    .MuiGrid-item {
      div {
        width: ${mobile ? '120px' : '180px'};
        height: ${mobile ? '150px' : '200px'};
        margin: auto;
        cursor: pointer;
        position: relative;
      }
      h3 {
        margin: 10px 0;
        letter-spacing: 2px;
        text-align: center;
      }
      p {
        text-align: center;
      }
    }
    .MuiGrid-item:nth-of-type(2) {
      border-left: none;
      padding-left: 10px;
    }
  `
);

export function ProductDescription({
  description,
  relatedProducts,
}: {
  description: string;
  relatedProducts: RelatedProducts[];
}) {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width:768px)");
  const { payment, delivery } = useStore();
  const { setRefsCallback } = useHoverImages();

  return (
    <RootGrid mobile={Number(isMobile)}>
      <Grid container>
        <Grid item xs={12} md={8}>
          <h1>商品描述</h1>
          <p>{description}</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <h1>付款方式</h1>
          {payment?.map((item, idx) => (
            <p key={idx}>
              {"- "}{item}
            </p>
          ))}
          <h1>運送方式</h1>
          {delivery?.map((item, idx) => (
            <p key={idx}>
              {"- "}{item}
            </p>
          ))}
        </Grid>
      </Grid>
      <RelatedProductGrid container mobile={Number(isMobile)}>
        <Grid item xs={12}>
          <h1>同系列商品</h1>
        </Grid>
        {relatedProducts.map((item, idx) => (
          <Grid 
            key={idx}
            item 
            xs={6}
            md={3}
            onClick={() => {
              router.push({
                pathname: `/product/[series]`,
                query: {
                  series: item?.productSeriesEN?.toLocaleLowerCase().replace(' ', ''),
                  product: item?.productID,
                }
              })
            }}
          >
            <div ref={setRefsCallback}>
              <Image 
                src={item?.productImages?.[0]?.url as string} 
                alt={item?.productName as string} 
                style={{ objectFit: 'cover' }}
                priority
                sizes="(max-width: 768px) 100vw"
                fill
              />
              <Image 
                src={item?.productImages?.[1]?.url as string} 
                alt={item?.productName as string} 
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw"
                priority
                fill
              />
            </div>
            <h3>{item?.productName}</h3>
            <p>{item?.productPrice}</p>
          </Grid>
        ))}
      </RelatedProductGrid>
    </RootGrid>
  );
}
