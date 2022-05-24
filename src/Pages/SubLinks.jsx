import React from "react";
import { NavLink } from "react-router-dom";
import "../css/subLink.css";
const SubLinks = () => {
  const getActiveColor = ({ isActive }) => ({
    backgroundColor: isActive ? "#dd137b" : "",
  });

  return (
    <>
      <div className="wrapper">
        <div className="slider">
          <div className="m-btm"> </div>

          <aside>
            <NavLink
              style={getActiveColor}
              className="nav-link links side-links"
              to="/"
            >
              <div>
                <i className="fa fa-home" aria-hidden="true"></i>
              </div>
              Home
            </NavLink>

            <div className="m-btm"> </div>

            <NavLink
              style={getActiveColor}
              className="nav-link links side-links"
              to="/like"
            >
              <div>
                <i className="fa fa-heart"></i>
              </div>
              Liked videos
            </NavLink>

            <div className="m-btm"> </div>

            <NavLink
              style={getActiveColor}
              className="nav-link links side-links"
              to="/history"
            >
              <div>
                <i className="fa fa-history"></i>
              </div>
              History
            </NavLink>

            <div className="m-btm"> </div>

            <NavLink
              style={getActiveColor}
              className="nav-link links side-links"
              to="/watchlater"
            >
              <div>
                <i className="fa fa-clock-o"></i>
              </div>
              Watch Later
            </NavLink>

            <div className="m-btm"> </div>

            <NavLink
              style={getActiveColor}
              className="nav-link links side-links"
              to="/playlistpage"
            >
              <div>
                <i className="fas fa-sliders-h"></i>
              </div>
              Playlist
            </NavLink>
          </aside>

          <div className="m-btm"> </div>
        </div>

        <div className="right-slider"></div>
      </div>
    </>
  );
};
export default SubLinks;
