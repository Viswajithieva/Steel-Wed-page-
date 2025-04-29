import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "./Home.css";
import SWM1 from "./assets/SWM1.jpg";
import LOGO from "./assets/LOGO.jpg"

function Home() {
  const navigate = useNavigate(); // ✅ Initialize useNavigate hook

  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <img src={LOGO} alt="LOGO" className="LOGO " />
          <Navbar.Brand href="/">IEVA</Navbar.Brand> {/* ✅ Fixed syntax */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link> {/* ✅ Use navigate */}
              <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link> {/* ✅ Use navigate */}
              <NavDropdown title="Info" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => navigate("/IWM")}>
                  Industrial Waste Management
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/Solid")}>
                  Solid Waste Management
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/Contact")}>
                  Contact Us
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => navigate("/login")}>
                  Login
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => navigate("/Signup")}>
                  Signup 
                 </NavDropdown.Item> 
                
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Card Section */}
      <div className="home">
        <Card className="bg-dark text-white">
          <img src={SWM1} alt="SWM1" className="SWM1" />
          <Card.ImgOverlay>
            <div className="title">
              <Card.Title className="display-5 text-center">
                Steel Waste Management
              </Card.Title>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>

      {/* Text Section */}
      <div className="my-5">
        <div className="text">
          <h1>Environment Management in Iron & Steel sector</h1>
          <br />
          <p className="">
            Iron & steel industry in India are covered under the Environment
            Protection Act (EPA) as well as Environment Protection Rules &
            Regulations enacted & published by the Ministry of Environment &
            Forest (MoEF&CC). At the beginning, the entrepreneurs are required
            to obtain statutory clearances from the Union/State Governments
            required under the EPA for setting up of any new iron & steel
            plants or its substantial expansion. Further, the steel companies
            are required to install specified pollution control
            equipment/facilities and also operate well within the prescribed
            Standards/Norms in respect of air, water, and noise pollution as
            well as solid waste generation & utilization. These are monitored by
            Central/State Pollution Control Boards. MOS helps & facilitates
            formulation/amendment of norms and standards.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
