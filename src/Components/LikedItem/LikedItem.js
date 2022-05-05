import React from "react";
import { useLikedVideo } from "../../Contexts/likevideo.context";
import { Link } from "react-router-dom";
const LikedItem = () => {
  const { likedVideoState, likedVideoDispatch } = useLikedVideo();

  return (
    <>
      <div>
        <div>
          <br />
          <h1> Liked Video's : {likedVideoState.length} </h1> 
        </div>

        <div className="video_container">
          {likedVideoState.map((likedVideo) => (
            <div className="video_container">
              <li className="singleVideo">
                <Link className="links" to={`/video/${likedVideo.video_id}`}>
                  <img
                    className="video_img"
                    src={likedVideo.video_img}
                    alt="video"
                  />
               </Link>
                  <div className="description-text">
                    <div className="img_title div-bar ">
                      <img
                        className="channel_badge"
                        src={likedVideo.channel_img}
                        alt="logo"
                      />

                      <p className="title"> {likedVideo.creator} </p>

                      <button
                        onClick={() =>
                          likedVideoDispatch({
                            type: "REMOVE-FROM-LIKE",
                            payload: likedVideo,
                            
                          })
                        }
                        className="buttons icons like-icon"
                        title="Remove from Like"
                      >
                        <i class="fa fa-heart"></i>
                      </button>
                    </div>
                    <h3 className="title-content"> {likedVideo.title} </h3>
                    <h3 className="view-content"> {likedVideo.views}</h3>
                  </div>
               
              </li>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LikedItem;
