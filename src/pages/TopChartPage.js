import React from "react";
import Flex from "../components/layout/Flex";
import SideBar from "../components/SideBar";
import playlist from "../assets/icons/playlist.svg";
import play from "../assets/icons/little-play.svg";
import add from "../assets/icons/add.svg";
import heart from "../assets/icons/heart.svg";
import like from "../assets/icons/heart-alt.svg";
import home from "../assets/icons/Home.svg";
import dots from "../assets/icons/dot.svg";
import lead from "../assets/images/Lead-image.svg";
import cancelled from "../assets/images/cancelled.svg";
import Grid, { GridItem } from "../components/layout/Grid";

const TextAndIcon = (props) => {
  return (
    <Flex style={{ padding: "11px 11px" }} className="radius bg-trans-dark">
      <p className={`small white ${props.textClassName}`}>{props.children}</p>
    </Flex>
  );
};
const Songs = () => {
  const songs = [
    {
      image: cancelled,
      title: "Let me love you ~ Krisx",
      album: "Single",
      timestamp: "4:17",
    },
    {
      image: cancelled,
      title: "Let me love you ~ Krisx",
      album: "Single",
      timestamp: "4:17",
    },
    {
      image: cancelled,
      title: "Let me love you ~ Krisx",
      album: "Single",
      timestamp: "4:17",
    },
    {
      image: cancelled,
      title: "Let me love you ~ Krisx",
      album: "Single",
      timestamp: "4:10",
    },
  ];
  return (
    <Flex
      className=" bg-gray-alt"
      style={{ padding: "8px 40px 8px 10px", borderRadius: "8.5px" }}
      ai="center"
    >
      <div style={{ flexBasis: "5%" }} className="bordered">
        <img
          src={cancelled}
          style={{ height: "49px", width: "49px", borderRadius: "14px" }}
        />
      </div>
      <Flex style={{ flexBasis: "5%" }} className="bordered">
        <img src={like} />
      </Flex>
      <Flex style={{ flexBasis: "25%" }} className="bordered" jc="center">
        <p className="white small bold">Let me love you ~ Krisx</p>
      </Flex>
      <Flex style={{ flexBasis: "25%" }} className="bordered" jc="center">
        <p className="white small bold">Single</p>
      </Flex>
      <Flex style={{ flexBasis: "25%" }} className="bordered" jc="center">
        <p className="white small bold">4:17</p>
      </Flex>
      <Flex style={{ flexBasis: "15%" }} className="bordered" jc="flex-end">
        <img src={dots} />
      </Flex>
    </Flex>
  );
};

const Description = () => {
  return (
    <Flex
      className="bordered"
      style={{ width: "100%", padding: "110px 60px 24px 0px" }}
      stack={true}
    >
      <Flex>
        <Grid span={12} className="">
          <GridItem span={3} md={12} className="">
            <img
              src={lead}
              style={{ width: "100%", borderRadius: "35.1703px" }}
            />
          </GridItem>
          <GridItem
            span={9}
            md={12}
            className=""
            style={{ position: "relative" }}
          >
            <Flex
              className=""
              style={{ position: "absolute", top: "80px", width: "100%" }}
              stack={true}
            >
              <p className="largest blue">Tomorrow's Tunes</p>
              <p className="white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis
              </p>
              <p className="white">64 songs ~ 16 hrs+</p>
              <Flex spacing={9}>
                <TextAndIcon>
                  <Flex ai="center" spacing={11.33}>
                    <img src={play} />
                    Play all
                  </Flex>
                </TextAndIcon>
                <TextAndIcon>
                  <Flex ai="center" spacing={11.33}>
                    <img src={add} />
                    Add to collection
                  </Flex>
                </TextAndIcon>
                <TextAndIcon>
                  <Flex ai="center" spacing={11.33}>
                    <img src={heart} />
                  </Flex>
                </TextAndIcon>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
};

const TopChartPage = () => {
  return (
    <Flex className="bordered">
      <SideBar playlist={playlist} home={home} />
      <Description />
    </Flex>
  );
};

export default TopChartPage;
