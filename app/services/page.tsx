import PublicNav from "@/components/PublicNav";
import Footer from "@/components/Footer";

const services = [
  { icon: "▤", title: "Data subscriptions", desc: "Browse available data bundles and choose a plan for a supported mobile network.", tag: "Connectivity" },
  { icon: "↗", title: "Airtime top-up", desc: "Recharge supported mobile networks through the customer portal.", tag: "Mobile" },
  { icon: "ϟ", title: "Electricity bills", desc: "Access supported electricity services. Meter verification and provider availability must be confirmed before purchase.", tag: "Utilities" },
  { icon: "▣", title: "Cable and bill services", desc: "Explore supported digital subscriptions and bill-payment services as they become available on the platform.", tag: "Subscriptions" },
  { icon: "◈", title: "Digital wallet", desc: "Review your wallet balance, deposit activity and transaction history from one account.", tag: "Account" },
  { icon: "♧", title: "Referral programme", desc: "Find your referral code and review referral activity available to your account.", tag: "Rewards" },
];
export default function ServicesPage() {
  return (
    <>
      <PublicNav />
      <main>
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow">OUR SERVICES</span>
            <h1>Everyday essentials, <span>in one place.</span></h1>
            <p>Explore the digital services and account tools available through ONTIME SUBDATA LTD. Availability may depend on your account and connected providers.</p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="service-page-grid">
              {services.map((service) => <article className="service-page-card" key={service.title}>
                <div className="service-card-top"><div className="feature-icon">{service.icon}</div><span>{service.tag}</span></div>
                <h2>{service.title}</h2><p>{service.desc}</p>
                <a href="/register">Get started <span>→</span></a>
              </article>)}
            </div>
            <div className="service-disclaimer"><strong>Before you confirm a transaction</strong><p>Check the recipient, provider, amount and any required transaction PIN. If a provider response is uncertain, review your transaction history before trying again.</p></div>
          </div>
        </section>
        <section className="section soft"><div className="container"><div className="cta"><div><h2>Ready to get started?</h2><p>Create an account to access the services enabled for your profile.</p></div><a className="btn" href="/register">Create an account <span>→</span></a></div></div></section>
      </main>
      <Footer />
    </>
  );
}
