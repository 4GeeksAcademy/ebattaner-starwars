import Landing from "../pages/Landing";
import Peopleunico from "../pages/Vehicleunico";
import Planetunico from "../pages/Starshipunico";
import FilmsUnico from "../pages/Speciesunico";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const routeConfig = [
  {
    name: "Root",
    path: "/",
    page: <Landing />,
  },
  {
    name: "Vehicleunico",
    path: "/people/:id",
    page: <Peopleunico />,
  },
  {
    name: "Planetunico",
    path: "/planets/:id",
    page: <Planetunico />,
  },
  {
    name: "Speciesunico",
    path: "/films/:id",
    page: <FilmsUnico />,
  },
  {
    name: "Login",
    path: "/login",
    page: <LoginPage />,
  },
  {
    name: "Register",
    path: "/register",
    page: <RegisterPage />,
  },
];
