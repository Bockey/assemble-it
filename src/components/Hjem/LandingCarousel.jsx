import Carousel from "react-bootstrap/Carousel";
import TeamList from "../OmOss/TeamList";

function LandingCarousel(props) {
  return (
    <div className="landing-screen">
      <div className="header">
        <h1>DIN PARTNER INNEN ALT AV MONTASJE!</h1>
      </div>
      <div className="carousel-shadow">
        {/* <Carousel>
                    <Carousel.Item>
                        <div className='carousel-image ci1' ></div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='carousel-image ci2' ></div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='carousel-image ci3' ></div>
                    </Carousel.Item>
                </Carousel> */}
        <TeamList cat="26"></TeamList>
      </div>
    </div>
  );
}

export default LandingCarousel;
