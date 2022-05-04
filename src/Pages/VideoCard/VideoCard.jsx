import React from "react";
import { videos } from "../../backend/db/videos";
import { Link } from "react-router-dom";
import "../../css/video.css";

const VideoCard = () => {
  return (
    <>
      <div className="video_container">
        {videos.map(
          ({ video_id, video_img, channel_img, title, creator, views }) => (
            <li className="singleVideo" key={video_id}>
              <Link className="links" to={`/video/${video_id}`}>
                <img className="video_img" src={video_img} alt="html" />

                <div className="description-text">
                  <div className="img_title">
                    <img
                      className="channel_badge"
                      src={channel_img}
                      alt="channel badge"
                    />
                    <p className="title"> {creator}</p>
                  </div>
                  <br />
                  <h3 className="title-content"> {title} </h3>
                  <h3 className="view-content"> {views}</h3> <br />
                </div>
              </Link>
            </li>
          )
        )}
      </div>
    </>
  );
};

export default VideoCard;
