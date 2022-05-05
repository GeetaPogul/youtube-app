import React from "react";
import { useParams, Link } from "react-router-dom";
import { videos } from "../../backend/db/videos";
import SubLinks from "../SubLinks";
import ReactPlayer from "react-player";
import "../Home/home.css";
import "../../css/video.css";
import VideoDescription from "./VideoDescription";

export default function VideoDetail() {
  const { videoId } = useParams();

  function getVideoDetails(video, videoId) {
    return video.find((videoItem) => videoItem.video_id === videoId);
  }

  const videoItem = getVideoDetails(videos, videoId);
  return (
    <>
      <div className="wrapper">
        <div className="slider">
          <SubLinks />
        </div>
        <div className="right-slider">
          <div className="m-top-4"> </div>
          <div className="full-video">
            <ReactPlayer
              playing
              controls
              width="1000px"
              height="580px"
              url={`https://www.youtube.com/watch?v=${videoId}`}
            />{" "}
            <br />
            <VideoDescription videoItem={videoItem} />
            <Link to="/explore"> go to explore</Link>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
