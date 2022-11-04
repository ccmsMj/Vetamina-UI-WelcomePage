import {Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

export const Banner = () => {

  return (
    
    <section className="banner" id="home"> 
      <Container>
      
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to Vetamina</span>
                <h1>"TREATING YOUR PETS,</h1>
                <h2>LIKE OUR PETS"</h2>
                  <p>Vetamina is known as a tool that the employee of the organization utilizes in order to achieve the objectives based on their services.</p>
                    <p>Incorporating the features of the Veterinary Clinic Management System will give assistance in dealing with daily operations in the 
                        clinic making the work efficient and convenient for the veterinary employees, pet owners, and clients which will make the system 
                        consumer-centric thus, it will be simplified as it is simple to understand without a deep background knowledge to use the system</p>
                  
                  <Button variant="success" className="button1">LOGIN NOW </Button>
                  <Button variant="success" className="button2">REGISTER NOW </Button>
                  <Button variant="success" className="button3">ADMIN LOGIN </Button>
                 
                  
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}