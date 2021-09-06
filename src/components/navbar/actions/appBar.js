import React from "react";

import "./appBar.css";
import PersonIcon from "@material-ui/icons/Person";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Button from './Button.js';

export default function Appbar() {
  return (
    <div className="actions">
      <Button secondary label="LOG IN" />
      <Button label="SIGN UP" />
      <div className="profile">
        <PersonIcon className="hoverable" />
        <ArrowDropDownIcon className="hoverable" />
      </div>
    </div>
  );
}

