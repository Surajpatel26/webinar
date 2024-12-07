import React from "react";
import "./AboutUs.css";
import aboutImage1 from "../assets/group.jpg";
import aboutImage2 from "../assets/one.jpg";
import badge1 from "../assets/badge1.png";
import badge2 from "../assets/badge2.png";
import badge3 from "../assets/badge3.png";
import badge4 from "../assets/badge4.png";
import badge5 from "../assets/badge5.png";
import badge6 from "../assets/badge6.png";
import badge7 from "../assets/badge7.png";
import badge8 from "../assets/badge8.png";
import missionImage from "../assets/mission.jpg";
import yttaLogo from "../assets/logo.jpg"; // Replace with your YTTA logo
import aiLearningLogo from "../assets/ails.jpg"; // Replace with your AI Learning logo

const AboutUs = () => {
  return (
    <div className="aboutus-page">
      {/* First Section: About Us */}
      <div className="about-container">
        <div className="about-text">
          <h1 className="about-heading">This is Ai Learning Solution</h1>
          <p className="about-description">
            At Ai Learning Solution, we are on a mission to simplify the complexity of
            business and make it easy for companies and customers to create
            connections. We show companies how to unlock the power of everyday
            customer interactions, so they can make those experiences
            extraordinary.
          </p>
          <p className="about-description">
            And you know what? This work is important, because we are all
            customers. We believe life is a little bit better when the customer
            experiences we all share are painless, frictionless, and more
            helpful.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage1} alt="About Us 1" />
        </div>
      </div>

      {/* Second Section: Founder and Achievements */}
      <div className="founder-achievements-container">
        {/* Founder Section */}
        <div className="founder-container">
          <div className="about-image">
            <img src={aboutImage2} alt="Founder" />
          </div>
          <div className="about-text">
            <h1 className="about-heading">Founder</h1>
            <h2>~Suraj Patel</h2>
            <p className="about-description">
              Our commitment lies in making every customer interaction seamless
              and enriching. We aim to bridge gaps, foster trust, and deliver
              outstanding solutions that drive meaningful connections.
            </p>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="achievements-section">
          <h1 className="about-heading achievements-heading">Our Achievements</h1>
          <p className="about-description achievements-description">
            Over the years, Ai Learning Solution has achieved remarkable milestones that
            have shaped our journey towards excellence. From groundbreaking innovations to
            recognition by industry leaders, we are proud of the impact we've made in the
            world of business and technology.
          </p>
          <div className="achievements-grid">
            <img src={badge1} alt="Achievement 1" />
            <img src={badge2} alt="Achievement 2" />
            <img src={badge3} alt="Achievement 3" />
            <img src={badge4} alt="Achievement 4" />
            <img src={badge5} alt="Achievement 5" />
            <img src={badge6} alt="Achievement 6" />
            <img src={badge7} alt="Achievement 7" />
            <img src={badge8} alt="Achievement 8" />
          </div>
        </div>
      </div>

      {/* Third Section: Mission and Vision */}
      <div className="about-container reverse">
        <div className="about-image">
          <img src={missionImage} alt="Mission and Vision" />
        </div>
        <div className="about-text">
          <h1 className="about-heading">Our Mission and Vision</h1>
          <p className="about-description">
            Our mission is to empower organizations to provide exceptional
            customer experiences. We envision a world where every customer
            interaction is valuable, meaningful, and impactful.
          </p>
          <p className="about-description">
            By leveraging cutting-edge technology and innovative strategies, we
            aim to create a future where businesses and customers thrive
            together.
          </p>
        </div>
      </div>

      {/* Fourth Section: YTTA and AI Learning Solution */}
      <div className="about-container">
        <div className="about-text">
          <h1 className="about-heading">YTTA and AI Learning Solution</h1>
          <p className="about-description">
            YTTA and AI Learning Solution are two names for the same innovative organization. 
            Our mission remains the same: to deliver high-quality solutions and create lasting 
            impacts for businesses and customers worldwide.
          </p>
          <p className="about-description">
            Both brands operate under the same vision of providing cutting-edge services 
            while building trust and meaningful connections.
          </p>
        </div>
        <div className="company-logos">
          <img src={yttaLogo} alt="YTTA Logo" />
          <img src={aiLearningLogo} alt="AI Learning Logo" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
