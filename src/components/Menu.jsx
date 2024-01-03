import {NavLink, Outlet} from 'react-router-dom'

const setActive = ({isActive}) => isActive? 'link active_link':'link';

function Menu() {
  return ( 
            <>
                <nav className='links'>
                    <NavLink className={setActive} to="/">ГЛАВНАЯ</NavLink>
                    <NavLink className={setActive} to="/drift">ДРИФТ-ТАКСИ</NavLink>                   
                    <NavLink className={setActive} to="/timeattack">TIME ATTACK</NavLink>   
                    <NavLink className={setActive} to="/cart">FORZA CARTING</NavLink>            
                </nav>
                <Outlet/> 
            </>
  );
}

export default Menu
