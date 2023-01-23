import React from "react";
import Nav from "react-bootstrap/Nav";

function Services(props) {
  return (
    <div className="services">
      <h2>
        {/* <span>DISSE</span>
        <span>ER</span> */}
        <span>VÅRE</span>
        <span>TJENESTER</span>
      </h2>
      <div className="services-list">
        <div className="first">
          <h3>Montasje og spesialinnredning</h3>
          <p>
            Vi tilbyr montasje av løst og fast inventar utført av medarbeidere
            med mange års erfaring for en enkel og ryddig leveranse. Tag kontakt
            for forespørsel eller befaring allerede i dag.
          </p>
        </div>
        <div className="second">
          <h3>Flytt og logistikk</h3>
          <p>
            Skal bedriften din flytte? Vi står vid din sida från projektering
            till flytt, till inflytt og montasje i nye lokaler.
          </p>
        </div>
        <div className="third">
          <h3>Prosjektledelse</h3>
          <p>
            Enten dere er i behov av prosjektledelse ved flytting eller
            avvikling av gamle lokaler eller montasje av løst eller fast
            inventar i nye lokaler bistår vi dere mer enn gjerne. Tag kontakt
            for forespørsel eller befaring allerede i dag.
          </p>
        </div>
        {/* <div className="fourth">
          <h3>Fourth</h3>
          <p>
            Vi har mange års erfaring og kompetanse innen prosjektledelse,
            montasje og spesialtilpasninger.
          </p>
        </div>
        <div className="fifth">
          <h3>Fifth</h3>
          <p>
            Vi har mange års erfaring og kompetanse innen prosjektledelse,
            montasje og spesialtilpasninger.
          </p>
        </div> */}
        {/* <div className="other">
          <h3>Other</h3>
          <p>And many secondary services.</p>
          <Nav.Link href="/tjenester">See more...</Nav.Link>
        </div> */}
      </div>
    </div>
  );
}

export default Services;
