import { useHoverImages } from "@/hooks/useHoverImages";
import { Product } from "@/__generated__/types";
import { styled, Grid, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";

const ContainerGrid = styled(Grid)(
  ({ mobile }: { mobile: number }) => `
    width: 90%;
    margin: 20px auto;
    > .MuiGrid-item:nth-of-type(1) {
      display: flex;
      gap: 10px;
      align-items: end;
      letter-spacing: 2px;
      margin-top: 10px;
      margin-bottom: 20px;
      h1 {
        font-size: 32px;
        line-height: 32px;
        font-weight: 300;
      }
      span {
        font-size: 20px;
        line-height: 28px;
        font-weight: 300;
      }
    }
    .MuiGrid-item {
      text-align: center;
      margin: 20px 0;
      div {
        width: ${mobile ? '150px' : '380px'};
        height: ${mobile ? '200px' : '540px'};
        margin: auto;
        cursor: pointer;
      }
      h3 {
        margin: ${mobile ? '0' : '10px 0'};
        letter-spacing: 2px;
        text-align: center;
      }
      p {
        font-weight: 300;
      }
    }
  `
);

export default function AutumnHome({ products }: { products: Product[] }) {
  const { setRefsCallback } = useHoverImages();
  const isMobile = useMediaQuery('(max-width:768px)');
  const router = useRouter();

  return (
    <>
      <ContainerGrid
        container
        mobile={Number(isMobile)}
      >
        <Grid item xs={12}>
          <h1>{products[0].productSeriesEN}</h1>
          <span>Series</span>
        </Grid>
        {products.map((product, idx) => (
          <Grid 
            key={idx} 
            item 
            xs={6} 
            md={4}
            onClick={() => router.push({ 
              pathname: `/product/${product?.productSeriesEN?.toLocaleLowerCase().replace(' ', '')}`, 
              query: { product: product.productID } 
            })}
          >
            <div ref={setRefsCallback}>
              <Image
                src={product?.productImages?.[0]?.url as string} 
                alt={product?.productName as string} 
                style={{ objectFit: 'cover' }}
                priority
                sizes="(max-width: 768px) 100vw"
                fill
              />
              <Image 
                src={product?.productImages?.[1]?.url as string} 
                alt={product?.productName as string} 
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw"
                priority
                fill
              />
            </div>
            <h3>{product?.productName}</h3>
            <p>{product?.productPrice}</p>
          </Grid>
        ))}
      </ContainerGrid>
    </>
  )
}
