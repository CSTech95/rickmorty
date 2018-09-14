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
        <form>
          <div className="form-wrap">
            <div className="email">
              <label>Email Address: </label>
              <input type="text" />
            </div>
            <div className="user">
              <label>User Name</label>
              <input type="text" />
            </div>
            <div className="password">
              <label>Password</label>
              <input type="text" />
            </div>
            <input type="submit" />
          </div>
        </form>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Div>
  );
};

export default Join;
