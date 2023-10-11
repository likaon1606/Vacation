import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../contexto/Context';

const Destino = ({ nombre, imagen, situacion }) => {
  const ruta = `/images/${imagen}`;
  const { contratacion } = useContext(Context);
  const encontrado = contratacion.find((objeto) => objeto.sitio === nombre);

  return (
    <>
      <div className='destino'>
        <div className='nombre'>{nombre}</div>
        <div className='situacion'>{situacion}</div>
        <img src={ruta} alt='' />
        <div className='flex'>
          <Link to={`/destino/${nombre}`}>Más Info</Link>
          {encontrado && <div className='circulo'></div>}
        </div>
      </div>
    </>
  );
};

export default Destino;
