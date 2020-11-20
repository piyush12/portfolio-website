import styled from "styled-components/macro";
import { AiFillHtml5 } from "react-icons/ai";
import {
  DiCss3,
  DiReact,
  DiJsBadge,
  DiNpm,
  DiSass,
  DiGithubAlt,
  DiBootstrap,
} from "react-icons/di";

import { SiStyledComponents, SiApollographql, SiRedux } from "react-icons/si";
import { device } from "../utils/globalConst";

const SkillStyle = styled.div`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  li {
    color: #fff;
    font-size: 6rem;
    padding: 1rem 2rem;
    margin: 0 4rem;
    text-align: center;

    @media ${device.mobileL} {
      padding: 1rem 1rem;
      margin: 0 2rem;
    }
  }
  span {
    font-size: 1.5rem;
    display: block;
  }
`;

function SkillPage() {
  return (
    <SkillStyle>
      <ul>
        <li>
          <AiFillHtml5 css={{ color: "#dd4b24" }} />
          <span>Html 5</span>
        </li>
        <li>
          <DiCss3 css={{ color: "#254add" }} />
          <span>Css3</span>
        </li>
        <li>
          <DiBootstrap css={{ color: "#533b78" }} />
          <span>Bootstrap</span>
        </li>
        <li>
          <DiJsBadge css={{ color: "#efd81d" }} />
          <span>Javascript</span>
        </li>
        <li>
          <DiReact css={{ color: "#02d3f7" }} />
          <span>React</span>
        </li>
        <li>
          <SiRedux css={{ color: "#7248b6" }} />
          <span>Redux</span>
        </li>
        <li>
          <SiStyledComponents css={{ color: "#f3ab4f" }} />
          <span>Styled Components</span>
        </li>
        <li>
          <SiApollographql css={{ color: "#3d20b4" }} />
          <span>Appolo Graphql</span>
        </li>
        <li>
          <DiNpm css={{ color: "#dc2c35" }} />
          <span>NPM</span>
        </li>
        <li>
          <DiSass css={{ color: "#c66395" }} />
          <span>Sass</span>
        </li>
        <li>
          <DiGithubAlt css={{ color: "#ecc4ab" }} />
          <span>Github</span>
        </li>
      </ul>
    </SkillStyle>
  );
}

export default SkillPage;
