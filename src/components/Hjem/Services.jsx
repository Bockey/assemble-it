import React from "react";

function Services(props) {
  return (
    <div className="services">
      <h2>
        <span>VÅRE</span>
        <span>TJENESTER</span>
      </h2>
      <div className="services-list">
        <div className="first">
          <h3>Montasje og spesialinnredning</h3>
          <p>
            Vi tilbyr montering av løst og fast inventar utført av medarbeidere
            med mange års erfaring. Ta kontakt for forespørsel eller befaring i
            dag.
          </p>
        </div>
        <div className="second">
          <h3>Flytt og logistikk</h3>
          <p>
            Skal din bedrift skifte lokale? Vi hjelper deg i alle ledd med
            prosjektering, flytting og montering.
          </p>
        </div>
        <div className="third">
          <h3>Prosjektledelse</h3>
          <p>
            Vi tilbyr prosjektledelse innen flytt, avvikling av lokaler og
            montasje av både løst og fast inventar. Ta kontakt for forespørsel
            eller befaring i dag.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
