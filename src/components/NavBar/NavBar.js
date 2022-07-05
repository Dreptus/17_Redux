import style from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
     return (
          <div className={style.navBar}>
               <div className={style.container}>
                    <div className={style.iconLeft}>
                         <span><Link to="/"><span className={`${style.icon} fa fa-tasks`} /></Link></span>
                    </div>
                    <div className={style.navigation}>
                         <ul className={style.ulNav}>
                              <li><NavLink className={({ isActive }) => isActive ? style.linkActive : undefined} to="/">Home</NavLink></li>
                              <li><NavLink className={({ isActive }) => isActive ? style.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
                              <li><NavLink className={({ isActive }) => isActive ? style.linkActive : undefined} to="/about">About</NavLink></li>
                         </ul>
                    </div>
               </div>
     </div>
     )


}

export default NavBar;