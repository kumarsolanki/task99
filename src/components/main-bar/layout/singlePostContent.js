import React from "react";

import "./Content.css";
import SideBar from "../../main-bar/sidebar/SideBar.js";
import SinglePost from '../posts/singlePost.js';

export default function SinglePostContent(props) {
    return (
        <div className="content">
            <div className="bars-wrapper">
                <div className="bars-wrapper-inside">
                    <SinglePost post123={props.post1} />
                    <SideBar />
                </div>
            </div>
        </div>
    );
}
