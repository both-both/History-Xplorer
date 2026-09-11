import styled from "styled-components";
import { theme } from "../../../styles/Theme.Styled";

export const HeaderStyled = styled.header`
  position: relative;
  height: 40vw;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    position: absolute;
    z-index: -1;
    height: 40vw;
  }

  .header-plate {
    position: relative;
    top: 80px;
    margin: auto;
    height: 240px;
    width: fit-content;
    background-color: ${theme.color.dark.background};
    color: ${theme.color.dark.text};
    border: 24px solid ${theme.color.palette.sand};

    body.light-mode & {
      background-color: ${theme.color.light.background};
      color: ${theme.color.light.text};
      border-color: ${theme.color.palette.bronze};
    }
  }
`;
