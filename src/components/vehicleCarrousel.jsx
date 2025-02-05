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
      const response = await fetch(
        "https://solid-palm-tree-wrg77jprg7q53grg6-3000.app.github.dev/vehicles",
      );
      const data = await response.json();
      setVehicles(data || []);
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
        <Col sm={6} md={4} lg={3} className="mb-4" key={item.id}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>{item.model}</Card.Title>
              <NavLink to={`/vehicles/${item.id}`}>
                <Button variant="primary" className="w-100 mb-2">
                  Ver más
                </Button>
              </NavLink>
              <Button
                variant={
                  isFavorited(item.id, "vehicles") ? "danger" : "success"
                }
                className="w-100"
                onClick={() => {
                  isFavorited(item.id, "vehicles")
                    ? removeFavorite(item.id, "vehicles")
                    : addFavorite(item.uid, item.model, "vehicles");
                }}
              >
                {isFavorited(item.id, "vehicles") ? "Unfav" : "Fav"}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default VehicleCarrousel;
