import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {
    --purple: #7f56d9;
    --darkGrey: #475467;
    --black: #101828;
    --white: #fff;
  }

  .btn {
    position: relative;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
margin: 6px;
padding: 12px 20px;
-webkit-box-pack: center;
-webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-align: center;
-webkit-align-items: center;
-ms-flex-align: center;
align-items: center;
border: 1px solid var(--purple);
border-radius: 8px;
background-color: var(--purple);
box-shadow: 0 1px 2px 0 rgba(16,24,40,.05);
-webkit-transition: .2s;
transition: .2s;
color: var(--white);
font-weight: 500;
letter-spacing: .5px;
text-decoration: none;
white-space: nowrap;
cursor: pointer;

  }
`;

export default GlobalStyles;
