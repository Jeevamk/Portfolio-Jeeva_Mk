export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="#top" className="logo" aria-label="Jeeva MK, back to top">JM</a>
        <nav aria-label="Main">
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact" className="nav-cta">Contact</a>
        </nav>
      </div>
    </header>
  );
}
