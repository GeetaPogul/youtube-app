import React,{useState} from "react-router-dom";
import SubLinks from "../SubLinks";
import { Link } from "react-router-dom";
import { PlaylistModal } from "../../Components/PlaylistModal/PlaylistModal";

const History = () => {


  
  
  return (
    <>
      <div className="wrapper">
        <div className="slider">
          <SubLinks />
        </div>
        <div className="right-slider ">
          <div className="m-btm"> </div>
          <div className="m-lft">
            no history video yet
            <Link to="/explore">Watch more videos</Link>

       <button> Playlist </button>
          <PlaylistModal /> 


          </div>
        </div>
      </div>
    </>
  );
};
export default History;
