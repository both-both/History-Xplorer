import { createGlobalStyle } from "styled-components";
import { reset } from "./mixins";
import { theme } from "./Theme.Styled";

export const GlobalStyle = createGlobalStyle`
    * {
        ${reset}    
}

body {
    font-family: ${(props) => props.theme.font.primary};
    font-size: ${({ theme }) => theme.fontSize.s};
    background-color: ${theme.color.dark.background};

    &.light-mode{
        background-color: ${({ theme }) => theme.color.light};
        color: ${({ theme }) => theme.color.light.text}
    }

        &.dark-mode{
        background-color: ${({ theme }) => theme.color.dark};
        color: ${({ theme }) => theme.color.dark.text}
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
