import { act } from "@testing-library/react";
import { userInitialData } from "./userInitialData";

export const dataReducerFunc = (dataState, action) => {
  switch (action.type) {
    case "WATCHLATER":
      return {
        ...dataState,
        watchLater: action.payload,
      };

    case "HISTORY":
      return {
        ...dataState,
        history: action.payload,
      };

    case "LIKES":
      return {
        ...dataState,
        likes: action.payload,
      };

    case "CLEAR-ALL":
      return userInitialData;

    default:
      return dataState;
  }
};
