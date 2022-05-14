import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthService from "../services/auth.service";
import "./SignInView.css";

const SignInView = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    AuthService.signin(username, password)
      .then(() => {
        navigate("/");
        // window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  if (props.isAuthencated) {
    return navigate("/");
  }
  return (
    <div className="background">
      <div className="titleBox">
        <h1>Sign in</h1>
      </div>
      <div className="usernameBox">
        <input
          className="usernameInput"
          type="text"
          placeholder="Username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="passwordBox">
        <input
          className="passwordInput"
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="signInButtonBox">
        <button type="submit" className="signInButton" onClick={handleSignIn}>
          <span className="signInButtonText">Sign in</span>
        </button>
      </div>
      <div className="textBox">
        <p className="text">
          Don't have an account.{" "}
          <Link to="/signup" className="signUpTextLink">
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignInView;
