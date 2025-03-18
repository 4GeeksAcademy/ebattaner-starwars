import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const PlanetUnico = () => {
  const { id } = useParams();
  const [planetUnico, setPlanetUnico] = useState({});
  const url =
    "https://zany-journey-5gxqqpjgxgr52v6g7-3000.app.github.dev/planets";

  const fetchPlanetUnico = () => {
    fetch(`${url}/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log("Datos recibidos:", data);
        setPlanetUnico(data.content); // Acceder a la propiedad 'content'
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchPlanetUnico();
  }, [id]);

  if (isEmpty(planetUnico)) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <Button variant="warning">
        <NavLink to={`/`}>Go back</NavLink>
      </Button>
      <h1>{planetUnico?.name || "Nombre no disponible"}</h1>
      <ListGroup>
        <ListGroup.Item>
          <b>Clima:</b> {planetUnico?.climate || "Clima no disponible"}
        </ListGroup.Item>
        <ListGroup.Item>
          <b>Diámetro:</b> {planetUnico?.diameter || "Diámetro no disponible"}
        </ListGroup.Item>
        <ListGroup.Item>
          <b>Gravedad:</b> {planetUnico?.gravity || "Gravedad no disponible"}
        </ListGroup.Item>
        <ListGroup.Item>
          <b>Población:</b>{" "}
          {planetUnico?.population || "Población no disponible"}
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default PlanetUnico;
