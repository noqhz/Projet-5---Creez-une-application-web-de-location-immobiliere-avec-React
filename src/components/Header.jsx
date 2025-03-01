import { NavLink } from 'react-router-dom';
import logo from '../assets/logo_kasa_desktop.png';
import './Header.scss';
 
function Header() {
    return (
        <header>
            <img src={logo} alt="logo Kasa rouge" />
            <nav>
                <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Accueil</NavLink>
                <NavLink to="/apropos" className={({ isActive }) => isActive ? "active-link" : ""}>A Propos</NavLink>
            </nav>
        </header>
    )
}

export default Header;