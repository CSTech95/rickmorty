import React, { Component } from "react";
import { Div } from "./Join.style";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Join = () => {
  return (
    <Div>
      <div className="container">
        <form>
          <div className="form-wrap">
            <div className="email">
              <label>Email Address </label>
              <div>
                <input type="email" />
              </div>
            </div>
            <div className="user">
              <label>User Name </label>
              <div>
                <input type="text" />
              </div>
            </div>
            <div className="password">
              <label>Password </label>
              <div>
                <input type="password" />
              </div>
            </div>
            <input type="submit" />
          </div>
        </form>
      </div>
    </Div>
  );
};

export default Join;
