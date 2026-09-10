import styled from "styled-components";
import { Container } from "../../Container/Container";
import { theme } from "../../../styles/Theme.Styled";

const axis = theme.color.palette.sand;
const yearWidth = "9rem"; // afstand fra tidslinjen ind til kortets indre akse
const rowHeight = "2rem"; // h2'ens linjehøjde = hvor prik og streg sidder
const dot = "0.85rem";

export const EventCardStyled = styled(Container)`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;

  // år på række 1, tekst på række 2
  .card {
    row-gap: 0.75rem;
    column-gap: 1rem;
    display: grid;
    grid-template-rows: ${rowHeight} auto;
  }

  h2 {
    line-height: ${rowHeight};
  }

  // ikon og knap under teksten
  .card-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    margin-top: 0.75rem;
  }

  img {
    width: 35px;
  }

  //prikken på aksen
  &::after {
    content: "";
    position: absolute;
    top: ${rowHeight};
    left: 50%;
    translate: -50% -50%;
    width: ${dot};
    height: ${dot};
    border-radius: 50%;
    background-color: ${axis};
  }

  //vandret forbindelse fra aksen ind til kortets indre akse
  &::before {
    content: "";
    position: absolute;
    top: ${rowHeight};
    height: 2px;
    width: 5rem;
    background-color: ${axis};
  }

  //ulige kort: venstre for aksen
  .card {
    grid-column: 1;
    grid-template-columns: 1fr ${yearWidth};
  }

  h2 {
    grid-area: 1 / 2;
    text-align: left;
  }

  .card-text {
    grid-area: 2 / 1;
    text-align: right;
  }

  .card-text p {
    color: ${theme.color.palette.offWhite};

    body.light-mode & {
      color: ${theme.color.palette.black};
    }
  }

  .card-button {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.75rem;
    color: ${theme.color.palette.offWhite};

    a {
      flex-basis: 100%;
      color: inherit;
      font-size: ${theme.fontSize.xs};
    }

    body.light-mode & {
      color: ${theme.color.palette.black};
    }
  }

  &::before {
    right: 50%;
  }

  //lige kort: højre for aksen
  &:nth-child(even) {
    .card {
      grid-column: 2;
      grid-template-columns: ${yearWidth} 1fr;
    }

    h2 {
      grid-area: 1 / 1;
      text-align: right;
    }

    .card-text {
      grid-area: 2 / 2;
      text-align: left;
    }

    .card-button {
      justify-content: flex-start;
    }

    &::before {
      right: auto;
      left: 50%;
    }
  }
`;
