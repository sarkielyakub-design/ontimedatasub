import Brand from "./Brand";

const socials = [
  { label: "Facebook", icon: "f", href: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/", className: "facebook" },
  { label: "TikTok", icon: "♪", href: process.env.NEXT_PUBLIC_TIKTOK_URL || "https://www.tiktok.com/", className: "tiktok" },
  { label: "WhatsApp", icon: "◔", href: process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://www.whatsapp.com/", className: "whatsapp" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-col">
            <Brand light />
            <p className="footer-tagline">Your trusted digital services partner. Simple, convenient and designed to help everyday tasks move OnTime.</p>
            <div className="social-row" aria-label="Social media links">
              {socials.map((social) => (
                <a key={social.label} className={`social-link ${social.className}`} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} title={social.label}>
                  <span aria-hidden="true">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="footer-column">
            <h4>Explore</h4>
            <a href="/">Home</a><a href="/about">About us</a><a href="/services">Our services</a><a href="/contact">Contact</a>
          </div>
          <div className="footer-column">
            <h4>Customer access</h4>
            <a href="/register">Create an account</a><a href="/login">Customer login</a><a href="/dashboard">Customer portal</a><a href="/admin/login">Admin sign in</a>
          </div>
          <div className="footer-column footer-help">
            <h4>Here to help</h4>
            <p>Need assistance with your account or a service? Reach out through our official support channels.</p>
            <a className="footer-contact-link" href="/contact">Visit contact page <span>↗</span></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ONTIME SUBDATA LTD. All rights reserved.</span>
          <span className="footer-bottom-note"><i /> Secure access. Convenient services. OnTime.</span>
        </div>
      </div>
    </footer>
  );
}
