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

function App() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
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
                CV
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
              Desarrollador de software, interesado en crear tecnología de vanguardia que ayude a resolver problemas que se presentan en nuestro diario vivir, estando en total disponibilidad de aprender tecnologías/metodologías novedosas, como también adaptarme a las exigencias que conlleva el trabajar en un equipo de desarrolladores.
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <i className="now-ui-icons design_image"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <i className="now-ui-icons location_world"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        <i className="now-ui-icons sport_user-run"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <h4 className="title text-center">Aptitudes y Habilidades</h4>
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg1.jpg").default}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg3.jpg").default}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg8.jpg").default}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg7.jpg").default}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <h4 className="title text-center">Portafolio</h4>
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg6.jpg").default}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg11.jpg").default}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg7.jpg").default}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg8.jpg").default}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                  <h4 className="title text-center">Blog</h4>
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg3.jpg").default}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg8.jpg").default}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg7.jpg").default}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg6.jpg").default}
                        ></img>
                      </Col>
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