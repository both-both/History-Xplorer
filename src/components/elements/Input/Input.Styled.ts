import styled from "styled-components";
import { theme } from "../../../styles/Theme.Styled";

export const InputStyled = styled.input`
  border: none;
  font-family: ${theme.font.secondary};
  font-size: ${theme.fontSize.xl};
  color: ${theme.color.dark.text};
`;
