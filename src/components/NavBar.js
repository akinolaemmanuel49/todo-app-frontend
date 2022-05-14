import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import API_URL from "../utils/constants";
import AuthService from "../services/auth.service";
import authHeader from "../services/auth-header";
import "./NavBar.css";
import dropdownImage from "../images/dropdown.svg";
import SignInView from "../users/SignInView";
import UploadProfileImageModal from "./UploadProfileImageModal";

const NavBar = (props) => {
  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [show, setShow] = useState(false);
  const location = useLocation();

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const getUserProfile = () => {
    axios
      .get(API_URL + "/users/me", {
        headers: authHeader(),
      })
      .then((res) => {
        setUsername(res.data.username);
        setProfileImage(res.data.profile_image);
      })
      .catch((err) => {
        console.log(err);
        window.location.reload();
      });
  };

  useEffect(() => {
    getUserProfile();
  }, [location.state]);

  const handleSignOut = () => {
    AuthService.signout();
  };
  return (
    <div className="navBar">
      <UploadProfileImageModal
        show={show}
        handleClose={hideModal}
      ></UploadProfileImageModal>
      <div className="navBarDropdownButton">
        <img
          className="dropdownImage"
          src={dropdownImage}
          alt="Dropdown button"
        />
        <div className="navBarProfileView">
          <div className="profileImageContainer" onClick={showModal}>
            <img className="profileImage" src={profileImage} alt="Profile" />
          </div>

          <div className="greeting">
            <p>Hello, {username}</p>
          </div>
          <div className="signout">
            <Link to={<SignInView />} onClick={handleSignOut}>
              Sign out
            </Link>
          </div>
        </div>
      </div>
      <div className="applicationName">
        <Link to="/">TODO APP</Link>
      </div>
    </div>
  );
};

export default NavBar;
