import Brand from "./Brand";

export default function PublicNav() {
  return (
    <header className="topbar container">
      <Brand />
      <nav className="navlinks" aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className="inline-actions">
        <a className="btn secondary" href="/login">Log in</a>
        <a className="btn" href="/register">Get started <span>↗</span></a>
      </div>
    </header>
  );
}
