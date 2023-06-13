import { node } from "prop-types";
import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
// import { MenuProvider } from "./header/topNavBar/menu class/menu/MenuProvider";

import Main from "./main/Main";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: node.isRequired,
};
