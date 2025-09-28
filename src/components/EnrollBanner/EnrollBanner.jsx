import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./EnrollBanner.css";

const EnrollBanner = ({
  headlineTop = '“This is not a tools-and-tricks course.”',
  headlineBottom = '“This is not fluff scraped from the internet.”',
  subline = "A serious, results-first program for people who want control of their income.",
  ctaText = "Enroll Now",
  ctaTo = "/enroll",
  tooltipText = "Limited seats • Cohort starts soon",
}) => {
  const [showTip, setShowTip] = useState(false);

  // optional: show tooltip briefly on mount to draw attention
  useEffect(() => {
    const t = setTimeout(() => setShowTip(true), 400);
    const t2 = setTimeout(() => setShowTip(false), 2600);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  return (
    <section className="enrollBanner" aria-labelledby="enrollBanner-title">
      <div className="enrollBanner__container">
        {/* Headline card */}
        <div className="enrollBanner__card">
          <h2 id="enrollBanner-title" className="enrollBanner__title">
            <span className="quoteMark" aria-hidden="true">“</span>
            <span className="titleLine">{headlineTop}</span>
            <span className="titleLine">{headlineBottom}</span>
            <span className="quoteMark quoteMark--end" aria-hidden="true">”</span>
          </h2>
          <p className="enrollBanner__sub">
            {subline} <span className="emoji" aria-hidden="true">📌</span>
          </p>
        </div>

        {/* CTA zone */}
        <div className="enrollBanner__ctaWrap">
          <Link
            to={ctaTo}
            className="ctaBtn"
            onMouseEnter={() => setShowTip(true)}
            onMouseLeave={() => setShowTip(false)}
            onFocus={() => setShowTip(true)}
            onBlur={() => setShowTip(false)}
            aria-describedby="enroll-tooltip"
          >
            <span>{ctaText}</span>
            <span className="chevs" aria-hidden="true">»»</span>
          </Link>

          {/* Tooltip centered ABOVE the button */}
          <div
            id="enroll-tooltip"
            role="tooltip"
            className={`ctaTooltip ${showTip ? "is-visible" : ""}`}
          >
            {tooltipText}
            <span className="ctaTooltip__caret" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollBanner;
