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
import Grid, { GridItem } from "./layout/Grid";

const Footer = () => {
  return (
    <Grid className="app-footer " span={12}>
      <GridItem span={2} md={2} className="">
        <Flex className="" spacing={14}>
          <div style={{ height: "49px", width: "49px" }} className="">
            <img
              style={{ height: "49px", width: "49px", borderRadius: "14px" }}
              src={seasons}
              alt="seasons"
            />
          </div>
          <Flex stack={true} spacing={3}>
            <p className="white">Seasons in</p>
            <p className="gray smallest">James</p>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem span={8} md={0} className="">
        <Flex
          // className="flex-grow "
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
      </GridItem>
      <GridItem span={2} md={0} className="">
        <Flex className="" ai="center" spacing={7} style={{ height: "100%" }}>
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
      </GridItem>
      <GridItem span={0} md={10} className="">
        <Flex
          className="flex-grow "
          style={{ width: "100%", height: "100%" }}
          ai="center"
          jc="flex-end"
          spacing={25}
        >
          <img src={play1} />
          <img src={forward} />
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Footer;
