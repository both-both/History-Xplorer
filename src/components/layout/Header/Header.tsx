import headerimage from "../../../assets/images/headerimage.jpg";
import { useDate } from "../../../Context/useDate";
import { Container } from "../../Container/Container";
import { Input } from "../../elements/Input/Input";
import { HeaderStyled } from "./Header.Styled";
import { useLocation } from "react-router-dom";
import type { Plate } from "./Header.types";

const plates: Record<string, Plate> = {
  "/today": {
    title: "On this day",
    field: "none",
    text: "What happened on this day - historical events, deaths and births thoughout time",
  },
  "/by-date": {
    title: "On:",
    field: "date",
    text: "What happened on this day - Here you can enter a specific date to only get events that happened on this date",
  },
  "/since": {
    title: "Since:",
    field: "since",
    text: "What happened on this day - Here you can enter a specific year to get all the events that happened on this day, since that year.",
  },
};

export const Header = () => {
  const { date, setDate, since, setSince } = useDate();
  const { pathname } = useLocation();
  const plate = plates[pathname] ?? plates["/today"];

  return (
    <HeaderStyled>
      <img src={headerimage} alt="arkiv" />
      <Container className="overlay-box" />

      <Container className="header-plate">
        <h1>{plate.title}</h1>
        <Container>
          {plate.field === "date" && (
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          )}

          {plate.field === "since" && (
            <Input
              type="number"
              placeholder="Since year"
              value={since}
              onChange={(e) => setSince(e.target.value)}
            />
          )}
        </Container>
        <p>{plate.text}</p>
      </Container>
    </HeaderStyled>
  );
};
