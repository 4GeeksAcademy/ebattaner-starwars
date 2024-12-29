import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router";
import { routeConfig } from "./routing/routerConfig";
import NavbarComponent from "./components/Navbar";

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
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
