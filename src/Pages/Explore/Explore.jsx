import React from "react";
import SubLinks from "../SubLinks";
import "../Explore/explore.css";
// import { Link } from "react-router-dom";
// import { videos } from "../../backend/db/videos";
import VideoCard from "../VideoCard/VideoCard";

const Explore = () => {
  return (
    <>
      <div className="wrapper">
        <div className="slider">
          <SubLinks />
        </div>
        <div className="right-slider ">
          <br />
          <div className="video_container">
            <h1> </h1>
            <VideoCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;

{
  /* <Link to={`/video/${video_id}`}> */
}

{
  /* </Link> */
}

{
  /* <Link to={`/video/${video_id}`}>view video </Link> */
}

{
  /* <a href="/video/Wo5dMEP_BbI">
<img className="video_img" src={video_img} alt="nature" />
</a> */
}
