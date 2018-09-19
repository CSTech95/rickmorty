import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { Div } from "./Home.style";
import Slides from "../Slides/Slides";
import CharnJoin from "./CharnJoin";

const Home = () => {
  return (
    <Div>
      <div className="container">
        {/* <h1>Home</h1> */}
        <Slides width="100%" />
        <p>
          Welcome to Rick & Morty's Auditions. Feel free to browse around and
          see if you'd like to become a rick & Morty character as well. Feel
          free to search through the Rick & Morty database identified as
          Character in the header. When you feel ready to join, feel free to do
          so by simply clicking join. Thanks and enjoy.
        </p>
        <CharnJoin />
      </div>
    </Div>
  );
};

export default Home;
