import { createContext, useContext, useReducer } from "react";

import { userInitialData } from "./userInitialData";
import { dataReducerFunc } from "./dataReducerFunctions";

const UserDataContext = createContext();

const UserDataProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(
    dataReducerFunc,
    userInitialData
  );
  return (
    <UserDataContext.Provider
      value={{
        dataState,
        dataDispatch,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

const useUserData = () => useContext(UserDataContext);

export { UserDataProvider, useUserData };
