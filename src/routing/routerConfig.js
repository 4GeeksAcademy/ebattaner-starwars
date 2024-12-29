import Landing from "../pages/Landing";
import Vehicleunico from "../pages/Vehicleunico";
import Starshipunico from "../pages/Starshipunico";
import SpeciesUnico from "../pages/Speciesunico";

export const routeConfig = [
  {
    name: "Root",
    path: "/",
    page: <Landing />,
  },
  {
    name: "Vehicleunico",
    path: "/vehicles/:id",
    page: <Vehicleunico />,
  },
  {
    name: "Starshipunico",
    path: "/starships/:id",
    page: <Starshipunico />,
  },
  {
    name: "Speciesunico",
    path: "/species/:id",
    page: <SpeciesUnico />,
  },
];
