import React, { Component } from "react";

import "./blogs.css";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="blogs">
        <div className="items">
          <div className="title">题目</div>
          <div className="content">
            将height设置为line-height的整数倍，防止超出的文字露出由于ie6-7不显示content内容，所以要添加标签兼容ie6-7由于ie6-7不显示content内容，所以要添加标签兼容ie6-7由于ie6-7不显示content内容，所以要添加标签兼容ie6-7
          </div>
          <div className="time">2018.01</div>
        </div>
        <div className="items">
          <div className="title">题目</div>
          <div className="content">
            将height设置为line-height的整数倍，防止超出的文字露出由于ie6-7不显示content内容，所以要添加标签兼容ie6-7由于ie6-7不显示content内容，所以要添加标签兼容ie6-7由于ie6-7不显示content内容，所以要添加标签兼容ie6-7
          </div>
          <div className="time">2018.01</div>
        </div>
      </div>
    );
  }
}

export default Blog;
