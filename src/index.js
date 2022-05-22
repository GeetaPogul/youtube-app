import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {PlaylistVideoProvider} from "./Contexts/playlist.context";
import {LikedVideoProvider} from "./Contexts/likevideo.context";
import { WatchVideoProvider } from "./Contexts/watchLater.context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
     <PlaylistVideoProvider>
      <LikedVideoProvider>
      <WatchVideoProvider>
        <App />
        </WatchVideoProvider>
      </LikedVideoProvider>
      </PlaylistVideoProvider>
      
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
