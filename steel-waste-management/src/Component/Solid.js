import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import SWM2 from "./assets/SWM2.jpg";
import "./Solid.css"; 

function Solid() {
    const navigate = useNavigate(); // ✅ Initialize useNavigate
    
  return (
    <>
      {/* Card Section */}
      <div className="home">
        <Card className="bg-dark text-white">
          <img src={SWM2} alt="Solid Waste Management" className="SWM2" />
          <Card.ImgOverlay>
            <div className="title">
              <Card.Title className="display-5 text-center">
                Solid Waste Management
              </Card.Title>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>
      <br />

      {/* Introduction Section */}
      <div className="content-container">
        <h1>What is Solid Waste and its Management?</h1>
        <p>
          Solid Waste Management refers to the systematic collection, treatment, and disposal of solid wastes generated from households, industries, agriculture, and medical facilities. Proper management is essential to reduce pollution, prevent diseases, and maintain environmental hygiene.
        </p>
        <p>
          In India, waste management involves collection, transportation, treatment, and disposal, following strict regulations to ensure minimal environmental impact. With urbanisation and industrial growth, solid waste disposal has become a major challenge, making sustainable waste management practices more crucial than ever.
        </p>
      </div>
      <br />

      {/* Table Section */}
      <div className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Component</th>
              <th>GOI Share</th>
              <th>State Share</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>IHHL</td>
              <td>4000/Number</td>
              <td>2000/Number</td>
            </tr>
            <tr>
              <td>2</td>
              <td>CT</td>
              <td>39200/seat</td>
              <td>34300/seat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>SWM</td>
              <td>35%</td>
              <td>55%</td>
            </tr>
            <tr>
              <td>4</td>
              <td>IEC</td>
              <td>75%</td>
              <td>25%</td>
            </tr>
            <tr>
              <td>5</td>
              <td>CB and A&OE</td>
              <td>75%</td>
              <td>25%</td>
            </tr>
          </tbody>
        </Table>
      </div>

      {/* Additional Content */}
      <div className="content-container">
        <h2>Individual Household Latrines (IHHL)</h2>
        <p>
          With a vision to eradicate open defecation, the construction of Individual Household Toilets has been a key component of the Swachh Bharat Mission. So far, 5,05,282 IHHLs have been completed.
        </p>
        <h3>Community Toilets</h3>
        <p>
        Community Toilets are constructed for providing sanitation to the households without land for the construction of IHHL. 21,894 seats had been completed.
        </p>
        <h3>Solid Waste Management</h3>
        <p>
        So far, 6,438 works have been sanctioned under the solid waste management component in 664 ULBs, including 15 Corporations, 121 Municipalities, and 528 Town Panchayats, at a total estimated cost of ₹2,185 Crore.
        </p>
        <h2>Information, Education, and Communication (IEC) Activities</h2>
        <p>
        In order to promote and sustain activities related to curbing open defecation practices, promoting source segregation, and encouraging home composting, 2,846 animators, 230 supervisors, and 11 coordinators have been engaged in all ULBs initially for a period of 3 years and extended further.
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

export default Solid;
