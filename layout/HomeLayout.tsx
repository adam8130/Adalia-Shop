import { useEffect } from "react";
import Head from "next/head";
import Header from "@/modules/home/components/Header";
import Footer from "@/modules/home/components/Footer";
import { useGetShopSettingsQuery } from "@/__generated__/types";
import Loading from "@/components/Loading";
import { useStore } from "@/store";

function LayoutWrapper({ children }: { children: React.ReactNode }): JSX.Element {
  
  const { setMenubarItems,setShopTips,setShopCampaigns,setPayment,setDelivery } = useStore()
  const { loading, data } = useGetShopSettingsQuery()
  
  useEffect(() => {
    if (loading) return;

    const { menubarItems, shopTips, shopCampaigns, payment, delivery } = data?.getShopSettings!
    setMenubarItems(menubarItems)
    setShopTips(shopTips)
    setShopCampaigns(shopCampaigns)
    setPayment(payment)
    setDelivery(delivery)

  }, [loading, data, setMenubarItems, setShopTips, setShopCampaigns, setPayment, setDelivery])

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