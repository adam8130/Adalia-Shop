import React from "react";
import ProductHome from "@/modules/product/ProductHome";
import { useRouter, withRouter } from "next/router";
import { GetServerSideProps } from "next";
import { NextPageWithLayout } from "@/pages/_app";
import { getHomeLayout } from "@/layout/HomeLayout";
import Head from "next/head";
import Loading from "@/components/Loading";
import { useGetProductDetailQuery, useGetProductTipsQuery, Product, ProductTips } from "@/__generated__/types";

function ProductPage() {
  const router = useRouter();
  const productID = router.query.item;
  const { loading: tipsLoaded, data: productTips } = useGetProductTipsQuery();
  const { loading: dataLoaded, data: product } = useGetProductDetailQuery({
    variables: { productID: productID as string },
  });

  if (tipsLoaded && dataLoaded && !product) return <Loading />;

  return (
    <>
      <Head>
        <title key="title">Adalia | Product Detail</title>
      </Head>
      {product && productTips &&
        <ProductHome 
          product={product?.getProductDetail as Product} 
          productTips={(productTips?.getProductTips as ProductTips)} 
        />
      }
    </>
  );
}

// export const getStaticProps: GetServerSideProps = async ({ locale }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale!, ['common', 'strategies'], nextI18NextConfig)),
//     },
//   };
// };

const Page = withRouter(ProductPage);
(Page as unknown as NextPageWithLayout).getLayout = getHomeLayout;
export default Page;
