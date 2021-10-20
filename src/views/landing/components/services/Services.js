// Import static files or dependencies
import { Component } from 'react';
import './Services.css';

// import components
import ServiceItem from './components/service-item/ServiceItem';

class Services extends Component {
    state = {
        cardOne: ["first-service-icon", "Where does it come from?", `Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.`],
        cardTwo: ["second-service-icon", "Why do we use it?", `It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.`],
        cardThree: ["third-service-icon", "Where can I get some?", `There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form.`],
        cardFour: ["fourth-service-icon", "The standard Lorem Ipsum", `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.`]
    };

    render() {
        return (
            <section className="section my-services" data-section="section2" id={'section2'}>
                    <div className="container">
                        <div className="section-heading">
                            <h2>Aptitudes y Habilidades</h2>
                            <div className="line-dec"></div>
                            <span>Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled
                                it to make a type specimen book.</span>
                        </div>
                    <div className="row">
                        <ServiceItem dataFromParent = {this.state.cardOne} />
                        <ServiceItem dataFromParent = {this.state.cardTwo} />
                        <ServiceItem dataFromParent = {this.state.cardThree} />
                        <ServiceItem dataFromParent = {this.state.cardFour} />
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;