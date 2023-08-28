import { getHomeLayout } from "@/layout/HomeLayout";
import { NextPageWithLayout } from "../_app";
import { useGetSpringSeriesQuery } from "@/__generated__/types";
import { Loading } from "@/components/Loading";
import SpringHome from "@/modules/spring/SpringHome";
import Head from "next/head";


function SpringPage() {

  const { loading, data } = useGetSpringSeriesQuery();
  
  if (loading) return <Loading />;

  return (
    <>
      <Head>
        <title key="title">Adalia | Spring Series</title>
      </Head>
      {data && <SpringHome products={data.getSpringSeries} />}
    </>
  )
}

(SpringPage as unknown as NextPageWithLayout).getLayout = getHomeLayout;
export default SpringPage;