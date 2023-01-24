import TeamList from "../OmOss/TeamList";

function LandingCarousel(props) {
  return (
    <div className="landing-screen">
      <div className="header">
        <h1>DIN PARTNER INNEN ALT AV MONTASJE!</h1>
      </div>
      <div className="carousel-shadow">
        <TeamList cat="26"></TeamList>
      </div>
    </div>
  );
}

export default LandingCarousel;
