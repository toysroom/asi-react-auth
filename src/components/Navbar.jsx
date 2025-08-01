import PropTypes from 'prop-types';
import { useThemeContext } from "../contexts/ThemeContext";
import Language from './Language';

function Navbar( {user, onLogout} ) {

    const { theme, switchTheme } = useThemeContext();

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={ theme }>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>

                <Language />

                Ciao { user.username }, <button onClick={onLogout}>Esci</button>

                <button 
                    className="btn" 
                    style={ {color: (theme === 'light') ? 'black' : 'white' } }
                    onClick={switchTheme}>
                    { theme === 'light' ? 'Dark theme' : 'Light theme'}
                </button>

                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    user: PropTypes.object,
    onLogout: PropTypes.func,
}

export default Navbar