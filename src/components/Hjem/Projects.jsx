import { CarouselItem } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import TeamList from "../OmOss/TeamList";

function Projects() {
  return (
    <div className="projects">
      <h2>Våre prosjekter</h2>
      <TeamList cat="23" />
    </div>
  );
}

export default Projects;
