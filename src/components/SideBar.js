import React from "react";
import Flex from "./layout/Flex";
import home from "../assets/icons/Home.svg";
import playlist from "../assets/icons/playlist.svg";
import radio from "../assets/icons/radio.svg";
import vid from "../assets/icons/vid.svg";
import user from "../assets/icons/user.svg";
import logout from "../assets/icons/logout.svg";

const SideBar = (props) => {
  return (
    <Flex
      stack={true}
      style={{ padding: "110px 24px 24px 24px" }}
      className=""
      spacing={20}
    >
      <Flex
        style={{ padding: "18px" }}
        className=" bg-dark rounded"
        stack={true}
        spacing={38}
      >
        <img src={props.home} alt="home" />
        <img src={props.playlist} alt="playlist" />
        <img src={radio} alt="radio" />
        <img src={vid} alt="video" />
      </Flex>
      <Flex
        style={{ padding: "18px" }}
        className="bg-dark rounded "
        spacing={38}
        stack={true}
      >
        <img src={user} alt="user" />
        <img src={logout} alt="logout" />
      </Flex>
    </Flex>
  );
};

export default SideBar;
