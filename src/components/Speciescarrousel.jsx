import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router";
import { Col } from "react-bootstrap";
import { useFavorites } from "./Favorites";

const SpeciesCarrousel = () => {
  const [species, setSpecies] = useState([]);
  const { addFavorite, removeFavorite, isFavorited } = useFavorites();

  const fetchSpecies = async () => {
    try {
      const response = await fetch(
        "https://solid-palm-tree-wrg77jprg7q53grg6-3000.app.github.dev/species",
      );
      const data = await response.json();
      setSpecies(data || []);
    } catch (err) {
      console.error("Error fetching species:", err);
    }
  };

  useEffect(() => {
    fetchSpecies();
  }, []);

  return (
    <Row className="g-3">
      {species.map((item) => (
        <Col sm={6} md={4} lg={3} className="mb-4" key={item.id}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <NavLink to={`/species/${item.id}`}>
                <Button variant="primary" className="w-100 mb-2">
                  Ver más
                </Button>
              </NavLink>
              <Button
                variant={isFavorited(item.id, "species") ? "danger" : "success"}
                className="w-100"
                onClick={() => {
                  isFavorited(item.id, "species")
                    ? removeFavorite(item.id, "species")
                    : addFavorite(item.id, item.name, "species");
                }}
              >
                {isFavorited(item.id, "species") ? "Unfav" : "Fav"}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default SpeciesCarrousel;
