import { createGlobalStyle } from 'styled-components'
import { deviceBreakpoints } from './deviceBreakpoints'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }

  :root {
    font-size: 16px;

    @media (max-width: ${deviceBreakpoints.md}) {
      font-size: 14px;
    }
  }
  
  body {
    background: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  body, input, button, textarea {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    outline: none;
  }
  
  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.DARK_100};
    border-radius: 1rem;
  }
`
