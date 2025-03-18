import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const FilmsUnico = () => {
  const { id } = useParams();
  const [FilmsUnico, setFilmsUnico] = useState({});
  const url =
    "https://zany-journey-5gxqqpjgxgr52v6g7-3000.app.github.dev/films";

  const fetchFilmsUnico = () => {
    fetch(`${url}/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log("Datos recibidos:", data);
        setFilmsUnico(data.content); // Acceder a la propiedad 'content'
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchFilmsUnico();
  }, [id]);

  if (isEmpty(FilmsUnico)) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <Button variant="warning">
        <NavLink to={`/`}>Go back</NavLink>
      </Button>
      <h1>{FilmsUnico?.name || "Modelo no disponible"}</h1>
      <ListGroup>
        <ListGroup.Item>
          <b>Director:</b> {FilmsUnico?.director || "Director no disponible"}
        </ListGroup.Item>
        <ListGroup.Item>
          <b>Episode:</b> {FilmsUnico?.episode || "Episodio no disponible"}
        </ListGroup.Item>
        <ListGroup.Item>
          <b>Opening Crawl:</b>{" "}
          {FilmsUnico?.opening_crawl || "Texto de apertura no disponible"}
        </ListGroup.Item>
        <ListGroup.Item>
          <b>Producer:</b> {FilmsUnico?.producer || "Productor no disponible"}
        </ListGroup.Item>
        <ListGroup.Item>
          <b>Release Date:</b>{" "}
          {FilmsUnico?.release_date || "Fecha de lanzamiento no disponible"}
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default FilmsUnico;
