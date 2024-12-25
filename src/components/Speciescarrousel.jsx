import SpeciesTarjeta from "./SpeciesTarjeta";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";

const Speciescarrousel = () => {
  const [species, setSpecies] = useState([]);

  const fetchSpecies = () => {
    fetch("https://www.swapi.tech/api/species", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setSpecies(data.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchSpecies();
  }, []);

  return (
    <>
      {" "}
      <Row gap={2}>
        {species.map((item) => {
          return (
            <SpeciesTarjeta
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

export default Speciescarrousel;
