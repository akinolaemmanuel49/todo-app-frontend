import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { baseUrl } from "../constants";
import { getJWTExpireTime } from "../utils";
import "./SignInView.css";

const SignInView = () => {
  const [usernameContent, setUsernameContent] = useState("");
  const [passwordContent, setPasswordContent] = useState("");
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState("");

  const signIn = () => {
    axios
      .post(baseUrl + "/users/login", {
        username: usernameContent,
        password: passwordContent,
      })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.access_token);
        localStorage.setItem("refreshToken", res.data.refresh_token);
      });
  };

  useEffect(() => {
    setAccessToken(localStorage.getItem("accessToken"));
    if (
      getJWTExpireTime !== null &&
      getJWTExpireTime(accessToken) < Date.now()
    ) {
      navigate("/signin");
    } else {
      navigate("/");
    }
  }, [accessToken, navigate]);

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
          onChange={(e) => setUsernameContent(e.target.value)}
        />
      </div>
      <div className="passwordBox">
        <input
          className="passwordInput"
          type="password"
          placeholder="Password"
          onChange={(e) => setPasswordContent(e.target.value)}
        />
      </div>
      <div className="signInButtonBox">
        <button type="submit" className="signInButton" onClick={signIn}>
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
