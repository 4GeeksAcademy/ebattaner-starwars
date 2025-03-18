import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router";
import { Col } from "react-bootstrap";
import { useFavorites } from "./Favorites";

const StarshipCarrousel = () => {
  const [planets, setPlanets] = useState([]);
  const { addFavorite, removeFavorite, isFavorited } = useFavorites();

  const fetchPlanets = async () => {
    try {
      const response = await fetch(
        "https://zany-journey-5gxqqpjgxgr52v6g7-3000.app.github.dev/planets",
      );
      const data = await response.json();
      if (Array.isArray(data.content)) {
        setPlanets(data.content);
      } else {
        setPlanets([]);
        console.error("Error: La respuesta no es un array");
      }
    } catch (err) {
      console.error("Error fetching Planets:", err);
      setPlanets([]);
    }
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <Row className="g-3">
      {planets.map((item) => (
        <Col sm={6} md={4} lg={3} className="mb-4" key={item.id}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <NavLink to={`/planets/${item.id}`}>
                <Button variant="primary" className="w-100 mb-2">
                  Ver más
                </Button>
              </NavLink>
              <Button
                variant={isFavorited(item.id, "planets") ? "danger" : "success"}
                className="w-100"
                onClick={() => {
                  isFavorited(item.id, "planets")
                    ? removeFavorite(item.id, "planets")
                    : addFavorite(item.id, item.name, "planets");
                }}
              >
                {isFavorited(item.id, "planets") ? "Unfav" : "Fav"}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default StarshipCarrousel;
