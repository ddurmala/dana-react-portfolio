import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="header d-flex flex-row justify-content-between align-items-center mb-3 p-4">
            <NavLink to="/">
                <h1 className="text-center mb-3">Dana Castagna</h1>
            </NavLink>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/resume">Resume</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </header>
    )

}

export default Header;

