import styled from "styled-components";
import Container from "react-bootstrap/Container";

import Footer from "./Footer";
import Logo from "./Logo";
import Nav from "./Nav";
import { device } from "../utils/globalConst";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 4rem 0;

  @media ${device.mobileL} {
    padding: 1rem 0;
  }
`;

const FixedFooterStyle = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`;

function Layout({ children }) {
  return (
    <Container
      style={{
        position: "relative",
      }}
    >
      <FixedFooterStyle>
        <Header>
          <Logo />
          <Nav />
        </Header>
        {children}
        <Footer />
      </FixedFooterStyle>
    </Container>
  );
}

export default Layout;
