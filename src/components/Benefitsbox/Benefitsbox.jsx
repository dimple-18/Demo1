import React from "react";
import "./Benefitsbox.css";

const benefits = [
  {
    title: "Launch Faster",
    blurb: "Clear, actionable steps so you can ship your first offer in days, not weeks.",
  },
  {
    title: "Mentored Progress",
    blurb: "Structured reviews and checkpoints keep you accountable and job-ready.",
  },
  {
    title: "Income Playbooks",
    blurb: "Proven client-acquisition scripts and pricing templates for your first ₹1 Lakh.",
  },
];

const Benefitsbox = () => {
  return (
    <section className="benefitsV2" aria-label="Key benefits">
      <div className="benefitsV2__container">
        <ul className="benefitsV2__grid" role="list">
          {benefits.map((b, i) => (
            <li key={b.title} className="benefitV2" tabIndex={0}>
              <span className="benefitV2__num" aria-hidden="true">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <div className="benefitV2__body">
                <h3 className="benefitV2__title">{b.title}</h3>
                <p className="benefitV2__blurb">{b.blurb}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Optional micro-proof row */}
        {/* <div className="benefitsV2__meta">
          <span>10k+ learners</span>
          <span>92% job-ready outcomes</span>
          <span>Avg. completion: 6–8 weeks</span>
        </div> */}
      </div>
    </section>
  );
};

export default Benefitsbox;
