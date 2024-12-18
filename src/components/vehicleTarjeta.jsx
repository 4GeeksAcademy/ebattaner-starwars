import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const vehicleTarjeta = ({ cardtitle, cardtext }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{cardtitle}</Card.Title>
        <Card.Text>{cardtext}</Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  );
};

export default vehicleTarjeta;
