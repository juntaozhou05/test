import React, { Component } from "react";

import Header from "../Header";
import Blogs from "../Blogs";
import Right from "../Right";

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
      </div>
    );
  }
}

export default Home;
