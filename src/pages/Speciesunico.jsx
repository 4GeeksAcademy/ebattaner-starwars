import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const SpeciesUnico = () => {
  const { id } = useParams();
  const [speciesUnico, setSpeciesUnico] = useState({});
  const url =
    "https://solid-palm-tree-wrg77jprg7q53grg6-3000.app.github.dev/species";

  const fetchSpeciesUnico = () => {
    fetch(`${url}/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setSpeciesUnico(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchSpeciesUnico();
  }, [id]);

  if (isEmpty(speciesUnico)) {
    return <p>Cargando...</p>;
  }

  const { properties } = speciesUnico;

  return (
    <>
      <Button variant="warning">
        <NavLink to={`/`}>Go back</NavLink>
      </Button>
      <h1>{speciesUnico?.name || "Modelo no disponible"}</h1>
      <ListGroup>
        <ListGroup.Item>
          <b>Clase:</b> {speciesUnico?.classification || "Clase no disponible"}
        </ListGroup.Item>
        {speciesUnico &&
          Object.entries(speciesUnico).map(([key, value]) => (
            <ListGroup.Item key={key}>
              <b>{key}:</b> {value}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </>
  );
};

export default SpeciesUnico;
