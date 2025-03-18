import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router";
import { routeConfig } from "./routing/routerConfig";
import NavbarComponent from "./components/Navbar";
import { LoginRedirect } from "../src/routing/LoginRedirect";
import { RegisterPage } from "../src/pages/RegisterPage";

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/login" element={<LoginRedirect />} />
        <Route path="/register" element={<RegisterPage />} />
        {routeConfig.map((item) => {
          return (
            <>
              <Route path={item.path} element={item.page} />
            </>
          );
        })}
      </Routes>
    </>
  );
}

export default App;
