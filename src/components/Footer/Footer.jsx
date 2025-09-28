import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/ski2.png";

export default function FooterLite() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const ok = /^\S+@\S+\.\S+$/.test(email);
    if (!ok) return setMsg("Please enter a valid email.");
    setMsg("Subscribed! Check your inbox to confirm.");
    setEmail("");
  };

  const year = new Date().getFullYear();

  return (
    <footer className="footerLite">
      <div className="fl__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440,80 L0,80 Z"></path>
        </svg>
      </div>

      <div className="fl__container">
        {/* Brand block */}
        <div className="fl__brand">
          <Link to="/" className="fl__logo">
            <img src={logo} alt="SkillIncome" />
          </Link>
          <div>
            <p className="fl__tag">
              At <strong>SkillIncome</strong>, we believe in turning knowledge into real income.
              Learn actionable skills, guided by experts, and launch your digital journey.
            </p>
            <ul className="fl__badges">
              <li>Trusted by 10k+ learners</li>
              <li>100% Secure Payments</li>
              <li>Refund Guarantee</li>
            </ul>
          </div>
        </div>

        {/* Columns */}
        <div className="fl__cols">
          <nav className="fl__col">
            <h3>Explore</h3>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/courses">Our Courses</NavLink></li>
              <li><NavLink to="/results">Student Results</NavLink></li>
              <li><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>
          </nav>

          <nav className="fl__col">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Affiliate Program</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </nav>

          <div className="fl__col">
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a></li>
              <li><a href="tel:+911234567890">+91 12345 67890</a></li>
              <li>Mumbai, India</li>
            </ul>
            <div className="fl__social">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Twitter">X</a>
              <a href="#" aria-label="YouTube">YT</a>
            </div>
          </div>

          <div className="fl__col">
            <h3>Newsletter</h3>
            <p className="fl__muted">Stay updated with new courses and offers.</p>
            <form className="fl__form" onSubmit={submit}>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Subscribe</button>
            </form>
            {msg && <div className="fl__msg">{msg}</div>}
          </div>
        </div>

        {/* Partner/Payment bar */}
        <div className="fl__partners">
          <p>We accept:</p>
          <ul>
            <li>Visa</li>
            <li>Mastercard</li>
            <li>UPI</li>
            <li>PayPal</li>
          </ul>
        </div>

        {/* Bottom credits */}
        <div className="fl__bottom">
          <p>© {year} SkillIncome. All rights reserved.</p>
          <ul>
            <li><Link to="/legal#terms">Terms</Link></li>
            <li><Link to="/legal#privacy">Privacy</Link></li>
            <li><a href="mailto:hello@yourdomain.com">Support</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
