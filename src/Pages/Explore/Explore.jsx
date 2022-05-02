import React from "react";
import SubLinks from "../SubLinks";
import "../Explore/explore.css";
import { Link } from "react-router-dom";
import { videos } from "../../backend/db/videos";

const Explore = () => {
  return (
    <>
      <div className="wrapper">
        <div className="slider">
          <SubLinks />
        </div>
        <div className="right-slider ">
          <div>Explore page </div> <br />
          <Link to="/">
            {/* <img className="image" src="./nature1.jpg" alt="nature" /> */}
          </Link>
          
          <div className="video_container">


            {videos.map(({ video_id, video_img, name, title, creator }) => (
              <li className="singleVideo" >
                <div>
                  <Link to={`/video/${video_id}`}>
                    <img className="video_img" src={video_img} alt="nature" />
                  </Link>
                </div>
                <div className="video_content">
                  {name} {creator}
                </div>

                <div className="video_content"> {title} </div>

                {/* <Link to={`/video/${video_id}`}>view video </Link> */}
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
