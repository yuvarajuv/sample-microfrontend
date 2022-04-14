import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body{
    padding: 0;
    margin: 0;
    font-family: 'Metropolis', sans-serif;
    max-height: 100vh;
    overflow: hidden;
    color: ${(props) => props.theme.colors.text.primary};
  }

  #root{
    height: 100vh
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
  }
   
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.lightGray};
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.darkGray};
  }
  .ag-body-viewport::-webkit-scrollbar-track{
    background-color: transparent;
  }
  .ag-body-viewport::-webkit-scrollbar{
    width: 0.125rem;
  }
`

export default GlobalStyle
