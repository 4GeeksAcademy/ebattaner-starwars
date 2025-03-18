import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const PeopleUnico = () => {
  const { id } = useParams();
  const [peopleUnico, setPeopleUnico] = useState({});
  const url =
    "https://zany-journey-5gxqqpjgxgr52v6g7-3000.app.github.dev/people";

  const fetchPeopleUnico = () => {
    fetch(`${url}/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log("Datos recibidos:", data);
        setPeopleUnico(data.content); // Acceder a la propiedad 'content'
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchPeopleUnico();
  }, [id]);

  if (isEmpty(peopleUnico)) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <Button variant="warning">
        <NavLink to={`/`}>Go back</NavLink>
      </Button>
      <h1>{peopleUnico?.name || "Nombre no disponible"}</h1>
      <ListGroup>
        <ListGroup.Item>
          <b>Color de cabello:</b>{" "}
          {peopleUnico?.hair_color || "Color de cabello no disponible"}
        </ListGroup.Item>
        <ListGroup.Item>
          <b>Altura:</b> {peopleUnico?.height || "Altura no disponible"}
        </ListGroup.Item>
        <ListGroup.Item>
          <b>Mundo natal:</b>{" "}
          {peopleUnico?.homeworld || "Mundo natal no disponible"}
        </ListGroup.Item>
        <ListGroup.Item>
          <b>Color de piel:</b>{" "}
          {peopleUnico?.skin_color || "Color de piel no disponible"}
        </ListGroup.Item>
        <ListGroup.Item>
          <b>Especie:</b> {peopleUnico?.species || "Especie no disponible"}
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default PeopleUnico;
