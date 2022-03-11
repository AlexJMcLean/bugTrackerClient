import React from "react";
import styled from "styled-components";

import "normalize.css";

import GlobalStyles from "../../styles/GlobalStyles";
import Typography from "../../styles/Typography";

const BodyStyles = styled.div`
  display: inline-block;
  width: calc(100vw - 200px);
  max-width: 1000px;
  margin: 100px 0 100px 50px;

  // Center the container on larger screens
  @media (min-width: 1300px) {
    position: absolute;
    left: 40%;
    transform: translateX(-40%);
  }

  @media (max-width: 576px) {
    display: block;
    width: 80%;
    margin: 100px auto;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />

      <BodyStyles>{children}</BodyStyles>
    </>
  );
}
