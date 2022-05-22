import React from "react";
import SubLinks from "../SubLinks";
import "../../css/subLink.css";
import { Link } from "react-router-dom";
import PlaylistItem from "../../Components/Playlist/PlaylistItem"
const PlaylistPage = () => {
  return (
    <>

<div className="wrapper">
        <div className="slider">
          <SubLinks />
        </div>
        <div className="right-slider ">
        {/* <div className="m-btm"> </div> */}
          {/* <div className="m-lft">  */}
          {/* no playlist yet */}
          <Link to="/explore">Watch more videos</Link>

          {/* </div> */}


          <div className="video_container">
            <PlaylistItem />
          </div>
        </div>
      </div>
     
    </>
  );
};

export default PlaylistPage;
