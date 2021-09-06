import React from "react";

import "./Content.css";
import SideBar from "../sidebar/SideBar";
import Post from '../posts/Posts.js';

export default function Content() {
  return (
    <div className="content">
      <div className="bars-wrapper">
        <div className="bars-wrapper-inside">
          <Post />
          <SideBar />
        </div>
      </div>
    </div>
  );
}
