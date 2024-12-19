import Landing from "../pages/Landing";
import Vehicleunico from "../pages/Vehicleunico";
import Starshipunico from "../pages/Starshipunico";

export const routeConfig = [
  {
    name: "Root",
    path: "/",
    page: <Landing />,
  },
  {
    name: "Vehicleunico",
    path: "/vehicle/:id",
    page: <Vehicleunico />,
  },
  {
    name: "Starshipunico",
    path: "/starship/:id",
    page: <Starshipunico />,
  },
];
