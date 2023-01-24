import Nav from "react-bootstrap/Nav";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <div className="footer-logo-img"></div>
          <div className="signature">© Assemble It 2023</div>
        </div>
        <div className="footer-links">
          <h3>Links</h3>
          <Nav.Link href="/tjenester">Tjenester</Nav.Link>
          <Nav.Link href="/om-oss">Om Oss</Nav.Link>
          <Nav.Link href="/kontakt">Kontakt</Nav.Link>
        </div>
        <div className="footer-tjenester">
          <h3>Tjenester</h3>
          <span>Montasje og spesialinnredning</span>
          <span>Flytt og logistikk</span>
          <span>Prosjektledelse</span>
        </div>
        <div className="footer-kontakt">
          <h3>Kontakt oss</h3>
          <span>post@assemble-it.no</span>
          <Nav.Link href="/kontakt">Kontakt</Nav.Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
