import { NavLink } from "react-router-dom";

import { Li, Ul } from "../../../styles/Element.styled";
import { NavBarStyled } from "./NavBar.Styled";

export const NavBar = () => {
  return (
    <NavBarStyled>
      <Ul>
        <Li>
          <NavLink to={"/by-date"}>By Date</NavLink>
        </Li>
        <Li>
          <NavLink to={"/today"}>Today</NavLink>
        </Li>
        <Li>
          <NavLink to={"/since"}>Since</NavLink>
        </Li>
      </Ul>
    </NavBarStyled>
  );
};
