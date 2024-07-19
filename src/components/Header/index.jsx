import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png';

function Header() {
    return (
        <nav>
            <img src={logo} alt="Logo" className="logo" />
            <div className="nav-links">
              <Link to="/">Accueil</Link>
              <Link to="/apropos">À propos</Link>
            </div>
        </nav>
    )
}

export default Header
