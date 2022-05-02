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
              to="/">
              <div>
                <i class="fa fa-home" aria-hidden="true"></i>
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
                <i class="fa fa-heart"></i>
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
                <i class="fa fa-history"></i>
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
                <i class="fa fa-clock-o"></i>
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
                <i class="fas fa-sliders-h"></i>
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
