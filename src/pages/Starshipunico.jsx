import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const Starshipunico = () => {
  const { id } = useParams();
  const [starshipUnico, setStarshipUnico] = useState({});
  const url = "https://www.swapi.tech/api/starships";

  const fetchStarshipUnico = () => {
    fetch(`${url}/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setStarshipUnico(data.result))
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
      <h1>{properties?.model || "Modelo no disponible"}</h1>
      <ListGroup>
        <ListGroup.Item>
          <b>Clase:</b> {properties?.vehicle_class || "Clase no disponible"}
        </ListGroup.Item>
        {properties &&
          Object.entries(properties).map(([key, value]) => (
            <ListGroup.Item key={key}>
              <b>{key}:</b> {value}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </>
  );
};

export default Starshipunico;
