
import { NextPageWithLayout } from './_app'
import { withRouter } from 'next/router'
import { getHomeLayout } from '@/layout/HomeLayout'
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Home from '@/modules/home/Home';
import Loading from '@/components/Loading';
import { useGetAllProductQuery } from '@/__generated__/types';

function App() {
  const { loading, data, error } = useGetAllProductQuery()

  if (loading && !data) return <Loading />;
  return (
    <>
      <Head>
        <title key="title">Adalia | Home</title>
      </Head>
      {data && <Home data={data.getAllProducts} /> }
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   return { };
// } 

const Page = withRouter(App);
(Page as unknown as NextPageWithLayout).getLayout = getHomeLayout;
export default Page;