import React from "react";
import Flex from "../components/layout/Flex";
import playlist from "../assets/icons/playlist-alt.svg";
import home from "../assets/icons/home-alt.svg";
import play from "../assets/icons/play-alt.svg";
import limits from "../assets/images/limits.svg";
import cancelled from "../assets/images/cancelled.svg";
import life from "../assets/images/life.svg";
import seasons from "../assets/images/seasons.svg";
import SideBar from "../components/SideBar";
import Grid, { GridItem } from "../components/layout/Grid";
import "../styles/collectionpage.css";

const Collection = () => {
  const collections = [
    {
      image: limits,
      title: "Limits",
      artiste: "Limits",
    },
    {
      image: cancelled,
      title: "Limits",
      artiste: "Limits",
    },
    {
      image: life,
      title: "Limits",
      artiste: "Limits",
    },
    {
      image: seasons,
      title: "Limits",
      artiste: "Limits",
    },
  ];
  return (
    <Flex
      className="collection-padding"
      stack={true}
      spacing={24}
      style={{
        width: "100%",
        // padding: "110px 60px 24px 0px",
      }}
    >
      <Flex spacing={30}>
        <Flex
          ai="center"
          jc="center"
          className=" bg-yellow"
          style={{
            width: "120px",
            padding: "10px 17.5px 10px 17.5px",
            borderRadius: "27px",
          }}
        >
          <p className="dark-alt">My collection</p>
        </Flex>
        <Flex
          ai="center"
          jc="center"
          //   className=" bg-yellow"
          style={{
            width: "85px",
            padding: "10px 17.5px 10px 17.5px",
            borderRadius: "27px",
            background: "transparent",
            border: "1px solid #EFEEE0",
          }}
        >
          <p className="light">Likes</p>
        </Flex>
      </Flex>

      <Grid span={12} className="">
        {collections.map((collection, index) => {
          return (
            <GridItem
              key={index}
              span={2}
              md={11}
              className="collection"
              style={{
                position: "relative",
                background: `linear-gradient(179.89deg, rgba(0, 0, 0, 0) 0.1%, rgba(15, 18, 19, 0.85) 80.67%), url(${collection.image})  `,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Flex
                stack={true}
                style={{ position: "absolute", bottom: "20px", left: "20px" }}
              >
                <p className="white medium">{collection.title}</p>
                <p className="white small">{collection.artiste}</p>
              </Flex>
              <img
                src={play}
                style={{ position: "absolute", right: "20px", bottom: "20px" }}
              />
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  );
};

const CollectionPage = () => {
  return (
    <Flex>
      <SideBar playlist={playlist} home={home} />
      <Collection />
    </Flex>
  );
};

export default CollectionPage;
