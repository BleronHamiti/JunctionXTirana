import { useState, useEffect } from "react";
import "./GetStarted.scss";

import road from "../../../assets/Home/road.png";

import { FaMapMarkerAlt } from "react-icons/fa";
const GetStarted = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost/junction/test.php")
      .then((response) => response.json()) // Parse the JSON response
      .then((data) => {
        const message = data.message;
        setData(message);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <h1 className="h1">How to get started?{data}</h1>
        <div className="container">
          <img src={road} alt="" className="step" />
          <div className="stepCount">
            <h3>Step 1:</h3>
            <p>
              <a href="test" className="Steplink">
                Create a free account
              </a>
            </p>
            <a href="">
              <FaMapMarkerAlt className="loc" />
            </a>
          </div>
          <div className="stepCount2">
            <h3>Step 2:</h3>
            <a href="" className="Steplink">
              <p>Book Flights</p>
            </a>
            <a href="">
              <FaMapMarkerAlt className="loc" />
            </a>
          </div>
          <div className="stepCount3">
            <h3>Step 3:</h3>
            <a href="" className="Steplink">
              <p>Travel & Save</p>
            </a>
            <a href="">
              <FaMapMarkerAlt className="loc" />
            </a>
          </div>
        </div>{" "}
      </div>
    </>
  );
};
export default GetStarted;
