import styled from "styled-components";
import { resetButton } from "../../../styles/mixins";
import { theme } from "../../../styles/Theme.Styled";

export const ReadMoreButtonStyled = styled.button`
  ${resetButton}
  color: inherit;
  font-family: ${theme.font.primary};
  text-decoration: underline;
`;
