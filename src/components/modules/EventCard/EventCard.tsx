import { Container } from "../../Container/Container";
import { EventCardStyled } from "./EventCard.Styled";
import type { EventCardProps } from "./EventCard.type";
import icon from "../../../assets/images/Bookmark.svg";
import { ReadMoreButton } from "../../elements/ReadMoreButton/ReadMoreButton";
import { HiOutlineBookOpen } from "react-icons/hi";

export const EventCard = ({ year, text, links }: EventCardProps) => (
  <EventCardStyled innerHTML="li">
    <Container className="card">
      <h2>Year: {year}</h2>
      <Container className="card-text">
        <p>{text}</p>
        <Container className="card-button">
          <HiOutlineBookOpen size={30} />
          <ReadMoreButton links={links} />
        </Container>
      </Container>
    </Container>
  </EventCardStyled>
);
