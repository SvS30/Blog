import './Contact.css';

import Form from './components/form/Form';

function Contact() {
    return(
        <section className="section contact-me" data-section="section4" id={'section4'}>
            <div className="container">
                <div className="section-heading">
                    <h2>Contáctame</h2>
                    <div className="line-dec"></div>
                    <span>Estoy abierto a cualquier sugerencia o simplemente chatear, completa la información
                        y trataré de responderte lo más pronto posible.
                    </span>
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