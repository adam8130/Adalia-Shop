import { getHomeLayout } from "@/layout/HomeLayout";
import TopsHome from "@/modules/tops/TopsHome";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

function TopsPage() {
  return (
    <>
      <Head>
        <title key="title">Adalia | Tops</title>
      </Head>
      <TopsHome />
    </>
  )
};

(TopsPage as unknown as NextPageWithLayout).getLayout = getHomeLayout;
export default TopsPage;