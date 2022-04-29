import "./NavBar.css";
import dropdownImage from "../images/dropdown.svg";

const NavBar = (props) => {
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
            <a href="/#">Sign out</a>
          </div>
        </div>
      </div>
      <div className="applicationName">
        <a href="/#">TODO APP</a>
      </div>
    </div>
  );
};

export default NavBar;
