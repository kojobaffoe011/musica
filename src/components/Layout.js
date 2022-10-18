import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Flex from "./layout/Flex";

const Layout = (props) => {
  return (
    <div
      className="bg-primary"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Flex stack={true}>{props.children}</Flex>
      <Footer />
    </div>
  );
};

export default Layout;
