import Landing from "../pages/landing";
import Vehicleunico from "../pages/Vehicleunico";

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
];
