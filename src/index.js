import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";

import {LikedVideoProvider} from "./Contexts/likevideo.context";
import { WatchVideoProvider } from "./Contexts/watchLater.context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
     
      <LikedVideoProvider>
      <WatchVideoProvider>
        <App />
        </WatchVideoProvider>
      </LikedVideoProvider>
      
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
