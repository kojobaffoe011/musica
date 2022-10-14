import React from "react";
import Flex from "./layout/Flex";
import "../styles/footer.css";
import seasons from "../assets/images/seasons.png";
import sound from "../assets/icons/sound.svg";
import shuffle from "../assets/icons/shuffle.svg";
import reserve from "../assets/icons/reverse.svg";
import play from "../assets/icons/play.svg";
import play1 from "../assets/icons/play1.svg";
import forward from "../assets/icons/forward.svg";
import repeat from "../assets/icons/repeat.svg";

const Footer = () => {
  return (
    <Flex className="app-footer " spacing={4}>
      <Flex className="" style={{ flexBasis: "15%" }} spacing={14}>
        <div style={{ height: "49px", width: "49px" }} className="">
          <img
            style={{ height: "49px", width: "49px", borderRadius: "14px" }}
            src={seasons}
            alt="seasons"
          />
        </div>
        <Flex stack={true} spacing={3}>
          <p className="white">Seasons in</p>
          <p className="gray">James</p>
        </Flex>
      </Flex>
      <Flex
        className="flex-grow "
        stack={true}
        spacing={25}
        style={{ paddingRight: "25px" }}
      >
        <Flex className="" jc="center" ai="center" spacing={42}>
          <img src={shuffle} alt="shuffle" />
          <img src={reserve} alt="reserve" />
          <img src={play1} alt="play" />
          <img src={forward} alt="forward" />
          <img src={repeat} alt="repeat" />
        </Flex>
        <div
          className="bg-white "
          style={{ height: "4px", marginTop: "auto" }}
          ai="flex-end"
        ></div>
      </Flex>
      <Flex className="" style={{ flexBasis: "15%" }} ai="center" spacing={7}>
        <img src={sound} alt="sound" />
        <div
          className=" flex-grow"
          style={{
            height: "3px",
            borderRadius: "42px",
            backgroundColor: "white",
          }}
        ></div>
      </Flex>
    </Flex>
  );
};

export default Footer;
