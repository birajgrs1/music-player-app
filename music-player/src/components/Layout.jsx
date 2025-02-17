import React from "react";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <>
    <Header/>
      <main className="mt-[4%]">{children}</main>
    </>
  );
};

export default Layout;
