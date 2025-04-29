import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import Card from "react-bootstrap/Card";
import "./IWM.css";
import SWM4 from "./assets/SWM4.jpg";


function IWM() {
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  return (
    <>
      {/* Card Section */}
      <div className="home">
        <Card className="bg-dark text-white">
          <img src={SWM4} alt="SWM4" className="SWM4" />
          <Card.ImgOverlay>
            <div className="title">
              <Card.Title className="display-5 text-center">
                Industrial Waste Management
              </Card.Title>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>

      {/* Text Section */}
      <div>
        <h1>Industrial Waste Management:</h1>
        <p>
          Industrial waste management is a crucial aspect of environmental sustainability and regulatory compliance. Industries generate various types of waste, including hazardous and non-hazardous materials, which can have serious environmental and health impacts if not managed properly. Effective waste management involves reducing waste generation, recycling materials, treating waste before disposal, and adopting eco-friendly practices.
        </p>
        <p>
          Industries produce waste in different forms, such as solid, liquid, and gaseous emissions. Common sources include manufacturing plants, mining operations, power generation, and chemical industries. To minimize the harmful effects of waste, companies implement waste management strategies such as source reduction, material recovery, and responsible disposal methods like landfilling, incineration, and wastewater treatment.
        </p>
        <p>
          A key aspect of industrial waste management is hazardous waste handling, which requires special treatment to prevent contamination of soil, air, and water. Regulations set by environmental agencies ensure that industries comply with waste disposal standards to protect the environment and human health. The adoption of modern technologies, such as waste-to-energy conversion, recycling automation, and sustainable production methods, further enhances industrial waste management efficiency.
        </p>
        <p>
          By prioritizing responsible waste management, industries can reduce their environmental footprint, improve resource efficiency, and contribute to a cleaner and greener future.
        </p>
      </div>

      
     {/* Button Section */}
     <div className="button-container">
           <button onClick={() => navigate("/home")}>Home</button>
      </div>

    </>
  );
}

export default IWM;
