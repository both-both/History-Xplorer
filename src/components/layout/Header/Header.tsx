import headerimage from "../../../assets/images/headerimage.jpg";
import { Container } from "../../Container/Container";
import { HeaderStyled } from "./Header.Styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <img src={headerimage} alt="arkiv" />
      <Container className="overlay-box">kckc</Container>
    </HeaderStyled>
  );
};
