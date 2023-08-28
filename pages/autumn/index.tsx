import { getHomeLayout } from "@/layout/HomeLayout";
import { NextPageWithLayout } from "../_app";
import { useGetAutumnSeriesQuery } from "@/__generated__/types";
import { Loading } from "@/components/Loading";
import AutumnHome from "@/modules/autumn/AutumnHome";
import Head from "next/head";


function AutumnPage() {

  const { loading, data } = useGetAutumnSeriesQuery();
  
  if (loading) return <Loading />;

  return (
    <>
      <Head>
        <title key="title">Adalia | Autumn Series</title>
      </Head>
      {data && <AutumnHome products={data.getAutumnSeries} />}
    </>
  )
}

(AutumnPage as unknown as NextPageWithLayout).getLayout = getHomeLayout;
export default AutumnPage;