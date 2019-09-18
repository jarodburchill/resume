import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  hr {
    margin: 0.25vh 0;
    border: none;
    background-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    height: 1px;
  }

  h1 {
    font-size: 3.25vh;
  }

  h2 {
    font-size: 2.75vh;
    font-style: italic;
    font-weight: 400;
  }

  h3 {
    font-size: 2.5vh;
  }

  h4 {
    font-size: 1.75vh;
  }

  p {
    font-size: 1.5vh;
  }

  ul {
    padding: 0.5vh 0 0 0;
  }

  li {
    font-size: 1.25vh;
  }

  a {
    position: relative;
    text-decoration: none;
    color: black;
    &:before {
      background-color: black;
      content: "";
      height: 1px;
      position: absolute;
      bottom: -1px;
      left: 50%;
      transform: translateX(-50%);
      transition: width 0.3s ease-in-out;
      width: 100%;
    }
    &:hover {
      color: #0000ee;
      &:before {
        width: 0;
      }
    }
  }

  @media screen and (max-width: 600px) {
    hr {
      margin: 0.25vw 0;
    }

    h1 {
      font-size: 3.25vw;
    }

    h2 {
      font-size: 2.75vw;
    }

    h3 {
      font-size: 2.5vw;
    }

    h4 {
      font-size: 1.75vw;
    }

    p {
      font-size: 1.5vw;
    }

    ul {
      padding: 0.5vw 0 0 0;
    }

    li {
      font-size: 1.25vw;
    }
  }

  @media print {
    a {
      &:before {
        background-color: unset;
        content: unset;
        height: unset;
        position: unset;
        bottom: unset;
        left: unset;
        transform: unset;
        transition: unset;
        width: unset;
      }
      color: black;
    }
  }
`;

export default GlobalStyle;
