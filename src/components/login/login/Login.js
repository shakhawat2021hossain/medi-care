import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { googleSignIn, handleUserSignIn } = useAuth();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    handleUserSignIn(email, pass).then((result) => {
      history.push(redirect_uri);
    });
  };

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      history.push(redirect_uri);
    });
  };
  console.log(email, pass);
  return (
    <div className="login">
      <h2>Please Login</h2>
      <form onSubmit={handleSignIn} className="form-container">
        <label htmlFor="name">
          <b>Email</b>
        </label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          onChange={handleEmail}
          required
        />
        <br />

        <label htmlFor="pass">
          <b>Password</b>
        </label>
        <br />
        <input
          type="password"
          name="pass"
          id="pass"
          placeholder="Password"
          onChange={handlePass}
          required
        />
        <br />
        <input type="submit" value="Login" />
        <br />
        <button onClick={handleGoogleSignIn}>Google Sign In</button>
        <Link to="/register">
          <p>Don't have an account?</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
