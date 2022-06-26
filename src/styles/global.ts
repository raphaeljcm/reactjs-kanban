import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    font: 14px 'Roboto', sans-serif;
    background-color: #ecf1f8;
    color: #333;
    -webkit-font-smoothing: antialiased;
  }
  ul {
    list-style: none;
  }
`;