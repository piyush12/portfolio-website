import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../utils/globalConst";

const LinkStyle = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: var(--text-color);
  font-size: 2rem;

  span {
    color: var(--primary);
    font-weight: bold;
    font-size: 2rem;
  }

  &:hover {
    text-decoration: none;
    color: var(--text-color);
  }

  @media ${device.mobileL} {
    padding-left: 4rem;
    z-index: 2;
    position: relative;
  }
`;

function Logo() {
  return (
    <LinkStyle to="/">
      <span>&lt;</span>Piyush <span>/&gt;</span>
    </LinkStyle>
  );
}

export default Logo;
