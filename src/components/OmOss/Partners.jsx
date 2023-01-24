import React from "react";
import Nav from "react-bootstrap/Nav";

function Partners() {
  return (
    <div className="partners">
      <h2>Våre partnere</h2>
      <div className="list">
        <Nav.Link
          target="_blank"
          href="https://www.lindbak.no"
          className="partners-logo"
        >
          Lindbak
        </Nav.Link>
        <Nav.Link
          target="_blank"
          href="https://www.reinventar.no"
          className="partners-logo"
        >
          Reinventar
        </Nav.Link>
        <Nav.Link
          target="_blank"
          href="https://www.bseurobib.no"
          className="partners-logo"
        >
          BSEurobib
        </Nav.Link>
        <Nav.Link
          target="_blank"
          href="https://www.frameryacoustics.com/en/"
          className="partners-logo"
        >
          Framery
        </Nav.Link>
        <Nav.Link
          target="_blank"
          href="https://hauglandinterior.no"
          className="partners-logo"
        >
          Haugland
        </Nav.Link>
        <Nav.Link
          target="_blank"
          href="https://www.bmoved.no"
          className="partners-logo"
        >
          B:Moved
        </Nav.Link>
        <Nav.Link
          target="_blank"
          href="https://awaio.com"
          className="partners-logo"
        >
          Awaio
        </Nav.Link>
        <Nav.Link
          target="_blank"
          href="https://www.kontorrama.no"
          className="partners-logo"
        >
          Kontorama
        </Nav.Link>
        <Nav.Link
          target="_blank"
          href="https://holmris-ff.no"
          className="partners-logo"
        >
          Holmris Form/Funk
        </Nav.Link>
        <Nav.Link
          target="_blank"
          href="https://www.euklides.no"
          className="partners-logo"
        >
          Euklides
        </Nav.Link>
        <Nav.Link
          target="_blank"
          href="https://flytteeksperten.no/"
          className="partners-logo"
        >
          FlytteEksperten AS
        </Nav.Link>
        <Nav.Link
          target="_blank"
          href="https://www.kjellmann.no"
          className="partners-logo"
        >
          Kjellman
        </Nav.Link>
        <Nav.Link
          target="_blank"
          href="https://www.movement.as"
          className="partners-logo"
        >
          Movement.
        </Nav.Link>
        <Nav.Link
          target="_blank"
          href="https://www.norengros.no"
          className="partners-logo"
        >
          NorEngros
        </Nav.Link>
      </div>
    </div>
  );
}

export default Partners;
