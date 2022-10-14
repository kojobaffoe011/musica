import React from "react";
import Flex from "./layout/Flex";
import "../styles/header.css";
import logo from "../assets/icons/logo.svg";
import search from "../assets/icons/search.svg";

const Header = () => {
  return (
    <Flex className="header bordered bg-primary">
      <div className=" header-icon">
        <img src={logo} alt="logo" />
      </div>
      <Flex className="flex-grow " style={{ paddingLeft: "30px" }}>
        <input
          className="icon input flex-grow"
          placeholder="Search your artists"
        />
      </Flex>
    </Flex>
  );
};

export default Header;
