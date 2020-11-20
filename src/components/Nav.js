import { NavLink } from "react-router-dom";

import styled from "styled-components";
import { VscColorMode } from "react-icons/vsc";
import useToggleTheme from "../utils/useToggleTheme";
import { device } from "../utils/globalConst";
import { MobileMenu } from "./MobileNav";

const NavStyle = styled.nav`
  ul {
    padding: 0;
    margin: 0;
    display: flex;

    @media ${device.mobileL} {
      display: none;
    }
  }

  li {
    padding: 0 2rem;
    list-style: none;
  }
  a {
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-color);
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover,
    &.active {
      color: var(--primary);
    }
  }
  button {
    background: none;
    outline: none;
    border: 0;
    color: var(--text-color);
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      color: var(--primary);
    }
  }
`;

const ToggleThemeMobileStyle = styled.div`
  display: none;

  @media ${device.mobileL} {
    display: block;
  }
  button {
    background: none;
    outline: none;
    border: 0;
    color: var(--text-color);
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.3rem;
  }
`;

function Nav() {
  const { toggleTheme } = useToggleTheme();

  return (
    <>
      <MobileMenu />
      <NavStyle>
        <ul>
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <button to="/" onClick={() => toggleTheme()}>
              <VscColorMode />
            </button>
          </li>
        </ul>
      </NavStyle>
      <ToggleThemeMobileStyle>
        <button to="/" onClick={() => toggleTheme()}>
          <VscColorMode />
        </button>
      </ToggleThemeMobileStyle>
    </>
  );
}

export default Nav;
