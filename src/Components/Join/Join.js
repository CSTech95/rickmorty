import React, { Component } from "react";
import { Div } from "./Join.style";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Join = () => {
  return (
    <Div>
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <h1>Join</h1>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Div>
  );
};

export default Join;
