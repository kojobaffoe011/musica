import React from "react";
import Flex from "../components/layout/Flex";
import Grid, { GridItem } from "../components/layout/Grid";
import "../styles/homepage.css";
import SideBar from "../components/SideBar";
import playlist from "../assets/icons/playlist.svg";
import home from "../assets/icons/Home.svg";
import golden from "../assets/images/golden-age.svg";
import reggae from "../assets/images/reggae.svg";
import tmr from "../assets/images/tmr.svg";
import like from "../assets/icons/like.svg";
import life from "../assets/images/life.svg";
import mountain from "../assets/images/mountain.svg";
import limits from "../assets/images/limits.svg";
import everything from "../assets/images/everything.svg";
import cancelled from "../assets/images/cancelled.svg";
import nomad from "../assets/images/nomad.svg";
import blind from "../assets/images/blind.svg";

const TopCharts = (props) => {
  return (
    <Flex className=" bg-dark rounded" style={{ padding: "15px" }} spacing={10}>
      <div className="" style={{ flexBasis: "15%" }}>
        <img src={props.image} />
      </div>
      <Flex className=" flex-grow" stack={true} spacing={6}>
        <p className="white medium">{props.title}</p>
        <p className="gray small">{props.creator}</p>
        <p className="white small-alt">{props.time}</p>
      </Flex>
      <Flex className="" style={{ flexBasis: "15%" }} ai="center" jc="center">
        <img src={like} />
      </Flex>
    </Flex>
  );
};

const Content = () => {
  return (
    <div style={{ padding: "110px 60px 24px 0px", width: "100%" }} className="">
      <Grid
        span={12}
        style={
          {
            //   height: "45vh",
          }
        }
      >
        <GridItem
          span={7}
          md={12}
          className=" bg-blue"
          style={{
            borderRadius: "40px",
            height: "45vh",
          }}
        >
          <h1 className="white">{"R & B Hits"}</h1>
        </GridItem>
        <GridItem span={5} md={12} className="">
          <Flex stack={true} spacing={12}>
            <p className="white topic">Top Charts</p>
            <TopCharts
              image={golden}
              title={"Golden age of 80s"}
              creator={"Sean swadder"}
              time={"2:34:45"}
            />
            <TopCharts
              image={reggae}
              title={"Reggae “n” blues"}
              creator={"Dj YK mule"}
              time={"1:02:42"}
            />
            <TopCharts
              image={tmr}
              title={"Tomorrow’s tunes"}
              creator={"Obi Datti"}
              time={"2:01:25"}
            />
          </Flex>
        </GridItem>
      </Grid>
    </div>
  );
};

const Album = (props) => {
  return (
    <Flex stack={true}>
      <div>
        <img src={props.image} style={{ borderRadius: "25px" }} />
      </div>
      <p className="white small">{props.title}</p>
      <p className="gray smallest-alt">{props.artiste}</p>
    </Flex>
  );
};

const NewReleases = (props) => {
  return (
    <Flex
      className=""
      style={{
        paddingTop: "20px",
        paddingLeft: "101px",
        paddingRight: "60px",
      }}
      stack={true}
      spacing={12}
    >
      <p className="topic">{props.heading}</p>
      <Flex spacing={30} style={{ overflowX: "scroll" }}>
        <Album image={life} title={"Life in a bubble"} artiste={"The van"} />
        <Album image={mountain} title={"Mountain"} artiste={"Krisx"} />
        <Album image={limits} title={"Limits"} artiste={"John Dillion"} />
        <Album
          image={everything}
          title={"Everything's Black"}
          artiste={"Ameed"}
        />
        <Album image={cancelled} title={"Cancelled"} artiste={"Enimen"} />
        <Album image={nomad} title={"Nomad"} artiste={"Makrol eli"} />
        <Album image={blind} title={"Blind"} artiste={"Wiz zee"} />
        <Album image={life} title={"Life in a bubble"} artiste={"The van"} />
      </Flex>
    </Flex>
  );
};

const Homepage = () => {
  return (
    <Flex stack={true}>
      <Flex className="">
        <SideBar playlist={playlist} home={home} />
        <Content />
      </Flex>
      <NewReleases heading={"New Releases."} />
      <NewReleases heading={"Popular in your area."} />
      <div style={{ height: "15vh" }}></div>
    </Flex>
  );
};

export default Homepage;
