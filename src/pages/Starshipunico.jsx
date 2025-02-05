import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const Starshipunico = () => {
  const { id } = useParams();
  const [starshipUnico, setStarshipUnico] = useState({});
  const url =
    "https://solid-palm-tree-wrg77jprg7q53grg6-3000.app.github.dev/starships";

  const fetchStarshipUnico = () => {
    fetch(`${url}/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setStarshipUnico(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchStarshipUnico();
  }, [id]);

  if (isEmpty(starshipUnico)) {
    return <p>Cargando...</p>;
  }

  const { properties } = starshipUnico;

  return (
    <>
      <Button variant="warning">
        <NavLink to={`/`}>Go back</NavLink>
      </Button>
      <h1>{starshipUnico?.model || "Modelo no disponible"}</h1>
      <ListGroup>
        <ListGroup.Item>
          <b>Clase:</b> {starshipUnico?.vehicle_class || "Clase no disponible"}
        </ListGroup.Item>
        {starshipUnico &&
          Object.entries(starshipUnico).map(([key, value]) => (
            <ListGroup.Item key={key}>
              <b>{key}:</b> {value}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </>
  );
};

export default Starshipunico;
