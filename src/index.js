import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { PlaylistVideoProvider } from "./Contexts/playlist.context";
import { LikedVideoProvider } from "./Contexts/likevideo.context";
import { WatchVideoProvider } from "./Contexts/watchLater.context";
import { AuthProvider } from "./Contexts/authContext/auth-context";
import { UserDataProvider } from "./Contexts/userDataContext/userData-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <UserDataProvider>
          <PlaylistVideoProvider>
            <LikedVideoProvider>
              <WatchVideoProvider>
                <App />
              </WatchVideoProvider>
            </LikedVideoProvider>
          </PlaylistVideoProvider>
        </UserDataProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
