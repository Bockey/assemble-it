import Nav from "react-bootstrap/Nav";

function Footer(props) {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="footer-logo">
                    <div className="footer-logo-img"></div>
                    <div className="signature">© Assemble It 2022</div>
                </div>
                <div className="footer-links">
                    <h3>Links</h3>
                    <Nav.Link href="/tjenester">Tjenester</Nav.Link>
                    <Nav.Link href="/om-oss">Om Oss</Nav.Link>
                    <Nav.Link href="/kontakt">Kontakt</Nav.Link>
                </div>
                <div className="footer-tjenester">
                    <h3>Tjenester</h3>
                    <span>First</span>
                    <span>Second</span>
                    <span>Third</span>
                    <span>Fourth</span>
                    <span>Fifth</span>
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