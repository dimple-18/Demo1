import React from "react";
import "./LearningSection.css";

const LearningSection = () => {
  const topics = [
    { text: "What Is An Instagram Theme Page Business & How Does It Work 🎯" },
    { text: "My Secret Formula To Launch Your Theme Page Immediately 🚀" },
    { text: "How To Monetize Your Theme Page & Make ₹50,000 Every Month Consistently 💰" },
    { text: "How To Clone My Formula & System For Unlimited Revenue 📈" },
    { text: "How To Build A System That Actually Works 💯" },
  ];

  return (
    <section className="learning">
      <div className="learning__inner">
        <h2 className="learning__title">What Will You Learn In This Programme?</h2>
        <p className="learning__subtitle">
          This Is An Intensive, Interactive & Laser Focused Training!
        </p>

        <ul className="learning__list">
          {topics.map((item, i) => (
            <li key={i} className="learning__item">
              {item.text}
            </li>
          ))}
        </ul>

        <div className="learning__ctaWrap">
          <a href="#enroll" className="learning__cta">
            Start Right Now »
          </a>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
