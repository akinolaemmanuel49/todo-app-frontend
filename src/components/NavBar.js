import "./NavBar.css";
import dropdownImage from "../images/dropdown.svg";
import { Link, Navigate } from "react-router-dom";
import SignInView from "../users/SignInView";

const NavBar = (props) => {
  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    <Navigate to="/signin" />;
  };
  return (
    <div className="navBar">
      <div className="navBarDropdownButton">
        <img
          className="dropdownImage"
          src={dropdownImage}
          alt="Dropdown button"
        />
        <div className="navBarProfileView">
          <div className="profileImageContainer">
            <img
              className="profileImage"
              src={props.profileImage}
              alt="Profile"
            />
          </div>
          <div className="greeting">
            <p>Hello, {props.username}</p>
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
