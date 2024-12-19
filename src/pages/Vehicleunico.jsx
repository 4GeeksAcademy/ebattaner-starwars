import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const VehicleUnico = () => {
  const { id } = useParams();
  const [vehicleUnico, setVehicleUnico] = useState({});
  const url = "https://www.swapi.tech/api/vehicles";

  const fetchVehicleUnico = () => {
    fetch(`${url}/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setVehicleUnico(data.result))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchVehicleUnico();
  }, [id]);

  if (isEmpty(vehicleUnico)) {
    return <p>Cargando...</p>;
  }

  const { properties } = vehicleUnico;

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

export default VehicleUnico;
