import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import LikedItem from "../../Components/LikedItem/LikedItem";
import { useLikedVideo } from "../../Contexts/likevideo.context";
import { usePlaylist } from "../../Contexts/playlist.context";
import { useWatchVideo } from "../../Contexts/watchLater.context";
import "../../css/video.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { videos } from "../../backend/db/videos";

const VideoDescription = ({ videoItem }) => {
  const [isSubscribed, setIsubscribed] = useState(false);
  const { likedVideoState, likedVideoDispatch } = useLikedVideo();

  const { watchVideoDispatch } = useWatchVideo();

  const { playlistVideoDispatch } = usePlaylist();
  const { videoId } = useParams();
  console.log(videoItem.channel_img);

  // const likeToast = () => {
  //   toast.warn("Liked Video");
  // }

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
              <i className="fa fa-heart"></i>
            </button>
            <button
              onClick={() =>
                watchVideoDispatch({
                  type: "MOVE-TO-WATCHLATER",
                  payload: videoItem,
                })
              }
              className="buttons icons"
              title="Add to watchlater"
            >
              <i className="fa fa-clock-o"></i>
            </button>
            <button
              onClick={() =>
                playlistVideoDispatch({
                  type: "MOVE-TO-PLAYLIST",
                  payload: videoItem,
                })
              }
              className="buttons icons"
              title="Add to playlist"
            >
              <i className="fas fa-sliders-h"></i>
            </button>
          </div>
          <div className="description-content">
            <p> {videoItem.title} </p>
            <p className="views-text"> {videoItem.views} </p> <hr />
            <div className="img-name-div">
              <div className="channel-img-name">
                {/* <img src={videoItem.channel_img} alt="logo" /> */}
                <p> {videoItem.creator} </p>
              </div>
              <div>
                <button
                  onClick={() => setIsubscribed((subscribe) => !subscribe)}
                  className="buttons icons sub-btn"
                >
                  {isSubscribed ? "Unsubscribe" : "Subscribe"}
                </button>
              </div>
            </div>
            <hr />
            <p> {videoItem.description} </p>
          </div>
        </div>
      }
      <ToastContainer />
    </div>
  );
};

export default VideoDescription;
