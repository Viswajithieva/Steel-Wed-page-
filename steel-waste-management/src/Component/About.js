import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import Card from "react-bootstrap/Card";
import "./About.css";
import SWM3 from "./assets/SWM3.jpg"; // ✅ Make sure this file exists

function About() {
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  return (
    <>
      {/* Card Section */}
      <div className="About">
        <Card className="bg-dark text-white">
          <img src={SWM3} alt="SWM3" className="SWM3" />
          <Card.ImgOverlay>
            <div className="title1">
              <Card.Title className="display-5 text-center">
                At IEVA, we are committed to revolutionizing Steel Waste Management by implementing sustainable and efficient waste disposal solutions. As a leader in the industry, we specialize in Industrial Waste Management and Solid Waste Management, ensuring compliance with environmental regulations while promoting eco-friendly practices.
              </Card.Title>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>
      <br />

      {/* Mission section */}
      <div className="text">
        <h1 className="text h">Our Mission:</h1>
        <p className="text p">
          Our goal is to minimize waste, maximize resource recovery, and contribute to a cleaner, greener future for the steel industry.
        </p>
        <br />
        <h2 className="text h">1. Industrial Waste Management:</h2>
        <p className="text p">
          Efficient collection and processing of steel by-products.<br />
          Recycling and reuse of scrap metal to reduce industrial waste.<br />
          Advanced technologies for minimizing environmental impact.
        </p>
        <br />
        <h3 className="text h">2. Solid Waste Management:</h3>
        <p className="text p">
          Proper segregation of solid waste generated in steel production.<br />
          Implementation of eco-friendly disposal methods.<br />
          Converting waste into reusable resources.
        </p>
      </div>

      {/* Button */}
      <div className="button-container">
        <button onClick={() => navigate('/Home')} className="navigate-button">
        Home
        </button>
      </div>
    </>
  );
}

export default About;
