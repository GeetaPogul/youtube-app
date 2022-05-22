import React from "react";
import { Link } from "react-router-dom";
import { usePlaylist } from "../../Contexts/playlist.context";

const PlaylistItem = () => {
  const { playlistVideoState, playlistVideoDispatch } = usePlaylist();

  return (
    <>
      <div>
        <div>
          <br />
          <h1> playlist Video's</h1>
        </div>

        <div className="video_container">
          {playlistVideoState.map((playItem) => (
            <div className="video_container">
              <li key={playItem.video_id} className="singleVideo">
                <Link className="links" to={`/video/${playItem.video_id}`}>
                  <img className="video_img" src={playItem.video_img} alt="video" />
                </Link>

                <div className="description-text">
                  <div className="img_title">
                    <img
                      className="channel_badge"
                      src={playItem.channel_img}
                      alt="logo"
                    />
                    <p className="title">{playItem.creator}</p>
                    <button
                      onClick={() =>
                        playlistVideoDispatch({
                          type: "REMOVE-FROM-PLAYLIST",
                          payload: playItem,
                        })
                      }
                      className="buttons icons watch-icon"
                      title="Remove from history"
                    >
                      <i className="fas fa-sliders-h"></i>
                    </button>
                  </div>

                  <h3 className="title-content">{playItem.title}</h3>

                  <h3 className="view-content"> {playItem.views} </h3>
                </div>
              </li>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlaylistItem;
