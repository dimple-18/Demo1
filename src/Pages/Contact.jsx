import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "", hp: "" });
  const [status, setStatus] = useState({ type: "", msg: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // Honeypot anti-bot
    if (form.hp) return;
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", msg: "Please fill in name, email, and message." });
      return;
    }
    // TODO: hook this to your API / email service
    setStatus({ type: "success", msg: "Thanks! We’ll get back to you within 24 hours." });
    setForm({ name: "", email: "", topic: "", message: "", hp: "" });
  };

  return (
    <div className="contactPage" aria-labelledby="contact-title">
      {/* HERO */}
      <section className="cp__hero">
        <div className="cp__heroInner">
          <h1 id="contact-title">Let’s Talk</h1>
          <p>Questions, partnerships, or support—drop us a line and we’ll respond quickly.</p>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="cp__strip" aria-label="Contact methods">
        <ul className="cp__cards" role="list">
          <li className="cpCard">
            <div className="cpCard__icon" aria-hidden="true">✉️</div>
            <div>
              <h3>Email</h3>
              <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>
              <p className="muted">Avg. reply time: under 24 hrs</p>
            </div>
          </li>

          <li className="cpCard">
            <div className="cpCard__icon" aria-hidden="true">💬</div>
            <div>
              <h3>WhatsApp</h3>
              <a href="https://wa.me/911234567890" target="_blank" rel="noreferrer">
                +91 12345 67890
              </a>
              <p className="muted">Mon–Sat, 10:00–18:00 IST</p>
            </div>
          </li>

          <li className="cpCard">
            <div className="cpCard__icon" aria-hidden="true">📍</div>
            <div>
              <h3>Location</h3>
              <p>Mumbai, India</p>
              <p className="muted">Remote-first • Global learners</p>
            </div>
          </li>
        </ul>
      </section>

      {/* FORM + FAQ */}
      <section className="cp__body">
        <div className="cp__grid">
          {/* FORM */}
          <div className="cp__formWrap">
            <h2>Send Us a Message</h2>

            {status.msg ? (
              <div className={`cp__alert ${status.type === "error" ? "is-error" : "is-success"}`}>
                {status.msg}
              </div>
            ) : null}

            <form onSubmit={onSubmit} noValidate>
              {/* Honeypot */}
              <input
                type="text"
                name="hp"
                autoComplete="off"
                value={form.hp}
                onChange={onChange}
                className="hp"
                tabIndex="-1"
                aria-hidden="true"
              />

              <div className="row">
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="field">
                  <label htmlFor="topic">Topic (optional)</label>
                  <select id="topic" name="topic" value={form.topic} onChange={onChange}>
                    <option value="">Select a topic…</option>
                    <option value="admissions">Admissions & Pricing</option>
                    <option value="support">Student Support</option>
                    <option value="partnerships">Partnerships</option>
                    <option value="press">Press & Media</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us a bit more…"
                    rows="6"
                    value={form.message}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>

              <button className="cp__submit" type="submit">
                Send Message
                <span className="chev" aria-hidden="true">›</span>
              </button>

              <p className="policy">
                By submitting, you agree to our <a href="/legal">Terms</a> and{" "}
                <a href="/legal#privacy">Privacy Policy</a>.
              </p>
            </form>
          </div>

          {/* FAQ */}
          <div className="cp__faqWrap">
            <h2>Frequently Asked</h2>
            <details className="faq">
              <summary>How fast will I get a reply?</summary>
              <div className="faq__content">
                Most emails get a response within 24 hours (Mon–Sat).
              </div>
            </details>

            <details className="faq">
              <summary>Do you offer refunds?</summary>
              <div className="faq__content">
                Yes—see our refund policy on the Legalities page for full terms.
              </div>
            </details>

            <details className="faq">
              <summary>Can I book a quick call?</summary>
              <div className="faq__content">
                Sure. Email us with your availability or ping us on WhatsApp to schedule.
              </div>
            </details>

            <details className="faq">
              <summary>Do you provide invoices for businesses?</summary>
              <div className="faq__content">
                Absolutely. We can provide GST-compliant invoices upon request.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* MAP / EMBED (optional placeholder) */}
      <section className="cp__map" aria-label="Map">
        <div className="cp__mapBox">
          <div className="cp__mapHint">
            {/* Map / campus photo / brand video can go here. */}
          </div>
        </div>
      </section>
    </div>
  );
}
