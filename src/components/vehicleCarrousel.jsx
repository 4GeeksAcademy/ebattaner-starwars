import Vehicletarjeta from "./vehicleTarjeta";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";

const Vehiclecarrousel = () => {
  const [vehicles, setVehicles] = useState([]);

  const fetchVehicles = () => {
    fetch("https://www.swapi.tech/api/vehicles", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setVehicles(data.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  return (
    <>
      {" "}
      <Row gap={2}>
        {vehicles.map((item) => {
          return (
            <Vehicletarjeta
              cardtitle={item.name}
              url={item.uid}
              key={item.uid}
            />
          );
        })}
      </Row>
    </>
  );
};

export default Vehiclecarrousel;
