"use client";

import { useState } from "react";
import PublicNav from "@/components/PublicNav";
import Footer from "@/components/Footer";

const COMPANY_PHONE = "0707 727 3389";
const COMPANY_EMAIL = "ontimesubdataltd@gmail.com";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("General enquiry");
  const [message, setMessage] = useState("");

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `${topic} — ONTIME SUBDATA LTD`
    );

    const body = encodeURIComponent(
      `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${COMPANY_PHONE}\n` +
        `Topic: ${topic}\n\n` +
        `${message}`
    );

    const mailtoUrl =
      `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setSent(true);
  }

  return (
    <>
      <PublicNav />

      <main>
        {/* CONTACT HERO */}
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow">CONTACT ONTIME</span>

            <h1>
              We’re here to <span>help.</span>
            </h1>

            <p>
              Have a question about an account, digital services,
              payments or a business partnership? Our contact
              information is below. Send us a message and let us
              know how we can help.
            </p>

            <div className="hero-actions">
              <a href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`} className="btn">
                Call us →
              </a>

              <a
                href={`https://wa.me/234${COMPANY_PHONE.replace(/\s/g, "").replace(/^0/, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn secondary"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT CONTENT */}
        <section className="section">
          <div className="container contact-layout">
            {/* CONTACT INFORMATION */}
            <div className="contact-copy">
              <span className="eyebrow">GET IN TOUCH</span>

              <h2>Let’s start a conversation.</h2>

              <p>
                We welcome your questions, feedback and business
                enquiries. Contact ONTIME SUBDATA LTD using any
                of the channels below.
              </p>

              {/* PHONE */}
              <div className="contact-info-card">
                <span className="contact-info-icon">☎</span>

                <div>
                  <strong>Phone number</strong>

                  <p>
                    <a href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`}>
                      {COMPANY_PHONE}
                    </a>
                  </p>

                  <a
                    className="contact-action-link"
                    href={`https://wa.me/234${COMPANY_PHONE.replace(/\s/g, "").replace(/^0/, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat with us on WhatsApp →
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="contact-info-card">
                <span className="contact-info-icon">✉</span>

                <div>
                  <strong>Email address</strong>

                  <p>
                    <a href={`mailto:${COMPANY_EMAIL}`}>
                      {COMPANY_EMAIL}
                    </a>
                  </p>

                  <a
                    className="contact-action-link"
                    href={`mailto:${COMPANY_EMAIL}`}
                  >
                    Send us an email →
                  </a>
                </div>
              </div>

              {/* SUPPORT */}
              <div className="contact-info-card">
                <span className="contact-info-icon">◷</span>

                <div>
                  <strong>Customer support</strong>

                  <p>
                    For account or transaction enquiries, please
                    include relevant details so our team can
                    understand your request.
                  </p>

                  <p>
                    Never share your password, transaction PIN,
                    OTP or private API credentials.
                  </p>
                </div>
              </div>

              {/* BUSINESS ENQUIRIES */}
              <div className="contact-info-card">
                <span className="contact-info-icon">◇</span>

                <div>
                  <strong>Business partnerships</strong>

                  <p>
                    Interested in working with ONTIME SUBDATA LTD?
                    Send your proposal to our official email address.
                  </p>

                  <a
                    className="contact-action-link"
                    href={`mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent("Business Partnership Enquiry")}`}
                  >
                    Discuss a partnership →
                  </a>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="contact-form-card">
              <h2>Send us a message</h2>

              <p>
                Complete the form below. Your default email application
                will open with your message prepared for sending.
              </p>

              <form className="form" onSubmit={submit}>
                <div className="field">
                  <label htmlFor="contact-name">
                    Full name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setSent(false);
                    }}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="field">
                  <label htmlFor="contact-email">
                    Your email address
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setSent(false);
                    }}
                    placeholder="you@example.com"
                  />
                </div>

                <div className="field">
                  <label htmlFor="contact-topic">
                    Subject
                  </label>

                  <select
                    id="contact-topic"
                    name="topic"
                    value={topic}
                    onChange={(e) => {
                      setTopic(e.target.value);
                      setSent(false);
                    }}
                  >
                    <option>General enquiry</option>
                    <option>Account support</option>
                    <option>Transaction enquiry</option>
                    <option>Payment issue</option>
                    <option>Digital services</option>
                    <option>Business partnership</option>
                    <option>Feedback or complaint</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="contact-message">
                    Your message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setSent(false);
                    }}
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button className="btn" type="submit">
                  Prepare email <span>→</span>
                </button>

                {sent && (
                  <p className="contact-hint" role="status">
                    Your email application should open with the
                    message prepared. Please send the email from
                    that application to complete your enquiry.
                  </p>
                )}
              </form>

              <div className="contact-security-note">
                <span>🔒</span>

                <p>
                  For your security, never include passwords, OTPs,
                  transaction PINs or other sensitive credentials
                  in your message.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section soft">
          <div className="container">
            <div className="cta">
              <div>
                <h2>We’re ready to hear from you.</h2>

                <p>
                  Contact our team by phone, email or WhatsApp.
                </p>
              </div>

              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="btn"
              >
                Email ONTIME →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}