import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./auth-context";
import { useUserData } from "../userDataContext/userData-context";

import { getHistory } from "../userDataContext/history-serverCalls";
import { getLikes } from "../userDataContext/likes-serverCalls";
import { getWatchlater } from "../userDataContext/watchLater-serverCalls";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function useAuthFunctions() {
  const { authState, authDispatch } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
const {dataDispatch}  = useUserData();


  // for login requestt

  const login = async (setLoading) => {
    try {
      setLoading(true);
      const { data, status } = await axios.post("/api/auth/login", {
        email: authState.email,
        password: authState.password,
      });

      const { encodedToken } = data;
      if (status === 200) {
        toast.success("Login Success", { type: "success" });
        localStorage.setItem("userToken", encodedToken);
        authDispatch({
          type: "USER-DATA",
          payload: { encodedToken },
        });
        authDispatch({ type: "RESET-FORM" });
        getWatchlater(dataDispatch);
        getHistory(dataDispatch);
        getLikes(dataDispatch);
        navigate(location?.state?.from?.pathname || "/");
      } else if (status === 401) {
        authDispatch({ type: "ERROR", payload: "Invalid Credentials." });
        setTimeout(() => authDispatch({ type: "ERROR", payload: "" }), 4000);
        toast.warn("Invalid Credentials", {
          type: "error",
        });
      }
    } catch (error) {
      authDispatch({
        type: "ERROR",
        payload: "Email is not registered",
      });
      setTimeout(() => authDispatch({ type: "ERROR", payload: "" }), 4000);
      authDispatch({ type: "RESET-FORM" });
      toast.warn("Email is not registered", {
        type: "error",
      });
    }
    finally {
      setLoading(false);
    }
  };

  // logout request

  const logout = () => {
    localStorage.clear();
    authDispatch({ type: "RESET-DATA" });
    navigate("/");
    toast.success("Logout Success");
  };

  // signUp request

  const signup = async (setLoading) => {
    try {

      setLoading(true)
      const { data, status } = await axios.post("/api/auth/signup", {
        email: authState.email,
        password: authState.password,
        name: authState.name,
      });

      const { encodedToken } = data;

      if (status === 201) {
        localStorage.setItem("userToken", encodedToken);
        authDispatch({ type: "USER-DATA", payload: { encodedToken } });
        authDispatch({ type: "RESET-FORM" });
        navigate(location?.state?.from?.pathname || "/");
      } else {
        authDispatch({ type: "ERROR", payload: "Something went wrong" });

        setTimeout(() => authDispatch({ type: "ERROR", payload: "" }), 4000);
        toast.warn("Something went wrong", { type: "error" });
      }
    } catch (error) {
      authDispatch({
        type: "ERROR",
        payload: "Email already Exists",
      });

      setTimeout(() => authDispatch({ type: "ERROR", payload: "" }), 4000);
      authDispatch({ type: "RESET-FORM" });
      toast.warn("Email Already Exists", { type: "error" });
    }
  };

  return { login, logout, signup  };

    <ToastContainer /> 
  
}

export { useAuthFunctions };