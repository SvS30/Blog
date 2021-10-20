// import static files or dependencies
import './About.css';

// import components
import LeftImage from './components/left-image/LeftImage';
import RightImage from './components/right-image/RightImage';

function About() {
    return (
        <section className="section about-me" data-section="section1" id={'section1'}>
            <div className="container">
                <div className="section-heading">
                    <h2>Acerca de mi</h2>
                    <div className="line-dec"></div>
                    <span>Desarrollador de software autodidacta, interesado en crear tecnología
                        capaz de solventar problemáticas del día a día, estando en 
                        total disponibilidad de aprender tecnologías/metodologías nuevas,
                        como también adaptarse a un equipo de desarrollo.</span>
                </div>
                <LeftImage></LeftImage>
                <RightImage></RightImage>
            </div>
        </section>
    );
}

export default About;