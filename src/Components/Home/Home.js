import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { Div } from "./Home.style";

const Home = () => {
  return (
    <Div>
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <h1>Home</h1>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Div>
  );
};

export default Home;
