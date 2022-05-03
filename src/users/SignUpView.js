import "./SignUpView.css";

const SignUpView = () => {
  return (
    <div className="background">
      <div className="titleBox">
        <h1>Sign up</h1>
      </div>
      <div className="usernameBox">
        <input className="usernameInput" type="text" placeholder="Username" />
      </div>
      <div className="emailBox">
        <input
          className="emailInput"
          type="email"
          placeholder="johndoe@mail.com"
        ></input>
      </div>
      <div className="passwordBox">
        <input
          className="passwordInput"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="confirmPasswordBox">
        <input
          className="confirmPasswordInput"
          type="password"
          placeholder="Confirm password"
        />
      </div>
      <div className="signUpButtonBox">
        <button className="signUpButton">
          <span className="signUpButtonText">Sign in</span>
        </button>
      </div>
      <div className="textBox">
        <p className="text">
          Already have an account.{" "}
          <a href="/#" className="signUpTextLink">
            Sign up
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUpView;
