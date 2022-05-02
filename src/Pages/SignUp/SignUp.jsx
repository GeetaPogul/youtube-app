import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <h3> SignUp Page form</h3>

      <Link to="/login">
        <button> Login</button>
      </Link>
    </>
  );
};

export default SignUp;
