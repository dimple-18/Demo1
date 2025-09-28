import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Discover who we are and what we stand for.</p>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            At <span>SkillIncome</span>, we believe in empowering individuals
            through knowledge. Our journey began with the vision to create
            accessible, practical, and career-focused learning opportunities.
          </p>
          <p>
            With a passionate team of experts, we have transformed thousands of
            students’ careers by bridging the gap between education and
            industry.
          </p>
          <button className="learn-btn">Learn More</button>
        </div>
        <div className="about-image">
          
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>🚀 Innovation</h3>
            <p>We embrace creativity and strive for cutting-edge solutions.</p>
          </div>
          <div className="value-card">
            <h3>🤝 Integrity</h3>
            <p>Trust and honesty are the foundation of everything we do.</p>
          </div>
          <div className="value-card">
            <h3>🌍 Impact</h3>
            <p>We aim to create meaningful change in the world through learning.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-card">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Jane Smith</h3>
            <p>Lead Instructor</p>
          </div>
          <div className="team-card">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Alex Johnson</h3>
            <p>Developer & Mentor</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
