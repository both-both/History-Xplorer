import styled from "styled-components";
import { theme } from "../../../styles/Theme.Styled";

export const TodaymoduleStyled = styled.ul`
  position: relative;
  display: grid;
  gap: 3rem;
  max-width: 900px;
  margin-inline: auto;
  padding-block: 4rem;

  &::before {
    content: "";
    position: absolute;
    inset-block: 0;
    left: 50%;
    translate: -50%;
    width: 2px;
    background-color: ${theme.color.palette.sand};
  }
`;
