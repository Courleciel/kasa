import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/àpropos">À propos</Link>
        </nav>
    )
}

export default Header
