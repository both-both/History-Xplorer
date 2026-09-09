import parse from "html-react-parser";
import { Container } from "../../Container/Container";
import { EventCardStyled } from "./EventCard.Styled";
import type { EventCardProps } from "./EventCard.type";
import icon from "../../../assets/images/Bookmark.svg";
import { ReadMoreButton } from "../../elements/ReadMoreButton/ReadMoreButton";

export const EventCard = ({ year, text, links }: EventCardProps) => (
  <EventCardStyled innerHTML="article">
    <h2>Year: {year}</h2>
    <p>{text}</p>
    <Container>
      <Container>{parse(icon)}</Container>
      <ReadMoreButton links={links} />
    </Container>
  </EventCardStyled>
);
