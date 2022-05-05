import React from "react";
import { useParams } from "react-router-dom";
import LikedItem from "../../Components/LikedItem/LikedItem";
import { useLikedVideo } from "../../Contexts/likevideo.context";
import { useWatchVideo } from "../../Contexts/watchLater.context";
import "../../css/video.css";

const VideoDescription = ({ videoItem }) => {
  const { likedVideoDispatch } = useLikedVideo();

  const { watchVideoDispatch } = useWatchVideo();
  const { videoId } = useParams();
  console.log(videoItem.channel_img);
  return (
    <div>
      <h3></h3>
      {
        <div className="text-container">
          <div className="btn_bar">
            <button
              onClick={() =>
                likedVideoDispatch({
                  type: "MOVE-TO-LIKE",
                  payload: videoItem,
                })
              }
              className="buttons icons"
              title="Add to like"
            >
              <i class="fa fa-heart"></i>
            </button>
            <button
            onClick={() =>
              watchVideoDispatch({
                type: "MOVE-TO-WATCHLATER",
                payload: videoItem,
              })
            }
            className="buttons icons" title="Add to watchlater">
              <i class="fa fa-clock-o"></i>
            </button>
            <button className="buttons icons" title="Add to playlist">
              <i class="fas fa-sliders-h"></i>
            </button>
          </div>
          <div className="description-content">
            <p> {videoItem.title} </p>
            <p className="views-text"> {videoItem.views} </p> <hr />
            <div className="img-name-div">
              <div className="channel-img-name">
                <img src={videoItem.channel_img} alt="logo" />
                <p> {videoItem.creator} </p>
              </div>
              <div>
                <button className="buttons icons sub-btn "> Subscribe</button>
              </div>
            </div>
            <hr />
            <p> {videoItem.description} </p>
          </div>
        </div>
      }
  {/* onClick={() =>
          likedVideoDispatch({
            type: "MOVE-TO-LIKE",
            payload: videoItem,
          })
        } */}
      <button
        
        className="buttons icons"
        title="Add to like"
      >
        {/* <i class="fa fa-heart"></i> */} W
      </button>

      {/* {likedVideoState.find((LikedItem) => LikedItem.id === videoId) ? (
        <button
          onClick={() =>
            likedVideoDispatch({
              type: "REMOVE-FROM-LIKE",
              payloaod: videoItem,
            })
          }
        >
          Unlike
        </button>
      ) : (
        <button
          onClick={() =>
            likedVideoDispatch({
              type: "MOVE-TO-LIKE",
              payload: videoItem,
            })
          }
        >
          Like
        </button>
      )} */}
    </div>
  );
};

export default VideoDescription;
