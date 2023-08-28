import { getHomeLayout } from "@/layout/HomeLayout";
import { NextPageWithLayout } from "../_app";
import { useGetNewArrivalsSeriesQuery } from "@/__generated__/types";
import { Loading } from "@/components/Loading";
import NewArrivalsHome from "@/modules/newarrivals/NewArrivalsHome";
import Head from "next/head";


function NewArrivalsPage() {

  const { loading, data } = useGetNewArrivalsSeriesQuery();
  
  if (loading) return <Loading />;

  return (
    <>
      <Head>
        <title key="title">Adalia | New Arrivals</title>
      </Head>
      {data && <NewArrivalsHome products={data.getNewArrivalsSeries} />}
    </>
  )
}

(NewArrivalsPage as unknown as NextPageWithLayout).getLayout = getHomeLayout;
export default NewArrivalsPage;