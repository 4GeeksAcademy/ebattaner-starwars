import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Vehicleunico = () => {
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
  }, []);

  return (
    <>{!isEmpty(vehicleUnico) && <h1>{vehicleUnico.properties.model}</h1>}</>
  );
};

export default Vehicleunico;
