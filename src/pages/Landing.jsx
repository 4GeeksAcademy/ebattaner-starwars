import Starshipcomponent from "../components/Starshipcomponent";
import Vehiclecomponent from "../components/Vehiclecomponent";
import Speciescomponent from "../components/Speciescomponent";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Landing = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Vehiclecomponent className="p5" />
            <Starshipcomponent />
            <Speciescomponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Landing;
