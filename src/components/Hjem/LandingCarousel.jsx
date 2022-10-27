import Carousel from 'react-bootstrap/Carousel';

function LandingCarousel(props) {
    return (
        <div className='landing-screen'>
            <div className='header'>
                <h1>
                DIN PARTNER 
                INNEN ALT 
                AV MONTASJE!
                </h1>
            </div>
            <div className="carousel-shadow">
                <Carousel>
                    <Carousel.Item>
                        <div className='carousel-image ci1' ></div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='carousel-image ci2' ></div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='carousel-image ci3' ></div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default LandingCarousel;
