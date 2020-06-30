import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
  }
  h1, h2 {
      font-family: 'Roboto';
  }
  button {
  }
  button:focus, input:focus  {
      outline: none;
  }
  *, *:before *:after {
    box-sizing:inherit;
  }
  ul, li, h1, h2, h3, p, button {
    margin: 0;
    padding:0;
  }
  ul {list-style: none;}
`;
