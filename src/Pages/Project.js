import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "../components/Card";
import { PROJECT_DATA } from "../utils/globalConst";

const ProjectStyle = styled.div`
  .row {
    align-items: center;
    justify-content: center;
  }
`;

function ProjectPage() {
  return (
    <ProjectStyle>
      <Row>
        {PROJECT_DATA.map((projects) => (
          <Col md={4} xs={12} key={projects.id}>
            <Card {...projects} />
          </Col>
        ))}
      </Row>
    </ProjectStyle>
  );
}

export default ProjectPage;
