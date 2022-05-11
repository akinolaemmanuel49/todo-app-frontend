import axios from "axios";

import API_URL from "../utils/constants";

// const API_URL = "https://todo-app-backend.azurewebsites.net/api/v1";
// const API_URL = "http://localhost:8000/api/v1";

const signup = (username, email, password, confirmPassword) => {
  return axios.post(API_URL + "/users", {
    username: username,
    email: email,
    password: password,
    confirm_password: confirmPassword,
  });
};

const signin = (username, password) => {
  return axios
    .post(API_URL + "/users/login", {
      username: username,
      password: password,
    })
    .then((res) => {
      if (res.data.access_token && res.data.refresh_token) {
        localStorage.setItem("accessToken", res.data.access_token);
        localStorage.setItem("refreshToken", res.data.refresh_token);
      }
      return res.data;
    });
};

const signout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("username");
  localStorage.removeItem("profileImage");
  localStorage.removeItem("todoList");
  window.location.replace("/signin");
};

const refreshTokenAPI = () => {
  axios
    .get(API_URL + "/users/refresh", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("refreshToken"),
      },
    })
    .then((res) => {
      localStorage.setItem("accessToken", res.data.access_token);
    })
    .catch((err) => {
      console.error(err);
    });
};

const AuthService = {
  signup,
  signin,
  signout,
  refreshTokenAPI,
};

export default AuthService;
