import React from "react";
import Flex from "../components/layout/Flex";
import Grid, { GridItem } from "../components/layout/Grid";
import "../styles/homepage.css";
import home from "../assets/icons/Home.svg";
import playlist from "../assets/icons/playlist.svg";
import radio from "../assets/icons/radio.svg";
import vid from "../assets/icons/vid.svg";
import user from "../assets/icons/user.svg";
import logout from "../assets/icons/logout.svg";
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

const SideBar = () => {
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
        <img src={home} alt="home" />
        <img src={playlist} alt="playlist" />
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

const TopCharts = (props) => {
  return (
    <Flex className=" bg-dark rounded" style={{ padding: "15px" }} spacing={10}>
      <div className="" style={{ flexBasis: "15%" }}>
        <img src={props.image} />
      </div>
      <Flex className=" flex-grow" stack={true}>
        <p className="white">{props.title}</p>
        <p className="gray">{props.creator}</p>
        <p className="white">{props.time}</p>
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
      <Grid span={12}>
        <GridItem
          span={7}
          className=" bg-blue"
          style={{
            borderRadius: "40px",
            height: "45vh",
          }}
        ></GridItem>
        <GridItem span={5} className="">
          <Flex stack={true} spacing={12}>
            <p className="white">Top Charts</p>
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
      <p className="white">{props.title}</p>
      <p className="gray">{props.artiste}</p>
    </Flex>
  );
};

const NewReleases = (props) => {
  return (
    <Flex
      className=""
      style={{ paddingLeft: "101px", paddingTop: "20px", paddingRight: "60px" }}
      stack={true}
      spacing={12}
    >
      <p className="white">{props.heading}</p>
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
        <SideBar />
        <Content />
      </Flex>
      <NewReleases heading={"New Releases."} />
      <NewReleases heading={"Popular in your area."} />
      <div style={{ height: "15vh" }}></div>
    </Flex>
  );
};

export default Homepage;
