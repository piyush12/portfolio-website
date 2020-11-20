import React from "react";
import styled from "styled-components/macro";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import bannerImg from "../assets/images/banner-img.png";
import { device } from "../utils/globalConst";

const Banner = styled.div`
  padding-top: 3rem;

  h1 {
    color: var(--text-color);
    line-height: 5rem;
    font-size: 4rem;
  }

  h3 {
    color: var(--dark-text-color);
    font-size: 3rem;
    font-weight: 100;
    padding-top: 4rem;
  }

  a {
    background-color: var(--primary);
    padding: 1.3rem 3rem;
    border-radius: 4px;
    color: #fff;
    font-size: 1.5rem;
    margin-top: 2rem;
    display: inline-block;
    box-shadow: 5px 6px 21px 6px rgba(0, 0, 0, 0.2);
    text-decoration: none;

    &:hover {
      box-shadow: 5px 6px 21px 6px rgba(0, 0, 0, 0.1);
    }
  }

  @media ${device.mobileL} {
    h1 {
      font-size: 2rem;
      line-height: 3rem;
    }
    h3 {
      padding-top: 1.5rem;
      font-size: 1.5rem;
    }

    img {
      width: 90%;
      margin-top: 1rem;
    }
    a {
      padding: 1rem 2rem;
    }
  }
`;

const HomePage = () => {
  return (
    <Banner>
      <Row>
        <Col md={7}>
          <h1>I’m Piyush, a front-end developer based in New Delhi, India.</h1>
          <h3>I build websites and web applications</h3>

          <Link to="/projects" className="button-animation">
            View Projects
          </Link>
        </Col>
        <Col
          md={5}
          css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={bannerImg} alt="banner" />
        </Col>
      </Row>
    </Banner>
  );
};

export default HomePage;
