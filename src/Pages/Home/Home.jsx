import React from "react";
import "../Home/home.css";
import "../../css/video.css";
import { Link } from "react-router-dom";
import { videos } from "../../backend/db/videos";

const Home = () => {
  const trendingVideos = [...videos].splice(7, 4);
  return (
    <>
      <div className="img-container">
        <img
          className="background_img"
          src="./Assets/homeImg2.avif"
          alt="nature"
        />

        <div className="text-on-img">
          <h1 className="centered-text">Welcome to TypeCode ! </h1>

          <Link to="/explore">
            <button className="explore_btn  btn"> Go to explore</button>
          </Link>
          <div className="welcome_text"></div>
        </div>
      </div>

      <div className="m-top-4"> </div>

      <h1 className="trending-text"> Trending Videos </h1>
      <div className="m-top-4"> </div>
      <div className="video_container trending_videos">
        {trendingVideos.map(
          ({ video_id, video_img, channel_img, title, creator, views }) => {
            return (
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
                  </div>{" "}
                  <br />
                  <h3 className="title-content"> {title} </h3>
                  <h3 className="view-content"> {views}</h3>
                </div>

                {/* <VideoCard /> */}
              </Link>
            );
          }
        )}
      </div>
    </>
  );
};

export default Home;
