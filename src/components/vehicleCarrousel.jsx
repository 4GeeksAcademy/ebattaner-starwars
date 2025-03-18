import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router";
import { Col } from "react-bootstrap";
import { useFavorites } from "./Favorites";

const PeopleCarrousel = () => {
  const [people, setPeople] = useState([]);
  const { addFavorite, removeFavorite, isFavorited } = useFavorites();

  const fetchPeople = async () => {
    try {
      const response = await fetch(
        "https://zany-journey-5gxqqpjgxgr52v6g7-3000.app.github.dev/people",
      );
      const data = await response.json();
      if (Array.isArray(data.content)) {
        setPeople(data.content);
      } else {
        setPeople([]);
        console.error("Error: La respuesta no es un array");
      }
    } catch (err) {
      console.error("Error fetching people:", err);
      setPeople([]);
    }
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <Row className="g-3">
      {people.map((item) => (
        <Col sm={6} md={4} lg={3} className="mb-4" key={item.id}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <NavLink to={`/people/${item.id}`}>
                <Button variant="primary" className="w-100 mb-2">
                  Ver más
                </Button>
              </NavLink>
              <Button
                variant={isFavorited(item.id, "people") ? "danger" : "success"}
                className="w-100"
                onClick={() => {
                  isFavorited(item.id, "people")
                    ? removeFavorite(item.id, "people")
                    : addFavorite(item.id, item.name, "people");
                }}
              >
                {isFavorited(item.id, "people") ? "Unfav" : "Fav"}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default PeopleCarrousel;
