import React, { Component } from "react";

import Header from "../Header";
import Blogs from "../Blogs";
import Right from "../Right";
import Bottom from "../Bottom";

import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <Header />
        <Blogs />
        <Right />
        <Bottom />
      </div>
    );
  }
}

export default Home;
