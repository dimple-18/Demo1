import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" aria-label="Intro">
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1 className="hero__title">
          Learn skills. <span>Grow income.</span>
        </h1>
        <p className="hero__subtitle">
          Industry-ready courses with real results & hands-on mentorship.
        </p>

        <a href="#get-started" className="uiverse" aria-label="Get instant access">
          <span className="uiverse__label">Get Instant Access</span>
          <span id="arrow" aria-hidden="true">→</span>
          <span className="tooltip" role="tooltip">Start free today</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
