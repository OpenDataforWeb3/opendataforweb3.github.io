import "../styles/custom.css";
import type { AppProps } from "next/app";
import type { ReactNode } from "react";
import { Layout } from "../components/Layout";

type NextraAppProps = AppProps & {
  Component: AppProps["Component"] & {
    getLayout: (page: ReactNode) => ReactNode;
  };
};



export default function Nextra({ Component, pageProps }: NextraAppProps) {
  return (
    <Layout>
     <Component {...pageProps} />
    </Layout>
  );
}