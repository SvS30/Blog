import './Navigator.css';

function Navigator() {
    return (
        <nav className="main-nav" role="navigation">
            <ul className="main-menu">
                <li><a href="#section1">Acerca de Mi</a></li>
                <li><a href="#section2">Aptitudes y Habilidades</a></li>
            </ul>
        </nav>
    );
}

export default Navigator;