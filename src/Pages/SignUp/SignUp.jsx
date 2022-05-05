import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [newPassword, setNewPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [disableButton, setDisableButton] = useState(true);

  const newPasswordHandler = (event) => {
    const password = event.target.value;
    checkPassword(password, confirmPassword);
    setNewPassword(password);
  };

  const confirmPasswordHandler = (event) => {
    const confirmPassword = event.target.value;
    checkPassword(confirmPassword, newPassword);
    setConfirmPassword(confirmPassword);
  };

  function checkPassword(password1, password2) {
    password1 === password2 && password1 !== "" && password2 !== ""
      ? setDisableButton(false)
      : setDisableButton(true);
  }
  return (
    <>
      <div className="m-top-2"></div>
      <div className="form-container">
        <form className="">
          <div className="user-input">
            <label htmlFor="text">
              First Name <span>*</span>
            </label>
            <br />
            <input
              type="text"
              id="text"
              required
              autoComplete="off"
              placeholder=" John"
            />
          </div>
          <div className="user-input">
            <label htmlFor="text">
              Last Name<span>*</span>
            </label>
            <br />
            <input
              type="text"
              id="text"
              required
              autoComplete="off"
              placeholder=" Doe"
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
              required
              autoComplete="off"
              placeholder=" johndoe@gmail.com"
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
              onChange={newPasswordHandler}
              required
              autoComplete="off"
              placeholder=" ********"
            />
            <br />
          </div>
          <div className="user-input">
            <label htmlFor="password">
              Confirm Password <span>*</span>
            </label>
            <br />
            <input
              type="password"
              id="password"
              onChange={confirmPasswordHandler}
              required
              autoComplete="off"
              placeholder=" ********"
            />
            <br /> <br />
          </div>
          <button className="btn-bar btn" disabled={disableButton}>
            Login
          </button>
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
