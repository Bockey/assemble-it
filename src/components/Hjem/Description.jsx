import React from "react";
import Nav from "react-bootstrap/Nav";

function Description(props) {
  return (
    <div className="description">
      <div className="description-decoration"></div>
      <div className="description-text1">
        <h2>Assemble-it er et montasjefirma som ble etablert i 2021...</h2>
        <p>
          Vi er per nå 22 medarbeidere og er i stadig vekst. Vi har mange års
          erfaring innen prosjektledelse, montasje og spesialtilpasninger i både
          store og små prosjekter.
        </p>
      </div>
      <div className="description-text2">
        <p>
          Vi har egne biler og riktig utstyr for deres behov. Vi tilbyr
          lagertjenester i vårt 900 kvm lager på Furuset i Oslo.
        </p>
        <Nav.Link href="/om-oss">Om oss</Nav.Link>
      </div>
    </div>
  );
}

export default Description;
