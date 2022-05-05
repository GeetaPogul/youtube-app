import React from "react";

import { createContext, useContext, useReducer } from "react";

const WatchVideoContext = createContext();

const watchLaterReducer = (state,action) => {
  switch (action.type) {
    case "MOVE-TO-WATCHLATER":
      return [...state, action.payload];

    case "REMOVE-FROM-WATCHLATER":
      return state.filter((watchItem) => watchItem.id !== action.payload.id);

    default:
      return state;
  }
};

const WatchVideoProvider = ({ children }) => {
  const [watchVideoState, watchVideoDispatch] = useReducer(
    watchLaterReducer,
    []
  );

  return (
    <WatchVideoContext.Provider
      value={{
        watchVideoState,
        watchVideoDispatch,
      }}
    >
      {children}
    </WatchVideoContext.Provider>
  );
};

const useWatchVideo = () => useContext(WatchVideoContext);

export { useWatchVideo, WatchVideoProvider };
