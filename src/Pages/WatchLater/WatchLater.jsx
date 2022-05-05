import React from "react";
import SubLinks from "../SubLinks";
import { Link } from "react-router-dom";
import WatchItem from "../../Components/WatchItem/WatchItem";

const WatchLater = () => {
  return (
    <>
      <div className="wrapper">
        <div className="slider">
          <SubLinks />
        </div>
        <div className="right-slider">
          <div className="video_container">
            <WatchItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchLater;
