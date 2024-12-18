import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router";
import { routeConfig } from "./routing/routerConfig";

function App() {
  return (
    <Routes>
      {routeConfig.map((item) => {
        return (
          <>
            <Route path={item.path} element={item.page} />
          </>
        );
      })}
    </Routes>
  );
}

export default App;
