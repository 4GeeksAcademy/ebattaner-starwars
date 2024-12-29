import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router";
import { Col } from "react-bootstrap";
import { useFavorites } from "./Favorites";

const VehicleCarrousel = () => {
  const [vehicles, setVehicles] = useState([]);
  const { addFavorite, removeFavorite, isFavorited } = useFavorites();

  const fetchVehicles = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/vehicles");
      const data = await response.json();
      setVehicles(data.results || []);
    } catch (err) {
      console.error("Error fetching Vehicles:", err);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  return (
    <Row className="g-3">
      {vehicles.map((item) => (
        <Col sm={6} md={4} lg={3} className="mb-4" key={item.uid}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <NavLink to={`/vehicles/${item.uid}`}>
                <Button variant="primary" className="w-100 mb-2">
                  Ver más
                </Button>
              </NavLink>
              <Button
                variant={
                  isFavorited(item.uid, "vehicles") ? "danger" : "success"
                }
                className="w-100"
                onClick={() => {
                  isFavorited(item.uid, "vehicles")
                    ? removeFavorite(item.uid, "vehicles")
                    : addFavorite(item.uid, item.name, "vehicles");
                }}
              >
                {isFavorited(item.uid, "vehicles") ? "Unfav" : "Fav"}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default VehicleCarrousel;
