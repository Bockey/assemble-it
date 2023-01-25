import React from "react";
import LandingCarousel from "./LandingCarousel";
import Description from "./Description";
import Services from "./Services";
import Projects from "./Projects";
import Partners from "./OurPartners";

function Hjem(props) {
  return (
    <div>
      <LandingCarousel />
      <Description />
      <Services />
      <Projects />
      <Partners />
    </div>
  );
}

export default Hjem;
