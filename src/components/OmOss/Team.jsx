import Accordion from "react-bootstrap/Accordion";
// import TeamInformation from "./TeamInformation";
// import TeamInfo from "./TeamInfo";
import TeamList from "./TeamList";

function Team() {
  return (
    <div className="team">
      <h2>VÅRT TEAM</h2>
      <div className="container">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Administrasjon</Accordion.Header>
            <Accordion.Body>
              <TeamList cat="25" />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Operativ</Accordion.Header>
            <Accordion.Body>
              <TeamList cat="24" />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default Team;
