import Accordion from 'react-bootstrap/Accordion';

function Team() {
  return (
    <div className="team">
      <h2>Our team</h2>
      <div className="container">
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Administration</Accordion.Header>
          <Accordion.Body>
            <div className="employee">
              <div className="image johannes"></div>
              <h3>Johannes</h3>
              <span>Prosjektleder/Partner</span>
              <span>johannes@assemble-it.no</span>
              <span>+47 936 43 944</span>
            </div>
            <div className="employee">
              <div className="image jeanette"></div>
              <h3>Jeanette</h3>
              <span>Møbelsnekker/Partner</span>
              <span>jeanette@assemble-it.no</span>
              <span>+47 46344259</span>
            </div>
            <div className="employee">
              <div className="image alfred"></div>
              <h3>Alfred</h3>
              <span>Prosjektleder/Partner</span>
              <span>alfred@assemble-it.no</span>
              <span>+47 40395239</span>
            </div>
            <div className="employee">
              <div className="image martin"></div>
              <h3>Martin</h3>
              <span>Partner</span>
              <span>martin@assemble-it.no</span>
              <span>+47 45006277</span>
            </div>
            <div className="employee">
              <div className="image erica"></div>
              <h3>Erica</h3>
              <span>Administration</span>
              <span>erica@assemble-it.no</span>
              <span>+47 45006277</span>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Operative</Accordion.Header>
          <Accordion.Body>
            <div className="employee">
              <div className="image paul"></div>
              <h3>Paulius</h3>
              <span>Prosjektleder</span>
              <span>paulius@assemble-it.no</span>
              <span>+47 936 43 944</span>
            </div>
            <div className="employee">
              <div className="image villu"></div>
              <h3>Villu</h3>
              <span>Prosjektleder</span>
              <span>villu@assemble-it.no</span>
              <span>+47 46344259</span>
            </div>
            <div className="employee">
              <div className="image vilius"></div>
              <h3>Vilius</h3>
              <span>Prosjektleder</span>
              <span>vilius@assemble-it.no</span>
              <span>+47 40395239</span>
            </div>
            <div className="employee">
              <div className="image mariss"></div>
              <h3>Mariss</h3>
              <span>Prosjektleder</span>
              <span>mariss@assemble-it.no</span>
              <span>+47 45006277</span>
            </div>
            <div className="employee">
              <div className="image miodrag"></div>
              <h3>Miodrag</h3>
              <span>Fitter</span>
              <span>miodrag@assemble-it.no</span>
              <span>+47 45006277</span>
            </div>
            <div className="employee">
              <div className="image mark"></div>
              <h3>Mark</h3>
              <span>Fitter</span>
              <span>mark@assemble-it.no</span>
              <span>+47 45006277</span>
            </div>
            <div className="employee">
              <div className="image jonas"></div>
              <h3>Jonas</h3>
              <span>Fitter</span>
              <span>jonas@assemble-it.no</span>
              <span>+47 45006277</span>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
    </div>
  );
}

export default Team;
