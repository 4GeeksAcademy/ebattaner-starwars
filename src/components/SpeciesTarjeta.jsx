import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router";
import { Col } from "react-bootstrap";

const SpeciesTarjeta = ({ cardtitle, url }) => {
  return (
    <Col sm={6} md={4} lg={3} className="mb-4">
      <Card style={{ height: "7rem" }}>
        <Card.Body>
          <Card.Title>{cardtitle}</Card.Title>
          <Button variant="primary" style={{ width: "100%" }}>
            <NavLink to={`/species/${url}`}>Ver más</NavLink>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SpeciesTarjeta;
