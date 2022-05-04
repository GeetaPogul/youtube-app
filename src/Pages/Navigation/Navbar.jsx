import React from "react";
import Home from "../Home/Home";
import Explore from "../Explore/Explore";
import { Link, Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Like from "../Like/Like";
import History from "../History/History";
import WatchLater from "../WatchLater/WatchLater";
import PlaylistPage from "../Play/PlaylistPage";
import VideoDetail from "../VideoDetail/VideoDetail";

import "../../css/nav.css";

const Navbar = () => {
  return (
    <>
      <nav className="home-navbar">
        <Link className="links logo" to="/">
          <span className="logo_text">TypeCode</span>
        </Link>

        <Link className="links login-text padding-right-1" to="/login">
          <button className="btn btn_primary">Login </button>
        </Link>
      </nav>
      <div className="hr-line"></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/like" element={<Like />} />
        <Route path="/history" element={<History />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/playlistpage" element={<PlaylistPage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/video/:videoId" element={<VideoDetail />} />
      </Routes>
    </>
  );
};

export default Navbar;
