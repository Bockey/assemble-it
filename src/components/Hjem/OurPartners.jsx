import React from "react";
import Nav from "react-bootstrap/Nav";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

function Partners() {
  return (
    <div className="partners">
      <h2>Våre partnere</h2>
      <div className="list">
        <OurPartners />
      </div>
    </div>
  );
}

export default Partners;

function OurPartners(props) {
  const [logos, setLogos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `https://data.assemble-it.no/wp-json/wp/v2/posts`;

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();

            const data = json.map((item) => {
              return {
                id: item.id,
                name: item.title.rendered,
                image: item.content.rendered
                  .replaceAll("<p>", "")
                  .replaceAll("</p>", "")
                  .replaceAll("\n", "")
                  .replaceAll("&#215;", "x"),
                href: item.excerpt.rendered
                  .replace("<p>", "")
                  .replace("</p>\n", ""),
              };
            });
            setLogos(data);
            console.log(url);
            console.log(data);
          } else {
            setError("An error occurred");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [url]
  );

  if (loading) {
    return (
      <div className="spinner">
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="warning" />
      </div>
    );
  }

  if (error) {
    return <div>An error occurred: {error}</div>;
  }

  return (
    <>
      {logos.map((logo) => (
        <Nav.Link
          key={logo.id}
          target="_blank"
          href={logo.href}
          className="partners-logo"
        >
          <img alt="partner logo" src={logo.image} />
        </Nav.Link>
      ))}
    </>
  );
}

// <Nav.Link
//   target="_blank"
//   href="https://www.lindbak.no"
//   className="partners-logo"
// >
//   Lindbak
// </Nav.Link>
// <Nav.Link
//   target="_blank"
//   href="https://www.reinventar.no"
//   className="partners-logo"
// >
//   Reinventar
// </Nav.Link>
// <Nav.Link
//   target="_blank"
//   href="https://www.bseurobib.no"
//   className="partners-logo"
// >
//   BSEurobib
// </Nav.Link>
// <Nav.Link
//   target="_blank"
//   href="https://www.frameryacoustics.com/en/"
//   className="partners-logo"
// >
//   Framery
// </Nav.Link>
// <Nav.Link
//   target="_blank"
//   href="https://hauglandinterior.no"
//   className="partners-logo"
// >
//   Haugland
// </Nav.Link>
// <Nav.Link
//   target="_blank"
//   href="https://www.bmoved.no"
//   className="partners-logo"
// >
//   B:Moved
// </Nav.Link>
// <Nav.Link
//   target="_blank"
//   href="https://awaio.com"
//   className="partners-logo"
// >
//   Awaio
// </Nav.Link>
// <Nav.Link
//   target="_blank"
//   href="https://www.kontorrama.no"
//   className="partners-logo"
// >
//   Kontorama
// </Nav.Link>
// <Nav.Link
//   target="_blank"
//   href="https://holmris-ff.no"
//   className="partners-logo"
// >
//   Holmris Form/Funk
// </Nav.Link>
// <Nav.Link
//   target="_blank"
//   href="https://www.euklides.no"
//   className="partners-logo"
// >
//   Euklides
// </Nav.Link>
// <Nav.Link
//   target="_blank"
//   href="https://flytteeksperten.no/"
//   className="partners-logo"
// >
//   FlytteEksperten AS
// </Nav.Link>
// <Nav.Link
//   target="_blank"
//   href="https://www.kjellmann.no"
//   className="partners-logo"
// >
//   Kjellman
// </Nav.Link>
// <Nav.Link
//   target="_blank"
//   href="https://www.movement.as"
//   className="partners-logo"
// >
//   Movement.
// </Nav.Link>
// <Nav.Link
//   target="_blank"
//   href="https://www.norengros.no"
//   className="partners-logo"
// >
//   NorEngros
// </Nav.Link>
