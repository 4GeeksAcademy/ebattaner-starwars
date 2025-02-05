import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const VehicleUnico = () => {
  const { id } = useParams();
  const [vehicleUnico, setVehicleUnico] = useState({});
  const url =
    "https://solid-palm-tree-wrg77jprg7q53grg6-3000.app.github.dev/vehicles";

  const fetchVehicleUnico = () => {
    fetch(`${url}/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setVehicleUnico(data))
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
      <h1>{vehicleUnico?.model || "Modelo no disponible"}</h1>
      <ListGroup>
        <ListGroup.Item>
          <b>Clase:</b> {vehicleUnico?.vehicle_class || "Clase no disponible"}
        </ListGroup.Item>
        {vehicleUnico &&
          Object.entries(vehicleUnico).map(([key, value]) => (
            <ListGroup.Item key={key}>
              <b>{key}:</b> {value}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </>
  );
};

export default VehicleUnico;
