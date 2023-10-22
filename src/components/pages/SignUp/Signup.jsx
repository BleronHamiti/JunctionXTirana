import "./Signup.scss";
import React, { useState } from "react";
import { BiEnvelope, BiUser } from "react-icons/bi";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FormattedMessage } from "react-intl";
import flyingAirplane from '../../../assets/Home/Flying-Airplane.gif'
function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  return (
    <div className="div-login">
      <div className="div-img">
        <img src={flyingAirplane} className="imgLogin" alt="imgLogin" />
      </div>
      <div className="form-container">
        <br />
        <br />
        <h1 className="driveS">
          <FormattedMessage
            id="create-acc"
            defaultMessage="Create Account"
          />
        </h1>
        <br></br>
        <p className="driveww">
          <FormattedMessage
            id="i-have a car"
            defaultMessage="Create your free account and accpet global payments"
          />
        </p>
        <p className="driveww"></p>
        <form action="">
          <div className="input-container">
            <div className="inner-input">
              <span className="span1">
                <BiUser />
              </span>
              <input
                type="text"
                id="name"
                name="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full name"
                required
              />
            </div>
          </div>

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
                placeholder="Email Address"
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
          <div className="input-container">
            <div className="inner-input">
              <span className="span1">
                <BiLockAlt />
              </span>
              <input
                type="password"
                id="password"
                name="password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required
              />
               <span className="span1">
              <AiOutlineEyeInvisible />
            </span>
            </div>
          </div>
          <button type="submit" className="main-button">
            Sign Up
          </button>
          <br></br>
          <br></br>
          <center><p className="register-acc">Already an account? <span className="register">Log in</span></p></center>
        
        </form>
      </div>
      <div className="left-container">
     
      </div>
    </div>
  )
}

export default Signup;