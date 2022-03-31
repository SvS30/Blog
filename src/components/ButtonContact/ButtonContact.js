import { Button, UncontrolledTooltip } from "reactstrap";

function ButtonContact() {
  return (
    <div className="button-container">
      <Button className="btn-round" color="info" size="lg">
        <a href="https://l.linklyhq.com/l/pUvf"
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
          href="https://www.linkedin.com/in/salim-vazquez-solis"
          target="_blank"
          rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </Button>
      <UncontrolledTooltip delay={0} target="tooltip340339231">
        Linkedin
      </UncontrolledTooltip>
    </div>
  );
}

export default ButtonContact;