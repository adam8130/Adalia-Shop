import { NextPageWithLayout } from '@/pages/_app'
import { getHomeLayout } from "@/layout/HomeLayout";
import SaleHome from "@/modules/sale/SaleHome";
import Head from "next/head";

function SalePage() {
  return (
    <>
      <Head>
        <title key="title">Adalia | Sale</title>
      </Head>
      <SaleHome />
    </>
  )
};

(SalePage as unknown as NextPageWithLayout).getLayout = getHomeLayout;
export default SalePage;