import { getHomeLayout } from "@/layout/HomeLayout";
import { NextPageWithLayout } from "../_app";
import NewArrivalsHome from "@/modules/newarrivals/NewArrivalsHome";
import Head from "next/head";


function NewArrivalsPage() {
  return (
    <>
      <Head>
        <title key="title">Adalia | New Arrivals</title>
      </Head>
      <NewArrivalsHome />
    </>
  )
}

(NewArrivalsPage as unknown as NextPageWithLayout).getLayout = getHomeLayout;
export default NewArrivalsPage;