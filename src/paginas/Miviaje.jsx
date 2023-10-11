import { useContext } from 'react';
import Context from '../contexto/Context';
import types from '../contexto/types';
import { Link } from 'react-router-dom';

const Miviaje = () => {
  const { contratacion, dispatch2, referencia, sumaTotal, setSumaTotal } =
    useContext(Context);

  return (
    <>
      <section className='ruta'>
        {contratacion.length < 1 && (
          <div className='aviso'>
            <h3>Lugares a visitar: </h3>
            <p>
              Todavía no haz contratado ninguna actividad. <br />
              Haz clic en {<Link to={`/cp`}>Capital y Patagonia</Link>} o{' '}
              {<Link to={`/no`}>Norte y Este</Link>} para ver nuestras ofertas.
            </p>
          </div>
        )}
        {contratacion.map((mapa) => (
          <div key={mapa.sitio}>
            <button
              className='boton anularRuta'
              onClick={() => {
                setSumaTotal(sumaTotal - mapa.precio);
                dispatch2({
                  type: types.anular,
                  payload: {
                    nombre: mapa.sitio,
                  },
                });
              }}
            >
              Anular
            </button>
            {mapa.sitio} (${mapa.precio})
          </div>
        ))}
        <h3>Total a pagar: $ {sumaTotal}</h3>
        <h3>Referencia: {referencia}</h3>
      </section>
    </>
  );
};

export default Miviaje;
