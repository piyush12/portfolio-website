import styled from "styled-components";
import { SiCodesandbox, SiGithub, SiLinkedin } from "react-icons/si";
import Container from "react-bootstrap/Container";

const FooterStyle = styled.footer`
  padding-top: 2rem;
  border-top: 1px solid #035377;
  margin-top: 3rem;
  z-index: 8;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
  }

  li {
    list-style: none;
    padding-right: 3rem;
  }

  a {
    color: var(--text-color);
    font-size: 2rem;
  }
  p {
    color: var(--dark-text-color);
    font-size: 1rem;
    font-weight: 100;
    margin-top: 1rem;
  }
`;

function Footer() {
  return (
    <FooterStyle>
      <Container>
        <ul>
          <li>
            <a
              href="https://github.com/piyush12/"
              target="_blank"
              rel="noreferrer"
            >
              <SiGithub />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/piyush-chatterjee-72639054"
              target="_blank"
              rel="noreferrer"
            >
              <SiLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://codesandbox.io/u/piyush12/sandboxes"
              target="_blank"
              rel="noreferrer"
            >
              <SiCodesandbox />
            </a>
          </li>
        </ul>
        <p>© {new Date().getFullYear()} Piyush</p>
      </Container>
    </FooterStyle>
  );
}

export default Footer;
