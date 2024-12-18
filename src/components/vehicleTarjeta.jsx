import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router";

const Vehicletarjeta = ({ cardtitle, url }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{cardtitle}</Card.Title>
        <Button variant="primary">
          <NavLink to={`/vehicle/${url}`}>Ver más</NavLink>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Vehicletarjeta;
