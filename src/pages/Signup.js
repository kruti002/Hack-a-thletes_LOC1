import React, { useState } from "react";
import "./Signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/3Dbutton";
import {
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
function SignUpForm() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const { name, email, password } = state;
    alert(
      `You are sign up with name: ${name} email: ${email} and password: ${password}`
    );

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <div className="social-container">
          <a href="#" className="social">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="social">
            <FontAwesomeIcon icon={faGooglePlusG} />
          </a>
          <a href="#" className="social">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <span>or use your email for registration</span>
        <input
          style={{ marginTop: "10px" }}
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          style={{ marginTop: "10px" }}
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          style={{ margin: "10px" }}
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {/* <button
          style={{
            borderRadius: "30px",
            color: "white",
            backgroundColor: "#ff4b2b",
          }}
        >
          Sign In
        </button> */}
        <Button message={"SignUp"} />
      </form>
    </div>
  );
}
function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = state;
    alert(`You are login with email: ${email} and password: ${password}`);

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="#" className="social">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="social">
            <FontAwesomeIcon icon={faGooglePlusG} />
          </a>
          <a href="#" className="social">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <span>or use your account</span>
        <input
          style={{ marginTop: "10px" }}
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          style={{ marginTop: "10px" }}
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a href="#">Forgot your password?</a>
        {/* <button
          style={{
            borderRadius: "30px",
            color: "white",
            backgroundColor: "#ff4b2b",
          }}
        >
          Sign In
        </button> */}
        <Button message={"SignIn"} />
      </form>
    </div>
  );
}
export default function SignupLogin() {
  const [type, setType] = useState("signIn");
  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
      console.log(type);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="App">
      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              {/* <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
                style={{
                  marginTop: "15px",
                  borderRadius: "30px",
                  border: "2px solid white",
                  color: "white",
                }}
              >
                Sign In
              </button> */}
              <Button
                className="ghost"
                id="signIn"
                func={() => handleOnClick("signIn")}
                message={"SignIn"}
              />
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              {/* <button
                className="ghost "
                id="signUp"
                onClick={() => handleOnClick("signUp")}
                style={{
                  marginTop: "15px",
                  borderRadius: "30px",
                  border: "2px solid white",
                  color: "white",
                }}
              >
                Sign Up
              </button> */}
              <Button
                className="ghost "
                id="signUp"
                func={() => handleOnClick("signUp")}
                message={"SignUp"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
