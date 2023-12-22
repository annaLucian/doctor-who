'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
    --color-primary: #040521;
    --color-secundary:#FFC67E;
    --color-tertiary: #FFFFFF;
    --ff-lato:'Lato', sans-serif;
    --ff-montserrat: 'Montserrat', sans-serif;
    --fw-bold:700;
    --fw-semibold: 600;
    --fw-regular: 400;
}
body {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    background-color: var(--color-primary);
    font-size: 10px;
    font-family: var(--ff-montserrat);
}

`;
export default GlobalStyle;
