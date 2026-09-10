import styled, { css, type RuleSet } from "styled-components";
import type { ContainerStyleProps, ContainerTag } from "./Container.types";
import { theme } from "../../styles/Theme.Styled";

const byTag: Record<ContainerTag, RuleSet<ContainerStyleProps>> = {
  div: css<ContainerStyleProps>`
    &.overlay-box {
      position: relative;
      opacity: 0.35;
      z-index: 0;
      background-color: black;
      height: 40vw;
    }
  `,
  section: css`
    max-width: 1200px;
    padding-block: 4rem;
  `,
  fieldset: css`
    border: none;
  `,
  article: css`
    h2 {
      font-size: 1.15vw;
    }

    h3 {
      font-size: 1.05vw;
      font-style: italic;
    }

    p {
      font-size: 1vw;
    }
  `,
  main: css`
    display: block;
    width: 100%;
  `,
  figure: css``,

  li: css`
    list-style: none;

    h2 {
      font-size: ${theme.fontSize.s};
    }
    p {
      font-size: ${theme.fontSize.s};
      line-height: 1.5;
    }
  `,
};

export const ContainerStyled = styled.div<
  { $innerHTML?: ContainerTag } & ContainerStyleProps
>`
  background-color: ${({ $color }) => $color ?? "transparent"};

  ${({ $innerHTML = "div" }) => byTag[$innerHTML]}
`;
