import './Contact.css';

import Form from './components/form/Form';

function Contact() {
    return(
        <section className="section contact-me" data-section="section4" id={'section4'}>
            <div className="container">
                <div className="section-heading">
                    <h2>Contact Me</h2>
                    <div className="line-dec"></div>
                    <span>Fusce eget nibh nec justo interdum condimentum. Morbi justo ex,
                    efficitur at ante ac, tincidunt maximus ligula. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.</span>
                </div>
                <div className="row">
                    <div className="right-content">
                        <div className="container">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;