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
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                </div>
                <LeftImage></LeftImage>
                <RightImage></RightImage>
            </div>
        </section>
    );
}

export default About;