import React from "react";
import "./Logo.css";

import reddit from '../../../assets/images/reddit.jpg'

export default function Logo() {
  return (
    <div className="logo hoverable">
      <img src={reddit} alt="" />
      <span>reddit</span>
    </div>
  );
}