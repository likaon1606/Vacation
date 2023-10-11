import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Context from '../contexto/Context';

const NavBar = () => {
  const navegacion = useNavigate();
  const { deslogearse } = useContext(Context);
  const logout = () => {
    deslogearse();
    navegacion('/login', { replace: true });
  };

  return (
    <>
      <nav>
        <div>
          <NavLink className='nav-titulo' to='/cp'>
            Capital y Patagonia
          </NavLink>
          <NavLink className='nav-titulo' to='/no'>
            Norte y Este
          </NavLink>
          <NavLink className='nav-titulo' to='/viaje'>
            Mi Viaje
          </NavLink>
        </div>

        <button className='logout' onClick={logout}>
          Logout
        </button>
      </nav>
    </>
  );
};

export default NavBar;
