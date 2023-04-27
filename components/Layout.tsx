import Head from 'next/head';
import type { NextraThemeLayoutProps } from 'nextra'
export const Layout = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
