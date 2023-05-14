import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const fonts = {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif"
}
// Colors for layout
export const colors = {
    primary1: "hsl(204,23.8%,95.9%)",
    background1: "#0F1624",
    accent1: "hsl(34.9,98.6%,72.9%)",
    button: "hsl(205.1,100%,36.1%)",
    background2: "hsl(232.7,27.3%,23.7%)",
}
// Breakpoints for responsive design
export const breakpoints = {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
}

export const GlobalStyles = createGlobalStyle`
    ${normalize};
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;

    }
    body {
        font-family: ${fonts.main};
        font-size: 1.6rem;
        background: ${colors.background1};
        color: ${colors.primary1};
        cursor: default;
        transition: all 0.50s linear;
    }
    h1,h2,h3,h4,h5,h6,button {
        font-family: ${fonts.title};
    }
    a {
        text-decoration: none;
    }
    li{
        list-style: none;
    }
`;