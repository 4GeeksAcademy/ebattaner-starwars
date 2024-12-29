import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router";
import { Col } from "react-bootstrap";
import { useFavorites } from "./Favorites";

const StarshipCarrousel = () => {
  const [starships, setStarships] = useState([]);
  const { addFavorite, removeFavorite, isFavorited } = useFavorites();

  const fetchStarships = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/starships");
      const data = await response.json();
      setStarships(data.results || []);
    } catch (err) {
      console.error("Error fetching Starships:", err);
    }
  };

  useEffect(() => {
    fetchStarships();
  }, []);

  return (
    <Row className="g-3">
      {starships.map((item) => (
        <Col sm={6} md={4} lg={3} className="mb-4" key={item.uid}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <NavLink to={`/starships/${item.uid}`}>
                <Button variant="primary" className="w-100 mb-2">
                  Ver más
                </Button>
              </NavLink>
              <Button
                variant={
                  isFavorited(item.uid, "starships") ? "danger" : "success"
                }
                className="w-100"
                onClick={() => {
                  isFavorited(item.uid, "starships")
                    ? removeFavorite(item.uid, "starships")
                    : addFavorite(item.uid, item.name, "starships");
                }}
              >
                {isFavorited(item.uid, "starships") ? "Unfav" : "Fav"}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default StarshipCarrousel;
