import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  *,
  html,
  #root {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      outline: none;
  }

  body {
      font-family: "calibri", sans-serif;
      font-size: 1.2rem;
      background-color: ${ props => props.theme.colors.background.primary };
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  input,
  button {
      font-family: "calibri", sans-serif;
      font-size: 1.2rem;
      box-sizing: border-box;
  }
`;

export default Global;
