import { createGlobalStyle } from 'styled-components';

export const colors = {
  greenLogo: '#B5C401',
  bgBody: '#F7F7F7',
  grayLight: '#707070',
  grayWhite: '#868686',
  borderLight: '#C2C2C2',
};

export default createGlobalStyle`
  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
  @media(max-width: 480px) {
    html {
      font-size: 80.25%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #F7F7F7;
    font-family: Source Sans Pro, sans-serif;
    font-style: italic;
    overflow-x: hidden;
  }

  button {
    cursor: pointer;

    &:disabled {
      opacity: .3;
      cursor: not-allowed;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
