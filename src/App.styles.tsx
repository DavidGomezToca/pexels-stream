import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *:after{
        margin: 0;
        padding: 0;
        border: none;
        font-family:"Roboto", sans-serif;
        box-sizing: border-box !important;
        -webkit-box-sizing: border-box !important;
        -moz-box-sizing: border-box !important;
        -ms-box-sizing: border-box !important;
    }

    ::-webkit-scrollbar{
        width: 0;
        background: transparent;
    }
    
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar{
        display: none;
    }

    input:focus{
        outline: none;
    }
`;

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.background};
`;
