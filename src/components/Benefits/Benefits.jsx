import React from "react";
import "./Benefits.css";

const Benefits = () => {
  return (
    <section className="benefits" aria-labelledby="benefits-heading">
      <div className="benefits__container">
        <header className="benefits__header">
          <h2 id="benefits-heading">
            3 Main Benefits of Our Courses
          </h2>
          <p className="benefits__sub">
            A hidden business gem that has helped our students earn their first ₹1 Lakh online!
          </p>
          <div className="benefits__accent" aria-hidden="true"></div>
        </header>
      </div>
    </section>
  );
};

export default Benefits;
