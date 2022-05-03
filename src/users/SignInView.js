import "./SignInView.css";

const SignInView = () => {
  return (
    <div className="background">
      <div className="titleBox">
        <h1>Sign in</h1>
      </div>
      <div className="usernameBox">
        <input className="usernameInput" type="text" placeholder="Username" />
      </div>
      <div className="passwordBox">
        <input
          className="passwordInput"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="signInButtonBox">
        <button className="signInButton">
          <span className="signInButtonText">Sign up</span>
        </button>
      </div>
      <div className="textBox">
        <p className="text">
          Don't have an account.{" "}
          <a href="/#" className="signUpTextLink">
            Sign up
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default SignInView;
