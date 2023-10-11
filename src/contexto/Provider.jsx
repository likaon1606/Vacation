import { useReducer, useState } from 'react';
import Context from './Context';
import miReducer from './miReducer';
import types from './types';
import miReducer2 from './miReducer2';

const init = () => {
  const user = localStorage.getItem('valor');
  return {
    logeado: !!user,
    usuario: user,
  };
};

const valorInicial = [];

const Provider = ({ children }) => {
  const [autentificacion, dispatch] = useReducer(miReducer, {}, init);
  const [contratacion, dispatch2] = useReducer(miReducer2, valorInicial);
  const [referencia, setReferencia] = useState('');
  const [sumaTotal, setSumaTotal] = useState(0);

  const logearse = (user = '') => {
    const action = {
      type: types.login,
      payload: user,
    };
    localStorage.setItem('valor', user);
    dispatch(action);
  };

  const deslogearse = () => {
    const action = {
      type: types.logout,
      payload: null,
    };
    localStorage.removeItem('valor');
    dispatch(action);
  };

  return (
    <Context.Provider
      value={{
        contratacion,
        dispatch2,
        ...autentificacion,
        logearse,
        deslogearse,
        referencia,
        setReferencia,
        sumaTotal,
        setSumaTotal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
