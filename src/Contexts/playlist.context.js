import React from "react";

import { createContext, useContext, useReducer } from "react";

const PlaylistVideoContext = createContext();

const playlistReducer = (state, action) => {
  switch (action.type) {
    case "MOVE-TO-PLAYLIST":
      return [...state, action.payload];

    case "REMOVE-FROM-PLAYLIST":
      return state.filter(
        (historyItem) => historyItem.id !== action.payload.id
      );
    default:
      return state;
  }
};

const PlaylistVideoProvider = ({ children }) => {
  const [playlistVideoState, playlistVideoDispatch] = useReducer(
    playlistReducer,
    []
  );
  return (
    <PlaylistVideoContext.Provider
      value={{
        playlistVideoState,
        playlistVideoDispatch,
      }}
    >
      {children}
    </PlaylistVideoContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistVideoContext);

export { usePlaylist, PlaylistVideoProvider };
