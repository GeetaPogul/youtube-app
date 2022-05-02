import React from "react";
import { useParams } from "react-router-dom";
import { videos } from "../../backend/db/videos";
import SubLinks from "../SubLinks";

export default function VideoDetail() {
  const { videoId } = useParams();

  return (
    <>
      <div className="wrapper">
        <div className="slider">
          <SubLinks />
        </div>
        <div className="right-slider">
          <h3> this page will show full video of each video </h3>
          <h3> video id : {videoId} </h3>
          {/* <iframe
            width="880"
            height="460"
            src="https://www.youtube.com/embed/KEOtzdJNb-c"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> */}

          <button onClick={() => console.log("button is clicked !")}>
            <i class="fas fa-sliders-h"></i>
          </button>
        
        </div>
      </div>
    </>
  );
}
