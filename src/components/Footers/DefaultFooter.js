import React from "react";

import { Container } from "reactstrap";

function DefaultFooter() {
  return (
    <React.Fragment>
      <footer className="footer" data-background-color="black">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="https://github.com/SvS30/Own-Blog"
                  target="_blank"
                  rel="noreferrer">
                  Código de esta página.
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/SvS30"
                  target="_blank"
                  rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://gitlab.com/SvS21"
                  target="_blank"
                  rel="noreferrer">
                  <i className="fab fa-gitlab"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/salim_vazquez"
                  target="_blank"
                  rel="noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/salimvzqz/"
                  target="_blank"
                  rel="noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed by{" "}
            <a
              href="https://www.invisionapp.com?ref=nukr-default-footer"
              target="_blank"
              rel="noreferrer"
            >
              Invision
            </a>
            . Coded by{" "}
            <a
              href="https://www.creative-tim.com?ref=nukr-default-footer"
              target="_blank"
              rel="noreferrer"
            >
              Creative Tim
            </a>
            .
          </div>
        </Container>
      </footer>
    </React.Fragment>
  );
}

export default DefaultFooter;