import React from "react";
import ProductHome from "@/modules/product/ProductHome";
import { useRouter, withRouter } from "next/router";
import { GetServerSideProps } from "next";
import { NextPageWithLayout } from "@/pages/_app";
import { getHomeLayout } from "@/layout/HomeLayout";
import Head from "next/head";
import Loading from "@/components/Loading";
import { useGetProductDetailQuery, ProductDetail } from "@/__generated__/types";

function ProductPage() {
  const router = useRouter();

  const { loading, data, error } = useGetProductDetailQuery({
    variables: { 
      productID: router.query.product as string,
      productSeriesEN: router.query.item as string
    }
  });

  if (loading && !data) return <Loading />;

  return (
    <>
      <Head>
        <title key="title">Adalia | Product Detail</title>
      </Head>
      {data &&
        <ProductHome 
          productDetail={data?.getProductDetail as ProductDetail} 
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
