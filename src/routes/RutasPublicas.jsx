import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Context from "../contexto/Context";

const RutasPublicas = ({ children }) => {
  const { logeado } = useContext(Context);

  return !logeado ? children : <Navigate to='/' />;
};

export default RutasPublicas;
