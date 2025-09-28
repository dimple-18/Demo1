import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PrimeOfferBanner.css";

const PrimeOfferBanner = ({
  line1 = "This isn’t a shortcut bundle.",
  line2 = "This isn’t recycled content.",
  subline = "It’s a rigorous, results-first track for people serious about changing their income.",
  ctaText = "Enroll Now",
  ctaTo = "/enroll",
  tooltipText = "Cohort seats are limited • Early access open",
}) => {
  const [showTip, setShowTip] = useState(false);

  return (
    <>
      {/* ===== NEW: Editorial Growth Intro (before Enroll) ===== */}
      <section className="growthIntro" aria-labelledby="gi-title">
        <div className="gi__inner">
          <header className="gi__head">
            <p className="gi__kicker">Outcome-Focused Learning</p>
            <h2 id="gi-title" className="gi__title">
              Build skills that pay. <span>Not just skills that look good.</span>
            </h2>
            <p className="gi__sub">
              Practical projects, mentor feedback, and proven playbooks — so your work
              converts into offers, clients, and income.
            </p>
          </header>

          <div className="gi__body">
            <ul className="gi__benefits" role="list">
              <li>
                <span className="gi__tick" aria-hidden="true">✓</span>
                <span>Portfolio-first projects with reviews</span>
              </li>
              <li>
                <span className="gi__tick" aria-hidden="true">✓</span>
                <span>Direct, step-by-step income playbooks</span>
              </li>
              <li>
                <span className="gi__tick" aria-hidden="true">✓</span>
                <span>Weekly accountability and progress check-ins</span>
              </li>
            </ul>

            <ul className="gi__stats" role="list" aria-label="Program highlights">
              <li>
                <strong>10k+</strong>
                <span>Learners trained</span>
              </li>
              <li>
                <strong>92%</strong>
                <span>Job-ready outcomes</span>
              </li>
              <li>
                <strong>₹1L+</strong>
                <span>First income milestone</span>
              </li>
              <li>
                <strong>6–8 wks</strong>
                <span>Avg. completion</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Enroll Banner (your existing section) ===== */}
      <section className="impactBanner" aria-labelledby="impactBanner-title">
        <div className="ib__inner">
          <header className="ib__head">
            <h2 id="impactBanner-title" className="ib__title">
              <span className="ib__line">{line1}</span>
              <span className="ib__line">{line2}</span>
            </h2>
            <div className="ib__accent" aria-hidden="true" />
            <p className="ib__sub">{subline}</p>
          </header>

          <div className="ib__ctaWrap">
            <Link
              to={ctaTo}
              className="ib__cta"
              aria-describedby="ib-tip"
              onMouseEnter={() => setShowTip(true)}
              onMouseLeave={() => setShowTip(false)}
              onFocus={() => setShowTip(true)}
              onBlur={() => setShowTip(false)}
            >
              <span>{ctaText}</span>
              <span className="ib__chev" aria-hidden="true">›</span>
            </Link>

            {/* Tooltip bottom-centered */}
            <div
              id="ib-tip"
              role="tooltip"
              className={`ib__tooltip ${showTip ? "is-visible" : ""}`}
            >
              {tooltipText}
              <span className="ib__caret" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrimeOfferBanner;
