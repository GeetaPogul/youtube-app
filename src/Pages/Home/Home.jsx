import React from "react";
import "../Home/home.css";
import { Link } from "react-router-dom";
import { videos } from "../../backend/db/videos";
const Home = () => {
  return (
    <>
      {/* <h1 style={{textAlign:"center"}}> Home page</h1> */}

     <div className="img-container"> 
         <img className="background_img"src="./Assets/nature2.jpg" alt="nature" /> 

         <div className="text-on-img"> 

           <h1 className="centered-text">Welcome to <span>SKY</span>tube </h1>
           <Link to="/explore"> <button className="explore_btn btn"> Go to explore</button></Link>
         </div>
       
     </div>

     <div className="m-top-4"> </div>
       
        <h1> Trending Videos</h1>

       

      {/* <iframe
        width="350"
        height="315"
        src="https://www.youtube.com/embed/Tc8kb5HBNrA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}


<div className="video_container trending_videos">


{videos.map(({ video_id, video_img, name, title, creator }) => (
  <li className="singleVideo single_trending_video" >
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
    </>
  );
};

export default Home;
