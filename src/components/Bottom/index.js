import React, { Component } from "react";

import "./bottom.css";

class Bottom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="bottom">
        <div>Copyright ©2018 zhou 版权所有</div>
      </div>
    );
  }
}

export default Bottom;
