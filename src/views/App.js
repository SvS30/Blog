import React from "react";

import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import DefaultHeader from "../components/Headers/DefaultHeader"
import DefaultFooter from "../components/Footers/DefaultFooter"
import CV from "../assets/CV.pdf"

function App() {
  const [pills, setPills] = React.useState("1");
  const [blogs, setBlogs] = React.useState();

  const apiMedium = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@salimvzqz';
  const fetchApiMedium = async () => {
    const response = await fetch(apiMedium)
    const responseJSON = await response.json()
    setBlogs(responseJSON.items)
  }
  React.useEffect(() => {
    fetchApiMedium();
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <div className="wrapper">
        <DefaultHeader />
        <div className="section">
          <Container>
            <div className="button-container">
              <Button className="btn-round" color="info" size="lg">
                <a href={CV}
                  target="_blank"
                  rel="noreferrer">CV</a>
              </Button>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip515203352"
                size="lg"
              >
                <a href="mailto:salimvzqz@gmail.com">
                  <i className="fa fa-envelope"></i>
                </a>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip515203352">
                Send Mail
              </UncontrolledTooltip>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip340339231"
                size="lg"
              >
                <a
                  href="https://www.linkedin.com/in/salim-vazquez-solis-6565b7170/"
                  target="_blank"
                  rel="noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip340339231">
                Linkedin
              </UncontrolledTooltip>
            </div>
            <h3 className="title">Acerca de mi</h3>
            <h5 className="description">
              Desarrollador de software, interesado en crear tecnología de vanguardia que ayude a resolver problemas que se presentan en nuestro día a días, estando en total disponibilidad de aprender tecnologías/metodologías novedosas, como también adaptarme a las exigencias que conlleva el trabajar en un equipo de desarrolladores.
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#aptitudes-y-habilidades"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <i className="now-ui-icons education_atom"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#blog"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <i className="now-ui-icons education_paper"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
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
                          <p>Diseño, construyo y mantengo páginas web utilizando WordPress hasta desarrollos bajo demanda con Angular y React. También creo backend a medida con Laravel, Django, MySQL, entre otras tecnologías.</p>
                        </Col>
                      </Col>
                      <Col md="6">
                        <Col md="12">
                          <p className="category">Desarrollo Móvil</p>
                          <p>Diseño y creo apps nativas e híbridas para Android (smartphones y tablets), usando Android Studio, Flutter, Ionic.</p>
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
                        <img
                          src="https://img.icons8.com/color/48/000000/mysql-logo.png"
                          alt="MySQL icon" />
                        &nbsp;&nbsp;
                        <img
                          src="https://img.icons8.com/color/48/000000/postgreesql.png"
                          alt="PostgreSQL icon" />
                        &nbsp;&nbsp;
                        <img
                          src="https://img.icons8.com/color/48/000000/mongodb.png"
                          alt="MongoDB icon" />
                        <img
                          src="https://img.icons8.com/fluency/48/000000/docker.png"
                          alt="Docker icon" />
                      </Col>
                    </Row>
                    <Row className="collections">
                      <Col md="12" className="text-center">
                        <p className="category">Frontend</p>
                        <img
                          src="https://img.icons8.com/color/48/000000/react-native.png"
                          alt="React icon" />
                        &nbsp;&nbsp;
                        <img
                          src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-angular-a-typescript-based-open-source-web-application-framework-logo-shadow-tal-revivo.png"
                          alt="Angular icon" />
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <h4 className="title text-center">Blog</h4>
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      {!blogs ? 'Loading...' : blogs.map((blog, index) => {
                        return <React.Fragment><Col md="12" key={index}>
                          <img
                            alt={"Thumb " + blog.title}
                            className="img-raised"
                            src={blog.thumbnail}
                          ></img>
                          <a className="link-blog" href={blog.link}>{blog.title}</a>
                          <br />
                          {blog.categories.map((tag, index) => {
                            return <React.Fragment>
                              <i color="dark-gray"
                                className="now-ui-icons shopping_tag-content"
                                key={index}>{tag}</i>
                            </React.Fragment>
                          })}
                        </Col>
                        </React.Fragment>
                      })}
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default App;