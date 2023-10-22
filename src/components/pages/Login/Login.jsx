import "./Login.scss";
import React, { useState } from "react";
import { BiEnvelope } from "react-icons/bi";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FormattedMessage } from "react-intl";
import loginlogo from "../../../assets/Home/login.jpg";

function Login2() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="div-login2">
      <div className="form-container">
        <br />
        <br />
        <h1 className="driveS">
          <FormattedMessage id="log-in" defaultMessage="Log in" />
        </h1>
        <br></br>
        <p className="driveww">
          <FormattedMessage
            id="i-have a car"
            defaultMessage="Welcome back to your account"
          />
        </p>
        <p className="driveww"></p>
        <form action="">
          <div className="input-container">
            <div className="inner-input">
              <span className="span1">
                <BiEnvelope />
              </span>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="input-container">
            <div className="inner-input">
              <span className="span1">
                <BiLockAlt />
              </span>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />

              <span className="span1">
                <AiOutlineEyeInvisible />
              </span>
            </div>
          </div>
          <br></br>
          <p className="forgot-pass">
            <FormattedMessage
              id="forgot-pass"
              defaultMessage="Forgot Password ?"
            />
          </p>
          <br></br>
          <div className="remember-me-div">
            <input type="radio" value="Remember me" />
            <p className="p-div">Remember me</p>
          </div>
          <br></br>
          <br></br>
          <button type="" className="main-button">
            <a href="/dashboard">Log In</a>
          </button>
          <br></br>
          <br></br>
          <center>
            <p className="register-acc">
              Don't have an account? <span className="register"><a href="/signup">Register</a></span>
            </p>
          </center>
          <center>
            <a href="/"className="cont-with">Back Home</a>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Login2;
