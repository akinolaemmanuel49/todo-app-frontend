import { useState } from "react";
import { Link } from "react-router-dom";

import "./SignUpView.css";
import AuthService from "../services/auth.service";

const SignUpView = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    AuthService.signup(username, email, password, confirmPassword).then(
      (res) => {
        console.log(res.data);
        window.location.replace("/signin");
      },
      (err) => {
        console.error(err);
      }
    );
  };

  return (
    <div className="background">
      <div className="titleBox">
        <h1>Sign up</h1>
      </div>
      <div className="usernameBox">
        <input
          className="usernameInput"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="emailBox">
        <input
          className="emailInput"
          type="email"
          placeholder="johndoe@mail.com"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div className="passwordBox">
        <input
          className="passwordInput"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="confirmPasswordBox">
        <input
          className="confirmPasswordInput"
          type="password"
          placeholder="Confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="signUpButtonBox">
        <button className="signUpButton" onClick={handleSignUp}>
          <span className="signUpButtonText">Sign up</span>
        </button>
      </div>
      <div className="textBox">
        <p className="text">
          Already have an account.{" "}
          <Link to="/signin" className="signInTextLink">
            Sign in
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUpView;
