import headerimage from "../../../assets/images/headerimage.jpg";
import { useDate } from "../../../Context/useDate";
import { Container } from "../../Container/Container";
import { Input } from "../../elements/Input/Input";
import { HeaderStyled } from "./Header.Styled";
import { useLocation } from "react-router-dom";

const plates = {
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
const plate = plates[pathName] ?? plates["/today"];

export const Header = () => {
  const { date, setDate, since, setSince } = useDate();
  const { pathName } = useLocation();
  const plate = plates[pathName] ?? plates["/today"];

  return (
    <HeaderStyled>
      <img src={headerimage} alt="arkiv" />
      <Container className="overlay-box">kckc</Container>
      <Container className="header-plate">
        <h1>{plate.title}</h1>
        <p>{plate.title}</p>
        <Container>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Since year"
            value={since}
            onChange={(e) => setSince(e.target.value)}
          />
        </Container>
      </Container>
    </HeaderStyled>
  );
};
