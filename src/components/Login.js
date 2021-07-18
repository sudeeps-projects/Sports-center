import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="background-image">
      <div className="login">
        <div className="box">
          <div className="login-txt">
            <h1>Log In To Your Account</h1>
            <p>Don't Have an Account </p>
          </div>
          <div className="inputs">
            <input type="text" placeholder="username" />
            <div className="input-row">
              <input type="text" className="first" placeholder="First Name" />
              <input type="text" className="last" placeholder="Last Name" />
            </div>
            <input type="text" placeholder="E-mail" />
            <button disabled={false}>Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
