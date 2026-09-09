import styled from "styled-components";
import { resetLink, resetList } from "../../../styles/mixins";
import { theme } from "../../../styles/Theme.Styled";
export const NavBarStyled = styled.nav`
  background-color: ${theme.color.dark.background};
  display: flex;
  justify-content: center;
  height: 8vw;
  border-bottom: 2rem solid ${theme.color.palette.charcoal};

  ul {
    align-items: end;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 70vw;
  }

  li {
    ${resetLink}
  }

  a {
    ${resetList}
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${theme.color.dark.text};
    text-transform: uppercase;

    a:hover {
    }
    a:active {
    }
  }
`;
