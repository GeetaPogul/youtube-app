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
import "./navbar.css";
import "../../css/nav.css";
import { PrivateAuth } from "../../utils/PrivateAuth";
import { RequireAuth } from "../../utils/RequireAuth";
import { useAuthFunctions } from "../../Contexts/authContext/useAuthFunctions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Mockman from "mockman-js";
const Navbar = () => {
  const token = localStorage.getItem("userToken");
  const { logout } = useAuthFunctions();

  const logoutHandler = () => {
    toast.success(" adarsh balika Logout successful ", {
      position: "bottom-left",
    });
  };
  return (
    <>
      <nav className="home-navbar">
        <Link className="links logo" to="/">
          <span className="logo_text">TypeCode</span>
        </Link>

        {!token ? (
          <span>
            <Link to="/login" className="links login-text padding-right-1">
              <button className="btn btn_primary"> Login </button>
            </Link>{" "}
          </span>
        ) : (
          <>
            <button
              onClick={logoutHandler && logout}
              className="btn btn_primary login-text"
            >
              Logout{" "}
            </button>
          </>
        )}
      </nav>
      <div className="hr-line"></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/like"
          element={
            <RequireAuth>
              {" "}
              <Like />
            </RequireAuth>
          }
        />
        <Route
          path="/history"
          element={
            <RequireAuth>
              {" "}
              <History />{" "}
            </RequireAuth>
          }
        />
        <Route
          path="/watchlater"
          element={
            <RequireAuth>
              {" "}
              <WatchLater />
            </RequireAuth>
          }
        />
        <Route
          path="/playlistpage"
          element={
            <RequireAuth>
              {" "}
              <PlaylistPage />
            </RequireAuth>
          }
        />
        <Route path="/explore" element={<Explore />} />
        <Route
          path="/login"
          element={
            <PrivateAuth>
              {" "}
              <Login />{" "}
            </PrivateAuth>
          }
        />
        <Route
          path="/signup"
          element={
            <PrivateAuth>
              {" "}
              <SignUp />
            </PrivateAuth>
          }
        />

        <Route
          path="/video/:videoId"
          element={
            <RequireAuth>
              {" "}
              <VideoDetail />
            </RequireAuth>
          }
        />

        <Route path="/mock" element={<Mockman />} />
      </Routes>

      <ToastContainer />
    </>
  );
};

export default Navbar;
