import React from "react";
import Nav from "react-bootstrap/Nav";

function Services(props) {
  return (
    <div className="services">
      <h2>
        <span>THESE</span>
        <span>ARE</span>
        <span>OUR</span>
        <span>SERVICES</span>
      </h2>
      <div className="services-list">
        <div className="first">
          <h3>First</h3>
          <p>
            Vi har mange års erfaring og kompetanse innen prosjektledelse,
            montasje og spesialtilpasninger.
          </p>
        </div>
        <div className="second">
          <h3>Second</h3>
          <p>
            Vi har mange års erfaring og kompetanse innen prosjektledelse,
            montasje og spesialtilpasninger.
          </p>
        </div>
        <div className="third">
          <h3>Third</h3>
          <p>
            Vi har mange års erfaring og kompetanse innen prosjektledelse,
            montasje og spesialtilpasninger.
          </p>
        </div>
        <div className="fourth">
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
        </div>
        <div className="other">
          <h3>Other</h3>
          <p>
            And many secondary services.
          </p>
          <Nav.Link href="/tjenester">See more...</Nav.Link>
        </div>
        
      </div>
    </div>
  );
}

export default Services;
