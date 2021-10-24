// Import static files or dependencies
import { Component } from 'react';
import './Services.css';

// import components
import ServiceItem from './components/service-item/ServiceItem';

class Services extends Component {
    state = {
        cardOne: ["first-service-icon", "Capacidad de análisis e investigación", `Como desarrollador de software es de suma importancia mantenerse actualizado
        y a la vanguardia, por lo que he estado puliendo el ser autodidacta, y poner la teoría en práctica.`],
        cardTwo: ["second-service-icon", "Capacidad para tomar decisiones y resolver problemas", `Al ser los problemas inevitables en el día a día, he conseguido
        mejorar el identificar el origen de la problemática, analizar las posibles soluciones e implementar la mejor solución.`],
        cardThree: ["third-service-icon", "Capacidad de adaptarse a nuevos entornos de trabajo", `Durante el desarrollo de mis estudios universitarios
        desarrollé la suficiente flexibilidad a los cambios que ocurran en mi entorno y saber adaptarme con facilidad a la nuevas realidades que se estan presentando.`],
        cardFour: ["fourth-service-icon", "Capacidad de organización y planificación", `En mi formacion como ingeniero adquiri la capacidad para desarrollar
        la aptitud mas adecuada para programar y distribuir las tareas entre el equipo de trabajo, estableciendo objetivos realistas.`]
    };

    render() {
        return (
            <section className="section my-services" data-section="section2" id={'section2'}>
                    <div className="container">
                        <div className="section-heading">
                            <h2>Aptitudes y Habilidades</h2>
                            <div className="line-dec"></div>
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