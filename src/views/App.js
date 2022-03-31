import React from "react";
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  Container,
  Row,
  Col,
} from "reactstrap";

import DefaultHeader from "../components/Headers/DefaultHeader";
import DefaultFooter from "../components/Footers/DefaultFooter";
import TabPaneOne from "../components/TabPanels/TabPaneOne";
import TabPaneTwo from "../components/TabPanels/TabPaneTwo";
import ButtonContact from "../components/ButtonContact/ButtonContact";

function App() {

  const [pills, setPills] = React.useState("1");
  const [posts, setPosts] = React.useState();
  const [loading, setLoad] = React.useState(false);
  const apiMedium = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@salimvzqz';

  const fetchApiMedium = async () => {
    const response = await fetch(apiMedium)
    const responseJSON = await response.json()
    if (responseJSON) {
      setPosts(responseJSON.items)
      setLoad(true)
    }
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
            <ButtonContact />
            <h3 className="title">Acerca de mi</h3>
            <h5 className="description">
              Desarrollador de software, interesado en crear tecnología de vanguardia que ayude a resolver problemas que se presentan en nuestro día a día, estando en total disponibilidad de aprender tecnologías/metodologías novedosas, como también adaptarme a las exigencias que conlleva el trabajar en un equipo de desarrolladores.
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
                <TabPaneOne />
                {(!loading || !posts) ? 'Loading...' : TabPaneTwo(posts) }
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