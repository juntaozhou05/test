import React, { Component } from "react";

import "./blogs.css";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: []
    };
  }
  componentDidMount = () => {
    fetch("/data.json")
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          blog: data.data.blogs
        });
      })
      .catch(ex => {
        console.error("获取数据出错");
      });
  };
  render() {
    return (
      <div className="blogs">
        {this.state.blog.map((item, index) => {
          return (
            <div className="items" key={index}>
              <div className="title">{item.title}</div>
              <div className="content">{item.content}</div>
              <div className="time">{item.time}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Blog;
