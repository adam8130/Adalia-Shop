import { useEffect } from "react";
import { useGetShopSettingsQuery } from "@/__generated__/types";
import { Loading } from "@/components/Loading";
import { useStore } from "@/store";
import Head from "next/head";
import Header from "@/modules/home/components/Header";
import Footer from "@/modules/home/components/Footer";


function LayoutWrapper({ children }: { children: React.ReactNode }): JSX.Element {
  
  const { setShopMenuItems, setShopTips, setShopCampaigns, setShopPayment, setShopDelivery } = useStore()
  const { loading, data } = useGetShopSettingsQuery()

  useEffect(() => {
    if (loading) return;

    const { shopMenuItems, shopTips, shopCampaigns, shopPayment, shopDelivery } = data?.getShopSettings!
    setShopMenuItems(shopMenuItems)
    setShopTips(shopTips)
    setShopCampaigns(shopCampaigns)
    setShopPayment(shopPayment)
    setShopDelivery(shopDelivery)

  }, [loading, data, setShopMenuItems, setShopTips, setShopCampaigns, setShopPayment, setShopDelivery])

  if (loading) return <Loading />
  
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
}

export const getHomeLayout = (page: React.ReactNode): JSX.Element => (
  <>
    <Head>
      {/* <script/> */}
    </Head>
    <LayoutWrapper>{page}</LayoutWrapper>
  </>
);