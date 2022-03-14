import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn, signUp } from "../actions/auth";

import img from "../assets/logo.svg";

const LoginFormStyles = styled.form`
  background-color: white;
  width: 30%;
  max-width: 400px;
  min-width: 200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .content {
    margin: 24px;
  }

  .input-container {
    display: flex;
    flex-direction: column;

    label {
      margin-top: 16px;
    }

    input {
      height: 20px;
      margin-top: 12px;
      padding: 8px;
    }
  }

  .btn--login {
    margin: 16px 0;
  }

  .logo {
    width: 35px;
    margin-bottom: 16px;
  }

  .sign-up {
    color: var(--purple);
    cursor: pointer;
  }
`;

const initialState = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const [formState, setFormState] = useState(initialState);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleStateChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const switchSignUp = () => {
    setIsSignUp(!isSignUp);
    setFormState(initialState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    isSignUp
      ? dispatch(signUp(formState, navigate))
      : dispatch(signIn(formState, navigate));
  };

  return (
    <LoginFormStyles>
      <div className="content">
        <img src={img} className="logo" />
        <h1 className="h1-small">{isSignUp ? "Sign Up" : "Log In"}</h1>
        <p>
          {isSignUp
            ? "Welcome! Please enter your details below"
            : "Welcome back! Please enter your details"}
        </p>

        {isSignUp && (
          <div className="input-container">
            <label>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              onChange={handleStateChange}
              value={formState.name}
            />
          </div>
        )}
        <div className="input-container">
          <label>Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your Email"
            onChange={handleStateChange}
            value={formState.email}
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••"
            onChange={handleStateChange}
            value={formState.password}
          />
        </div>
        {isSignUp && (
          <div className="input-container">
            <label>Repeat Password</label>
            <input
              type="password"
              id="password_confirm"
              name="password_confirm"
              placeholder="••••••"
              onChange={handleStateChange}
              value={formState.password_confirm}
            />
          </div>
        )}
        <button className="btn btn--login" type="submit" onClick={handleSubmit}>
          Log in
        </button>
        {isSignUp ? (
          <p>
            Already have an account?
            <span className="sign-up" onClick={switchSignUp}>
              Sign in
            </span>
          </p>
        ) : (
          <p>
            Don't have an account?
            <span className="sign-up" onClick={switchSignUp}>
              Sign up
            </span>
          </p>
        )}
      </div>
    </LoginFormStyles>
  );
}
