import { useContext, useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router";
import { Col } from "react-bootstrap";

import FavoritesContext from "./Favorites";

const Speciescarrousel = () => {
  const [species, setSpecies] = useState([]);
  const { favorites, addToFavorites, deleteFavorites } =
    useContext(FavoritesContext);

  const fetchSpecies = () => {
    fetch("https://www.swapi.tech/api/species", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setSpecies(data.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchSpecies();
  }, []);

  const isFavorited = (id, type) => {
    return favorites.some((favorite) => {
      return favorite.id === id && favorite.type === type;
    });
  };

  return (
    <>
      {" "}
      <Row gap={2}>
        {species.map((item) => {
          return (
            <>
              <Col sm={6} md={4} lg={3} className="mb-4">
                <Card style={{ height: "7rem" }}>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Button variant="primary" style={{ width: "100%" }}>
                      <NavLink to={`/species/${item.uid}`}>Ver más</NavLink>
                    </Button>
                    <Button
                      onClick={() => {
                        isFavorited(item.uid, "species")
                          ? deleteFavorites(item.uid, "species")
                          : addToFavorites(
                              item.uid,
                              item.properties.title,
                              "species",
                            );
                      }}
                    >
                      {isFavorited(item.uid, "species") ? "Unfav" : "Fav"}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
};

export default Speciescarrousel;
