import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./header.css";
import icon from "../../static/imgs/favicon.ico";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <ul className="lists">
          <Link to={`/`}>
            <li>
              <img className="icon" src={icon} alt="" />
            </li>
          </Link>
          <Link to={`/`}>
            <li>首页</li>
          </Link>
          <Link to={`/project`}>
            <li>项目</li>
          </Link>
          <Link to={`/github`}>
            <li>GITHUB</li>
          </Link>
          <Link to={`/about`}>
            <li>关于</li>
          </Link>
        </ul>
        <div className="share">
          <i className="icon iconfont icon-iconsmallsearch" />
          <i className="icon iconfont icon-share" />
        </div>
      </div>
    );
  }
}

export default Header;
