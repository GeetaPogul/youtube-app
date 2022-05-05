import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";

import {LikedVideoProvider} from "./Contexts/likevideo.context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LikedVideoProvider>
        <App />
      </LikedVideoProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
