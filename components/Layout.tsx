import Head from 'next/head';
import type { NextraThemeLayoutProps } from 'nextra'
export const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>OpenData Community</title>
      </Head>
      <div>{children}</div>
    </div>
  );
};
