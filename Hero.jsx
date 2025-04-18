import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css'; // Import the custom styles
import womenImage from '../../assets/women.jpg';
import womenImage1 from '../../assets/women1.jpg';
import menImage from '../../assets/men.jpg';



const Hero = () => {
  return (
    <Carousel fade>
      <Carousel.Item interval={3000}>
        <div className="hero-slide">
          <img
            className="d-block w-100"
            src={womenImage}
            alt="First slide"
          />
          <div className="overlay" />
          <Carousel.Caption>
            <h3>Fresh Fashion Arrivals</h3>
            <p>Step into style with our latest collection.</p>
            <a href="/shop" className="hero-btn">Shop Now</a>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="hero-slide">
          <img
            className="d-block w-100"
            src={menImage}
            alt="Second slide"
          />
          <div className="overlay" />
          <Carousel.Caption>
            <h3>Big Deals. Small Prices.</h3>
            <p>Don’t miss out on limited-time offers.</p>
            <a href="/deals" className="hero-btn">View Deals</a>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="hero-slide">
          <img
            className="d-block w-100"
            src={womenImage1}
            alt="Third slide"
          />
          <div className="overlay" />
          <Carousel.Caption>
            <h3>your Style, Your Way</h3>
            <p>Explore outfits that match your unique personality.</p>
            <a href="/electronics" className="hero-btn">Explore</a>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
