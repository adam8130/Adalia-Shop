import Head from "next/head";
import Header from "@/modules/home/components/Header";
import Footer from "@/modules/home/components/Footer";

function LayoutWrapper({ children }: { children: React.ReactNode }): JSX.Element {
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
      {/* <script
        dangerouslySetInnerHTML={{
          __html: `
            if (!document.cookie || document.cookie.indexOf('token=') === -1) {
              window.sessionStorage.setItem('next', location.pathname + location.search);
              location.replace('/?sign_in=1')
            }
        `,
        }}
      /> */}
    </Head>
    <LayoutWrapper>{page}</LayoutWrapper>
  </>
);