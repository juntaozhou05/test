import React, { Component } from "react";

import "./right.css";

class Right extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="right">
        <div className="label">
          <div className="title">标签</div>
          <div className="labels">
            <div className="items">html</div>
            <div className="items">css</div>
            <div className="items">js</div>
          </div>
        </div>
        <div className="label">
          <div className="title">标签</div>
          <div className="labels">
            <div className="items">html</div>
            <div className="items">css</div>
            <div className="items">js</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Right;
