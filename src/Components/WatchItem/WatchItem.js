import React from "react";
import { Link } from "react-router-dom";
import { useWatchVideo } from "../../Contexts/watchLater.context";
import "../../css/video.css";
const WatchItem = () => {
  const { watchVideoState, watchVideoDispatch } = useWatchVideo();
  return (
    <>
      <div>
        <div>
            <h1> Watch Later Video's :{watchVideoState.length} </h1></div>

        <div className="video_container">
          {watchVideoState.map((watchVideo) => (
            <div className="video_container">
              <li className="singleVideo">
                <Link className="links" to={`/video/${watchVideo.video_id}`}>
                  <img className="video_img" src={watchVideo.video_img} alt="video-img" />
                </Link>

                <div className="description-text">
                  <div className="img_title div-bar">
                    <img 
                    className="channel_badge"

                    src={watchVideo.channel_img} alt="logo"
                     />

                    <p className="title"> {watchVideo.creator}</p>

                    <button
                      onClick={() =>
                        watchVideoDispatch({
                          type: "REMOVE-FROM-WATCHLATER",
                          payload: watchVideo,
                        })
                      }
                      className="buttons icons watch-icon"
                      title="Remove from watchlater"
                    >
                      <i class='fas fa-trash-alt'></i>
                    </button>
                  </div>

                  <h3> {watchVideo.title} </h3>
                  <h3>{watchVideo.views} </h3>
                </div>
              </li>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WatchItem;
