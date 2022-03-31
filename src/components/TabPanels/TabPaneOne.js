import { TabPane, Col, Row } from "reactstrap";

function TabPaneOne() {
  return (
    <TabPane tabId="pills1">
      <h4 className="title text-center">Aptitudes</h4>
      <br />
      <Col className="ml-auto mr-auto" md="10">
        <Row className="collections">
          <Col md="6">
            <Col md="12">
              <p className="category">Adaptarse a nuevos entornos de trabajo</p>
              <p>Durante el desarrollo de mis estudios supe adaptarme a los cambios y nuevas condiciones que se estan presentaban en mi entorno.</p>
            </Col>
          </Col>
          <Col md="6">
            <Col md="12">
              <p className="category">Organización y planificación</p>
              <p>En mi formacion como ingeniero adquiri la capacidad para programar y distribuir las tareas entre el equipo de trabajo, estableciendo objetivos realistas.</p>
            </Col>
          </Col>
        </Row>
        <hr />
        <h4 className="title text-center">Habilidades</h4>
        <br />
        <Row className="collections">
          <Col md="6">
            <Col md="12">
              <p className="category">Desarrollo Web y Backend</p>
              <p>Construyo, mantengo páginas web, como también creo backend a medida con Laravel, Django, MySQL, entre otras tecnologías.</p>
            </Col>
          </Col>
          <Col md="6">
            <Col md="12">
              <p className="category">Desarrollo Móvil</p>
              <p>Diseño y creo apps nativas e híbridas para Android (smartphones y tablets), usando Flutter, Ionic.</p>
            </Col>
          </Col>
        </Row>
        <hr />
        <h4 className="title text-center">Tecnologías</h4>
        <br />
        <Row className="collections">
          <Col md="12" className="text-center">
            <p className="category">Backend</p>
            <img
              src="https://img.icons8.com/fluency/48/000000/laravel.png"
              alt="Laravel icon" />
            &nbsp;&nbsp;
            <img
              src="https://img.icons8.com/color/48/000000/django.png"
              alt="Django icon" />
            &nbsp;&nbsp;
            <img src="https://img.icons8.com/color/48/000000/nodejs.png"
              alt="Django icon" />
            &nbsp;&nbsp;
            <img
              src="https://img.icons8.com/color/48/000000/mysql-logo.png"
              alt="MySQL icon" />
            &nbsp;&nbsp;
            <img
              src="https://img.icons8.com/color/48/000000/mongodb.png"
              alt="MongoDB icon" />
            &nbsp;&nbsp;
            <img
              src="https://img.icons8.com/fluency/48/000000/docker.png"
              alt="Docker icon" />
          </Col>
        </Row>
      </Col>
    </TabPane>
  );
}

export default TabPaneOne;