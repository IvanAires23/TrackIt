import { createGlobalStyle, } from "styled-components";

const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lexend Deca';
    }

    body{
        background-color: #e5e5e5;
    }

    a{
        text-decoration: none;
    }
`

export default GlobalStyled

