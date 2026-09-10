import { createGlobalStyle } from "styled-components";
import { reset } from "./mixins";
import { theme } from "./Theme.Styled";

export const GlobalStyle = createGlobalStyle`
    * {
        ${reset}    
}

body {
    font-family: ${theme.font.primary};
    font-size: ${theme.fontSize.s};
    background-color: ${theme.color.dark.background};
    color: ${theme.color.dark.text};

    &.light-mode{
        background-color: ${theme.color.light.background};
        color: ${theme.color.light.text}
    }
}

h1{
    font-family: ${(props) => props.theme.font.secondary}
}
h2, h{
    font-family: ${(props) => props.theme.font.primary};
}

img {
    width: 100%;
}

`;
