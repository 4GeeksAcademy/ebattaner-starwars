import Starshiptarjeta from "./Starshiptarjeta";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";

const Starshipcarrousel = () => {
  const [starship, setStarship] = useState([]);

  const fetchStarship = () => {
    fetch("https://www.swapi.tech/api/starships", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setStarship(data.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchStarship();
  }, []);

  return (
    <>
      {" "}
      <Row gap={2}>
        {starship.map((item) => {
          return (
            <Starshiptarjeta
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

export default Starshipcarrousel;
