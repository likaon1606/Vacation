import { Routes, Route, Navigate } from "react-router-dom";
import CP from "../paginas/CP";
import NO from "../paginas/NO";
import NavBar from "../navBar/NavBar";
import Comprar from "../paginas/Comprar";
import Miviaje from "../paginas/Miviaje";

const Router2 = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='cp' element={<CP />} />
        <Route path='no' element={<NO />} />
        <Route path='viaje' element={<Miviaje />} />
        <Route path='destino/:nombre' element={<Comprar />} />
        <Route path='/' element={<Navigate to='cp' />} />
      </Routes>
    </>
  );
};

export default Router2;
