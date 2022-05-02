import React from "react";
import "../../css/subLink.css";
import SubLinks from "../SubLinks";
import { Link } from "react-router-dom";

const Like = () => {
  return (
    <>
      <div className="wrapper">
        <div className="slider">
          <SubLinks />
        </div>
        <div className="right-slider">
          <div className="m-btm"> </div>
          <div className="m-lft"> 
          no liked video yet
          <Link to="/explore">Watch more videos</Link>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Like;
