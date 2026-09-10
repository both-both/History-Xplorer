import styled from "styled-components";
import { resetButton } from "../../../styles/mixins";
import { theme } from "../../../styles/Theme.Styled";

export const ThemeToggleStyled = styled.button`
  ${resetButton}
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  color: ${theme.color.palette.offWhite};
  width: 30px;

  body.light-mode & {
    color: ${theme.color.palette.black};
  }
`;
