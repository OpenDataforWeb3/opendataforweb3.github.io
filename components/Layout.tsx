import Head from "next/head";

export const Layout = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
