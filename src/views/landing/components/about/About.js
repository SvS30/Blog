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
                    <span>Desarrollador de software, interesado en crear tecnología
                        de vanguardia que ayude a resolver problemas que se presentan
                        en nuestro diario vivir, estando en total disponibilidad de
                        aprender tecnologías/metodologías novedosas, como también 
                        adaptarme a las exigencias que conlleva el trabajar en un equipo
                        de desarrolladores.</span>
                </div>
                <LeftImage></LeftImage>
                <RightImage></RightImage>
            </div>
        </section>
    );
}

export default About;