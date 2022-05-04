import React from "react";
import SubLinks from "../SubLinks";
import { Link } from "react-router-dom";

const WatchLater = () => {
  return (
    <>
      <div className="wrapper">
        <div className="slider">
          <SubLinks />
        </div>
        <div className="right-slider">
          <div className="m-btm"> </div>
          <div className="m-lft">
            no watchlater video yet
            <Link to="/explore">Watch more videos</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchLater;
