// import Navbar from "../../components/shared/Navbar/Navbar";
import { FaPlane, FaPlaneDeparture } from "react-icons/fa";
import { FormattedMessage } from "react-intl";
import Footer from "../../components/shared/Footer/Footer";
import CustomModal from "../../components/shared/modal/modal";
import { useState } from "react";
import {
  FaPlaneCircleCheck,
  FaRankingStar,
  FaRegCircle,
  FaCircleDot,
} from "react-icons/fa6";
// import bronzeMedal from "../../assets/medals/bronz-medal.png";
// import silverMedal from "../../assets/medals/silver-medal.png";
// import goldMedal from "../../assets/medals/gold-medal.png";
// import emeraldMedal from "../../assets/medals/emerald-medal.png";
import "./Dashboard.scss";
import { motion } from "framer-motion";
import img1 from "../../assets/Home/5.png";
import img2 from "../../assets/Home/15.png";
import img3 from "../../assets/Home/35.png";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

const Dashboard = () => {
  //Logjika e progress barit
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [kilometers, setKilometers] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [flight, setFlight] = useState({});
  const [user, setUser] = useState("");
  useEffect(() => {
    // Fetching kilometers from the backend
    fetch("http://localhost/airline-rewards/backend/rewards.php")
      .then((response) => response.json())
      .then((data) => {
        setKilometers(data.kilometers);
        setPercentage((data.kilometers / 50000) * 100);
      })
      .catch((error) => console.error("Error fetching kilometers:", error));

    // Fetching flight details
    fetch("http://localhost/airline-rewards/backend/user.php")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.firstName);
        console.log("First Name:", data.firstName);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const handleBooking = () => {
    fetch("http://localhost/airline-rewards/backend/rewards.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookingReference: "BR123456", // Use the actual booking reference
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setKilometers(kilometers + data.addedKilometers);
          setPercentage(((kilometers + data.addedKilometers) / 50000) * 100);
          setShowModal(false);
        }
      })
      .catch((error) => console.error("Error updating kilometers:", error));
  };

  const iconProgress = percentage < 10 ? percentage - 20 : percentage - 650; //Logjika aeroplanit
  return (
    <>
      <div className="banner">
        <div className="main">
          <h1>
            <FormattedMessage
              id="home-banner-title"
              defaultMessage="Welcome Abroad"
            />
          </h1>
          <p>
            <FormattedMessage
              id="home-banner-text"
              defaultMessage="Here you can see how many points and what rewards you've earned"
            />
          </p>
          <div className="divv">
            <Link to="/">Back Home</Link>
            <Link to="/">Book Now</Link>
          </div>
        </div>
      </div>

      <br />
      <br />
      {/* <center>
        <h1>
                    <FormattedMessage id='home-banner-title' 
                    defaultMessage='Claim Your Cupons'/>
        </h1>
        </center>
        <div className="div-01">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
       */}
      <section>
        <CustomModal open={open} handleClose={handleClose} />

        {/* <div className="dashboard-profile">
        <div className="dashboard-text">
          <h1>Dashboard</h1>
          <p>Hello (User)</p>
        </div>
        <button className="dashboard-btn">Book Now</button>
      </div>
      <div className="hero">
        <div className="hero-text">
          <h1>Introudcing Skysaver</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
      </div> */}
        <center>
          <h1 className="fff">
            <FormattedMessage
              id="home-banner-title"
              defaultMessage="Keep Traveling your so close to getting GOLD Medal"
            />
          </h1>
        </center>

        <div className="dashboard">
          <div className="bronze-point">Bronze</div>
          <div className="silver-point">Silver</div>
          <div className="gold-point">Gold</div>
          <div className="bronze-rank"></div>
          <div className="silver-rank"></div>
          <div className="gold-rank"></div>
          <motion.div animate={{ x: iconProgress + "px" }}>
            <FaPlane className="icon" />
          </motion.div>
          <div className="progress-bar">
            <motion.div
              animate={{ width: 10 * { percentage } + "px" }}
              className="progress-bar__content"
            >
              <div className="skeleton-progress"></div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="dashboard-cards"
          >
            {/* <div className="dashboard-card">
            <div className="dashboard-card__image">
              <FaPlaneDeparture className="card-icon" />
            </div>
            <div className="dashboard-card__text">
              <h1>Kilometers Traveled</h1>
              <h4>{progress * 10}km</h4>
            </div>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-card__image">
              <FaRankingStar className="card-icon" />
            </div>
            <div className="dashboard-card__text">
              <h1>Until Rankup</h1>
              <h4>1000km</h4>
            </div>
          </div> */}
            {/* <div className="dashboard-card">
            <div className="dashboard-card__image">
              <FaPlaneCircleCheck className="card-icon" />
            </div>
            <div className="dashboard-card__text">
              <h1>Kilometers Traveled</h1>
              <h4>1000km</h4>
            </div>
          </div> */}
          </motion.div>
        </div>
        <div className="rewards">
          <div className="bronz-rewards">
            <div className="rewards-table">
              <FaRegCircle className="rewards-icon" />
              <h1>Bronze Card</h1>
              <ul>
                <li>Free drink when you'll travel with us</li>
              </ul>
              <img src="#" />
              <button onClick={handleOpen}>Redeem</button>
            </div>
            <div className="bronze-medal"></div>
          </div>

          <div
            className={
              percentage < 100 ? "bronz-rewards" : "bronz-rewards unavailable"
            }
          >
            <div className="rewards-table">
              <FaRegCircle className="rewards-icon" />
              <h1>Silver Card</h1>
              <div></div>
              <ul>
                <li>5% lifetime discount</li>
                <li>50$ Voucher</li>
              </ul>
              <img src="#" className="silver-img" />
              <button>Redeem</button>
            </div>
            <div className="bronze-medal"></div>
          </div>
          <div
            className={
              percentage < 500 ? "bronz-rewards" : "bronz-rewards unavailable"
            }
          >
            <div className="label">{kilometers} km traveled</div>
            <button onClick={() => setShowModal(true)}>Book Now</button>

            {showModal && (
              <div className="modal">
                <h2>Flight Booking</h2>
                <p>
                  Book from {flight.origin} to {flight.destination}
                </p>
                <button onClick={handleBooking}>Confirm Booking</button>
                <button onClick={() => setShowModal(false)}>Close</button>
                {user}
              </div>
            )}
            <div className="rewards-table">
              <FaRegCircle className="rewards-icon" />
              <h1>Gold Card</h1>
              <div></div>
              <ul>
                <li>10% lifetime discount</li>
                <li>Free booking on your next trip</li>
              </ul>
              <img src="#" className="gold-img" />
              <button>Redeem</button>
            </div>
            <div className="bronze-medal"></div>
          </div>
          <div
            className={
              percentage > 700 ? "bronz-rewards" : "bronz-rewards unavailable"
            }
          >
            <div className="rewards-table">
              <FaRegCircle className="rewards-icon" />
              <h1>Emerald Card</h1>
              <div></div>
              <ul>
                <li>20% lifetime discount</li>
                <br />
                <li>
                  Free flights for you for <br /> the next 3 years.
                </li>
              </ul>
              <img src="#" className="emerald-img" />
              <button>Redeem</button>
            </div>
            <div className="bronze-medal"></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Dashboard;
