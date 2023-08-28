import { getHomeLayout } from "@/layout/HomeLayout";
import KnitwearHome from "@/modules/knitwear/KnitwearHome";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

function KnitwearPage() {
  return (
    <>
      <Head>
        <title key="title">Adalia | Knitwear</title>
      </Head>
      <KnitwearHome />
    </>
  )
};

(KnitwearPage as unknown as NextPageWithLayout).getLayout = getHomeLayout;
export default KnitwearPage;