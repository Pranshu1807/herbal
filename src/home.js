import React from "react";
import "./style/home.css";
const Home = () => {
  return (
    <div className="containerHome">
      <div className="navbar">
        <ul className="nav-links">
          <img src="/Images/logo.png" alt="" />
          <li>Home</li>
          <a href="#about">
            <li>About Us</li>
          </a>
          <a href="#productsDescription">
            <li>Products Description</li>
          </a>
          <a href="#directors">
            <li>Our Directors and Doctors</li>
          </a>
        </ul>
      </div>
      <div className="HomeContent">
        <div className="BannerHome">
          <h1>DARK ROOTS</h1>
          <h2>Let's heal Naturally</h2>
          <h3>Mother Nature has a cure for you</h3>
          <button>READ MORE</button>
        </div>
        <div className="ImageHome">
          <img src="/Home/1.jpg" alt="" />
          <img src="/Home/2.png" className="Image2" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Home;
