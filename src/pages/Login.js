import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import LoginForm from "../components/LoginForm";
import { signIn, signUp } from "../actions/auth";

const LoginPageStyles = styled.div`
  background-image: url("../../styles/polygon.svg");
  height: 100vh;
  width: 100vw;
`;

const initialState = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const [formState, setFormState] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleStateChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signIn(formState, navigate));
  };

  return <LoginPageStyles>This is login</LoginPageStyles>;
}
