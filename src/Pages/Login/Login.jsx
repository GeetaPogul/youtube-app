import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthFunctions } from "../../Contexts/authContext/useAuthFunctions";
import "../Login/login.css";
import { useAuth } from "../../Contexts/authContext/auth-context";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { authState, authDispatch } = useAuth();
  const { login } = useAuthFunctions();

  const loginHandler = (e) => {
    e.preventDefault();
    login(setLoading);
  };

  return (
    <>
      <div className="m-top"></div>
      <div className="form-container">
      <form onSubmit={loginHandler}>
          <div className="user-input">
            <label htmlFor="email">
              Email Address <span>*</span>
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="off"
              placeholder="johndoe@gmail.com"
              value={authState.email}
              onFocus={() => authDispatch({ type: "ERROR", payload: "" })}
              onChange={(event) =>
                authDispatch({ type: "EMAIL", payload: event.target.value })
              }
            />
          </div>
          <div className="user-input">
            <label htmlFor="password">
              Password <span>*</span>
            </label>
            <button
            className="btn eye-icon"
              onClick={(event) => {
                event.preventDefault();
                setShowPassword((val) => !val);
              }}
            >
              {showPassword ? (
                <i className="fas fa-eye eye-icon"></i>
              ) : (
                <i className="fas fa-eye-slash "> </i>
              )}
            </button>
            <br />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              required
              autoComplete="off"
              placeholder="********"
              minLength="8"
              value={authState.password}
              onChange={(event) =>
                authDispatch({ type: "PASSWORD", payload: event.target.value })
              }
            />
            <br /> <br />
          </div>
          <button className="btn-bar btn"> Login </button> <br />
          <button
            className="btn-bar btn"
            onClick={() => authDispatch({ type: "TEST-LOGIN" })}
          >
            Login as Guest
          </button>
          <br />
          <hr />
          <div className="form-bottom-bar">
            <Link className="create-acc-link" to="/signup">
              Create New Account <i className="fa fa-chevron-circle-right"></i>
            </Link>
          </div>
        </form>
        {loading}
      </div>
    </>
  );
};

export default Login;
