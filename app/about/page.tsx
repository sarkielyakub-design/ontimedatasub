import Image from "next/image";
import PublicNav from "@/components/PublicNav";
import Footer from "@/components/Footer";

const values = [
  {
    icon: "◎",
    title: "Customer First",
    description:
      "We put customers at the centre of our digital experience and aim to make everyday services simple and accessible.",
  },
  {
    icon: "◇",
    title: "Trust and Responsibility",
    description:
      "We value transparency, responsible service delivery, secure account access and clear communication.",
  },
  {
    icon: "↗",
    title: "Continuous Improvement",
    description:
      "We continue to improve our platform, learn from customer feedback and adapt to changing digital needs.",
  },
];

const commitments = [
  {
    number: "01",
    title: "Convenience",
    description:
      "Bringing supported digital services and account tools together in one accessible platform.",
  },
  {
    number: "02",
    title: "Reliability",
    description:
      "Working to provide a consistent customer experience with clear information and dependable processes.",
  },
  {
    number: "03",
    title: "Innovation",
    description:
      "Using practical technology to simplify everyday digital tasks and improve the customer journey.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PublicNav />

      <main>
        {/* HERO */}
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow">ABOUT ONTIME</span>

            <h1>
              Digital convenience,{" "}
              <span>built around you.</span>
            </h1>

            <p>
              We are building a simpler way for people and businesses to
              access everyday digital services through one convenient
              platform.
            </p>

            <div className="hero-actions">
              <a href="/services" className="btn">
                Explore our services →
              </a>

              <a href="/contact" className="btn secondary">
                Contact our team
              </a>
            </div>
          </div>
        </section>

        {/* COMPANY INTRODUCTION */}
        <section className="section">
          <div className="container about-intro-grid">
            <div>
              <span className="eyebrow">WHO WE ARE</span>

              <h2>Meet ONTIME SUBDATA LTD</h2>

              <p>
                ONTIME SUBDATA LTD is focused on making everyday digital
                services easier to access. Our platform brings account
                tools and supported services together, with a focus on
                convenience, clear information and a dependable customer
                experience.
              </p>

              <p>
                We believe useful technology should make everyday tasks
                easier to understand and manage. We continue to develop
                our platform around practical customer needs, responsible
                service delivery and secure account access.
              </p>

              <p>
                Our ambition is to build lasting relationships with
                customers by offering an accessible digital experience
                and continually improving how our services are delivered.
              </p>
            </div>

            <div className="about-highlight">
              <div className="about-highlight-icon">✦</div>

              <h3>Our promise</h3>

              <p>
                To make essential digital tasks more straightforward
                through convenient services, transparent information
                and a customer-first approach.
              </p>

              <div className="about-highlight-rule" />

              <div className="about-values">
                <div>
                  <strong>01</strong>
                  <span>Convenience</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Trust</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION AND VISION */}
        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">OUR PURPOSE</span>

              <h2>Our mission and vision</h2>

              <p>
                The principles that guide our platform, our service
                delivery and our future direction.
              </p>
            </div>

            <div className="mission-vision-grid">
              <article className="mission-vision-card">
                <div className="mission-vision-icon">◎</div>

                <span className="mission-vision-label">
                  OUR MISSION
                </span>

                <h3>Making digital services simpler</h3>

                <p>
                  Our mission is to make everyday digital services
                  more accessible, convenient and straightforward by
                  providing a customer-focused platform that brings
                  supported services and account tools together.
                </p>
              </article>

              <article className="mission-vision-card vision-card">
                <div className="mission-vision-icon">✧</div>

                <span className="mission-vision-label">
                  OUR VISION
                </span>

                <h3>A trusted digital services platform</h3>

                <p>
                  Our vision is to become a trusted digital services
                  provider recognised for convenience, responsible
                  innovation, customer confidence and a continuously
                  improving digital experience.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CEO MESSAGE */}
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">LEADERSHIP</span>

              <h2>A message from our CEO</h2>

              <p>
                Our commitment to useful technology, responsible
                service and long-term customer trust.
              </p>
            </div>

            <div className="ceo-card">
              <div
                className="ceo-portrait"
                role="group"
                aria-label="Chief Executive Officer portrait"
              >
                <div className="portrait-orbit orbit-one" />
                <div className="portrait-orbit orbit-two" />

                <div className="ceo-photo-frame">
                  <Image
                    src="/images/ceo.jpg"
                    alt="Chief Executive Officer of ONTIME SUBDATA LTD"
                    width={420}
                    height={520}
                    className="ceo-photo"
                    priority
                  />
                </div>

                <span className="portrait-caption">
                  Chief Executive Officer
                </span>
              </div>

              <div className="ceo-message">
                <span className="quote-mark">“</span>

                <p>
                  At ONTIME SUBDATA LTD, our goal is to make everyday
                  digital services easier to access and simpler to use.
                  We believe technology should serve people by reducing
                  friction, providing clear information and helping
                  customers manage their digital needs with confidence.
                </p>

                <p>
                  As we grow, we remain committed to improving our
                  platform, listening to our customers and building
                  lasting relationships through responsible service
                  and continuous improvement.
                </p>

                <p>
                  We look forward to creating more convenient digital
                  experiences and building a platform that customers
                  can confidently use as their needs evolve.
                </p>

                <div className="ceo-signoff">
                  <strong>Musa Sani</strong>

                  <span>Chief Executive Officer</span>

                  <small>ONTIME SUBDATA LTD</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">WHAT GUIDES US</span>

              <h2>Our core values</h2>

              <p>
                The standards we aim to uphold in our products,
                customer relationships and day-to-day operations.
              </p>
            </div>

            <div className="values-grid">
              {values.map((value) => (
                <article key={value.title}>
                  <div className="feature-icon">
                    {value.icon}
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* OUR COMMITMENTS */}
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">OUR COMMITMENT</span>

              <h2>What customers can expect</h2>

              <p>
                We aim to make every interaction with our platform
                clear, convenient and centred on customer needs.
              </p>
            </div>

            <div className="commitments-grid">
              {commitments.map((item) => (
                <article
                  className="commitment-card"
                  key={item.number}
                >
                  <span className="commitment-number">
                    {item.number}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="section">
          <div className="container">
            <div className="cta">
              <div>
                <h2>Let's make digital services easier.</h2>

                <p>
                  Explore our services or contact our team to learn
                  more about ONTIME SUBDATA LTD.
                </p>
              </div>

              <a href="/contact" className="btn">
                Get in touch →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}