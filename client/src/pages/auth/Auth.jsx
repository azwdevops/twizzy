import React from "react";

import "./Auth.css";
import Logo from "@/assets/logo.png";

const Auth = () => {
  return (
    <div className="auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="web-name">
          <h1>Twizzy Media</h1>
          <h6>Explore ideas through the world</h6>
        </div>
      </div>
      {/* <SignUp /> */}
      <Login />
    </div>
  );
};

function Login() {
  return (
    <div className="a-right">
      <form className="info-form auth-form">
        <h3>Log In</h3>
        <div>
          <input type="text" placeholder="Username" className="info-input" name="username" />
        </div>
        <div>
          <input type="password" placeholder="Password" name="password" className="info-input" />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>Don't have an account yet? Sign Up</span>
          <button className="button info-button">Login</button>
        </div>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className="a-right">
      <form className="info-form auth-form">
        <h3>Sign Up</h3>
        <div>
          <input type="text" placeholder="First Name" className="info-input" name="firstName" />
          <input type="text" placeholder="Last Name" className="info-input" name="lastName" />
        </div>
        <div>
          <input type="text" placeholder="Username" className="info-input" name="username" />
        </div>
        <div>
          <input type="password" placeholder="Password" name="password" className="info-input" />
          <input type="password" placeholder="Confirm Password" name="confirmPassword" className="info-input" />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>Already have an account? Login</span>
        </div>
        <button className="button info-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Auth;
