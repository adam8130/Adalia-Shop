import { getHomeLayout } from "@/layout/HomeLayout";
import { NextPageWithLayout } from "../_app";
import AllHome from "@/modules/all/AllHome";
import Head from "next/head";
import { useGetAllSeriesProductsQuery } from "@/__generated__/types";
import { Loading } from "@/components/Loading";

function AllPage() {
  const { loading, data, error } = useGetAllSeriesProductsQuery({
    variables: { 
      quantity: 4
    }
  });

  if (loading) return <Loading />;

  return (
    <>
      <Head>
        <title key="title">Adalia | All Series</title>
      </Head>
      {data && <AllHome allProducts={data.getAllSeriesProducts} />}
    </>
  )
}

(AllPage as unknown as NextPageWithLayout).getLayout = getHomeLayout;
export default AllPage;