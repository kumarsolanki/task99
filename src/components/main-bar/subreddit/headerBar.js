import React from "react";

import { Button } from "@material-ui/core";
import Whatshot from "@material-ui/icons/Whatshot";
import NewReleases from "@material-ui/icons/NewReleases";
import TrendingUp from "@material-ui/icons/TrendingUp";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import { connect } from "react-redux";
import {
  sortBySelection
} from '../../../redux/action/fetchAction';
import "./headerBar.css";


const HeaderBar = React.memo(
  ({ sortBySelection }) => {
    const sortOrder = (sortBy) => {
      sortBySelection(sortBy);
    }
    return (
      <div className="main-bar">
        <div className="filter-container">
          <div className="filter-element hoverable">
            <Button onClick=
              {() => sortOrder('hot')}
            >
              <Whatshot />
              <span>Hot</span>
            </Button>
          </div>
          <div className="filter-element-secondary hoverable">
            <Button onClick=
              {() => sortOrder('new')}
            >
              <NewReleases />
              <span>New</span>
            </Button>
          </div>
          <div className="filter-element-secondary hoverable">
            <Button onClick=
              {() => sortOrder('top')}
            >
              <TrendingUp />
              <span>Top</span>
            </Button>
          </div>
          <MoreHoriz className="filter-element-tertiary hoverable" />
          <div className="spacer"></div>
        </div>
      </div>
    );
  }
);


const mapDispatchToProps = (dispatch,) => {
  return {
    sortBySelection: (sortBy) => dispatch(sortBySelection(sortBy))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(HeaderBar);