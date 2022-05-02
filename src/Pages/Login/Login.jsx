import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h3> Login Page</h3>

       

      <Link to="/signup"> <button> SignUp</button></Link>
    </>
  );
};

export default Login;
