import styled from "styled-components";
import { theme } from "../../../styles/Theme.Styled";

export const InputStyled = styled.input`
  border: none;
  border-bottom: 2px solid ${theme.color.palette.gold};
  background: transparent;
  padding: 8px 4px;
  font-family: ${theme.font.secondary};
  font-size: ${theme.fontSize.m};
  color: ${theme.color.dark.text};
  outline: none;

  &:focus {
    border-bottom-color: ${theme.color.palette.cream};
  }
`;
