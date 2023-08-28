
import { NextPageWithLayout } from './_app'
import { getHomeLayout } from '@/layout/HomeLayout'
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Home from '@/modules/home/Home';
import { Loading } from '@/components/Loading';
import { useGetAllSeriesProductsQuery } from '@/__generated__/types';

function App() {
  const { loading, data, error } = useGetAllSeriesProductsQuery({
    variables: { 
      quantity: 3
    }
  })

  if (loading && !data) return <Loading />;

  return (
    <>
      <Head>
        <title key="title">Adalia | Home</title>
      </Head>
      {data && <Home allProducts={data.getAllSeriesProducts} /> }
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   return { };
// } 

(App as unknown as NextPageWithLayout).getLayout = getHomeLayout;
export default App;