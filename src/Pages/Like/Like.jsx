import React from "react";
import "../../css/subLink.css";
import SubLinks from "../SubLinks";
// import { Link } from "react-router-dom";
import LikedItem from "../../Components/LikedItem/LikedItem";

const Like = () => {
  return (
    <>
      <div className="wrapper">
        <div className="slider">
          <SubLinks />
        </div>
        <div className="right-slider">
          <div className="video_container">
            <LikedItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default Like;
