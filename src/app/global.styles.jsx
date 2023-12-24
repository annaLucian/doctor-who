import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
    --color-primary: #040521;
    --color-secundary:#FFC67E;
    --color-tertiary: #FFFFFF;
    --fw-bold:800;
    --fw-semibold: 600;
    --fw-regular: 400;
}
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    border: 0;
    font-family: var(--font-lato);
}
body {
    background-color: var(--color-primary);
    font-size: 10px;
    font-family: var(--font-montserrat);
}

`;
export default GlobalStyle;
