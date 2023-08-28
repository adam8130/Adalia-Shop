import { NextPage } from "next";
import NextHead from "next/head";
import type { AppProps } from "next/app";
import { getHomeLayout } from "@/layout/HomeLayout";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/initApollo";
import "@/styles/globals.css";

export type NextPageWithLayout = NextPage & {
  getLayout: (page: JSX.Element) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function Head(): JSX.Element {

  return (
    <NextHead>
      <title key="title">Adalia Shop</title>
      <meta property="og:title" content={"og.title"} />
      <meta name="description" content={"og.description"} />
      <meta property="og:description" content={"og.description"} />
    </NextHead>
  );
}

export function AdaliaShop(props: AppPropsWithLayout): JSX.Element {
  const { Component, pageProps } = props;
  return (
    <>
      <Head />
      <ApolloProvider client={client}>
        {Component.getLayout ? (
          Component.getLayout(<Component {...pageProps} />)
        ) : (
          <Component {...pageProps} />
        )}
      </ApolloProvider>
    </>
  );
}


(AdaliaShop as NextPageWithLayout).getLayout = getHomeLayout;
export default AdaliaShop;  
