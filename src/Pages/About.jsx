import React from "react";
import '././About.css';

const About = () => {
  return (
    <div className="about">
      {/* HERO */}
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero__inner">
          <div className="about-hero__copy">
            <h1 id="about-title">About SkillIncome</h1>
            <p className="lead">
              We empower ambitious learners with practical, job-ready skills and a proven path
              to earning online—without fluff, just outcomes.
            </p>
            <div className="hero-bullets" role="list">
              <div role="listitem">• Mentor-led curriculum</div>
              <div role="listitem">• Portfolio-first projects</div>
              <div role="listitem">• Real income playbooks</div>
            </div>
            <a className="btn btn--primary" href="#our-story">Explore our journey</a>
          </div>

          <div className="about-hero__media" aria-hidden="true">
            {/* Replace with your own image/video */}
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
              alt=""
            />
            <div className="media-badge">
              <span className="badge-title">Trusted by learners</span>
              <span className="badge-sub">across India</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="about-stats" aria-label="Program results">
        <ul className="stats-grid" role="list">
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
            <strong>6–8 weeks</strong>
            <span>Avg. course completion</span>
          </li>
        </ul>
      </section>

      {/* STORY */}
      <section className="about-content" id="our-story" aria-labelledby="story-title">
        <div className="about-content__inner">
          <div className="about-text">
            <h2 id="story-title">Our Story</h2>
            <p>
              At <span>SkillIncome</span>, we believe career transformation should be
              practical and outcome-driven. We started with a simple idea: make industry-level
              skills accessible, actionable, and aligned to real earning opportunities.
            </p>
            <p>
              Since then, we’ve helped thousands bridge the gap between learning and livelihood,
              with mentor support, portfolio projects, and revenue-focused playbooks used by our
              community to land clients and roles faster.
            </p>
            <a className="btn btn--ghost" href="#values">See what drives us</a>
          </div>

          <div className="about-image">
            {/* Replace with your own brand image */}
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop"
              alt="Learners collaborating on a project"
            />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values" id="values" aria-labelledby="values-title">
        <h2 id="values-title">Our Core Values</h2>
        <ul className="values-grid" role="list">
          <li className="value-card">
            <div className="value-icon" aria-hidden="true">🚀</div>
            <h3>Innovation</h3>
            <p>We iterate relentlessly and teach what the industry actually uses.</p>
          </li>
          <li className="value-card">
            <div className="value-icon" aria-hidden="true">🤝</div>
            <h3>Integrity</h3>
            <p>Clear promises, measurable outcomes, and honest guidance.</p>
          </li>
          <li className="value-card">
            <div className="value-icon" aria-hidden="true">🌍</div>
            <h3>Impact</h3>
            <p>Skills that change lives, not just resumes.</p>
          </li>
        </ul>
      </section>

      {/* TIMELINE */}
      <section className="about-timeline" aria-labelledby="timeline-title">
        <div className="timeline__header">
          <h2 id="timeline-title">How We Got Here</h2>
          <p className="muted">
            From a small cohort to a nationwide learning community focused on outcomes.
          </p>
        </div>
        <ol className="timeline" role="list">
          <li>
            <span className="tl-dot" aria-hidden="true" />
            <div className="tl-body">
              <h4>2019 — The idea</h4>
              <p>We launched a small pilot focused on hands-on, income-oriented learning.</p>
            </div>
          </li>
          <li>
            <span className="tl-dot" aria-hidden="true" />
            <div className="tl-body">
              <h4>2021 — Mentor network</h4>
              <p>Industry mentors joined to review projects and guide career moves.</p>
            </div>
          </li>
          <li>
            <span className="tl-dot" aria-hidden="true" />
            <div className="tl-body">
              <h4>2023 — Playbooks</h4>
              <p>We added monetization playbooks that helped students hit their first ₹1L.</p>
            </div>
          </li>
          <li>
            <span className="tl-dot" aria-hidden="true" />
            <div className="tl-body">
              <h4>2025 — Community & beyond</h4>
              <p>We’re scaling community support, challenges, and live clinics across India.</p>
            </div>
          </li>
        </ol>
      </section>

      {/* TESTIMONIAL */}
      <section className="about-quote" aria-label="Student testimonial">
        <figure className="quoteCard">
          <blockquote>
            “SkillIncome gave me a step-by-step roadmap—from first client outreach to closing
            deals. I hit ₹1L in under two months.”
          </blockquote>
          <figcaption>— Ayesha, Freelance Designer</figcaption>
        </figure>
      </section>

      {/* CTA BANNER */}
      <section className="about-cta" aria-labelledby="cta-title">
        <div className="cta__inner">
          <h2 id="cta-title">Ready to start your SkillIncome journey?</h2>
          <p className="muted">
            Join a practical program with mentors, projects, and clear income pathways.
          </p>
          <a className="btn btn--primary" href="/courses">Browse Courses</a>
        </div>
      </section>
    </div>
  );
};

export default About;
