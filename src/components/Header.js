import React from "react";
import Flex from "./layout/Flex";
import "../styles/header.css";
import logo from "../assets/icons/logo.svg";
import burger from "../assets/icons/burger.svg";
import search from "../assets/icons/search.svg";
import Grid, { GridItem } from "./layout/Grid";

const Header = () => {
  return (
    <Grid span={12} className=" header bg-primary">
      <GridItem span={1} md={0}>
        <div className=" header-icon">
          <img src={logo} alt="logo" />
        </div>
      </GridItem>
      <GridItem span={11} md={0}>
        <Flex
          className="  flex-grow "
          style={{ paddingLeft: "30px", height: "100%" }}
        >
          <input
            type="text"
            font="regular"
            className="icon input flex-grow medium"
            placeholder="Search artistes"
            style={{ fontFamily: "regular" }}
          />
        </Flex>
      </GridItem>
      <GridItem span={0} md={12} style={{ height: "10vh" }}>
        <Flex className="" style={{ height: "100%" }} ai="center">
          <Flex ai="center" spacing={26}>
            <img src={burger} style={{ height: "16px", width: "16px" }} />
            <img src={logo} style={{ height: "30px", width: "30px" }} />
          </Flex>
          <Flex className="flex-grow " jc="flex-end">
            <img
              src={search}
              alt="search"
              style={{ height: "20px", width: "25px" }}
            />
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Header;
