import Vehicletarjeta from "./vehicleTarjeta";
import { useEffect, useState } from "react";

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
      {vehicles.map((item) => {
        return (
          <Vehicletarjeta cardtitle={item.name} url={item.uid} key={item.uid} />
        );
      })}
    </>
  );
};

export default Vehiclecarrousel;
