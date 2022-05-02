import React from "react";
import { Link } from "react-router-dom";
import "../Login/login.css";

const Login = () => {
  return (
    <>
      <div className="m-top"></div>
      <div className="form-container">
        <form className="">
          <div className="user-input">
            <label htmlFor="email">
              Email Address <span>*</span>
            </label>
            <br />
            <input
              type="email"
              id="email"
              required
              autoComplete="off"
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div className="user-input">
            <label htmlFor="password">
              Password <span>*</span>
            </label>
            <br />
            <input
              type="password"
              id="password"
              required
              autoComplete="off"
              placeholder="********"
            />
            <br /> <br />
          </div>
          <button className="btn-bar btn"> Login </button> <br />
          <br />
          <hr />
          <div className="form-bottom-bar">
            <Link className="create-acc-link" to="/signup">
              Create New Account <i class="fa fa-chevron-circle-right"></i>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
