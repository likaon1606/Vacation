import { Routes, Route } from "react-router-dom";
import Login from "../paginas/Login";
import Router2 from "./Router2";
import RutasPublicas from "./RutasPublicas";
import RutasPrivadas from "./RutasPrivadas";

const Router = () => {
  return (
    <>
      <Routes>
        <Route
          path='login'
          element={
            <RutasPublicas>
              <Login />
            </RutasPublicas>
          }
        />
        <Route
          path='/*'
          element={
            <RutasPrivadas>
              <Router2 />
            </RutasPrivadas>
          }
        />
      </Routes>
    </>
  );
};

export default Router;
