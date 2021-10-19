import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const Register = () => {
  const { handleUserRegister } = useAuth();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };
  console.log(email, pass);

  const handleRegister = (e) => {
    e.preventDefault();
    handleUserRegister(email, pass);
  };
  return (
    <div className="register">
      <h2>Please Register</h2>
      <form onSubmit={handleRegister} className="form-container">
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
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
        <input type="submit" value="Register" />
        <Link to="/login">
          <p>Already have an account?</p>
        </Link>
      </form>
    </div>
  );
};

export default Register;
