import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/authContext/auth-context";
import { useAuthFunctions } from "../../Contexts/authContext/useAuthFunctions";

const SignUp = () => {
  const [errorMsg, setErrorMsg] = useState(false);

  const { authState, authDispatch } = useAuth();

  const { signup } = useAuthFunctions();

  const signupHandler = (event) => {
    event.preventDefault();
    signup;
  };
  return (
    <>
      <div className="m-top-2"></div>
      <div className="form-container">
        <form className="" onSubmit={signupHandler}>
          <div className="user-input">
            <label htmlFor="text">
              First Name <span>*</span>
            </label>
            <br />
            <input
              type="text"
              id="text"
              name="name"
              minLength="5"
              required
              value={authState.name}
              autoComplete="off"
              placeholder=" John"
              onChange={(event) =>
                authDispatch({ type: "NAME", payload: event.target.value })
              }
            />
          </div>

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
              placeholder=" johndoe@gmail.com"
              value={authState.email}
              onChange={(event) =>
                authDispatch({ type: "EMAIL", payload: event.target.value })
              }
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
              name="password"
              minLength="8"
              value={authState.password}
              required
              autoComplete="off"
              placeholder=" ********"
              onChange={(event) => ({
                type: "PASSWORD",
                payload: event.target.value,
              })}
            />
            <br />
          </div>
          <div className="user-input">
            <label htmlFor="confirmpassword">
              Confirm Password <span>*</span>
            </label>
            <br />
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              required
              autoComplete="off"
              placeholder=" ********"
              onFocus={() => setErrorMsg(false)}
            />
            {errorMsg && (
              <p> Confirm Password doesn't match with the password.</p>
            )}
            <br /> <br />
          </div>
          <button className="btn-bar btn">SignUp</button>
          <br />
          <br />
          <hr />
          <div className="form-bottom-bar">
            <Link className="create-acc-link" to="/login">
              Already have Account <i class="fa fa-chevron-circle-right"></i>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
