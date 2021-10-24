import './Navigator.css';

function Navigator() {
    return (
        <nav className="main-nav" role="navigation">
            <ul className="main-menu">
                <li><a href="#section1">Acerca de Mi</a></li>
                <li><a href="#section2">Aptitudes y Habilidades</a></li>
                <li><a href="https://drive.google.com/file/d/1E92zSO-y81Uz33JiqlIrFC69A4ELx4dd/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer">CV</a></li>
            </ul>
        </nav>
    );
}

export default Navigator;