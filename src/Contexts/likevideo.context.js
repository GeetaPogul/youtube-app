import React from "react";

import { createContext, useContext, useReducer } from "react";

const LikedVideoContext = createContext();

const likeVideoReducer = (state, action) => {
  switch (action.type) {
    case "MOVE-TO-LIKE":
      return [...state, action.payload];

    case "REMOVE-FROM-LIKE":
      return state.filter((likedItem) => likedItem.id !== action.payload.id);
    default:
      return state;
  }
};

const LikedVideoProvider = ({ children }) => {
  const [likedVideoState, likedVideoDispatch] = useReducer(
    likeVideoReducer,
    []
  );
  return (
    <LikedVideoContext.Provider
      value={{
        likedVideoState,
        likedVideoDispatch,
      }}
    >
      {children}
    </LikedVideoContext.Provider>
  );
};

const useLikedVideo = () => useContext(LikedVideoContext);

export { useLikedVideo, LikedVideoProvider };
