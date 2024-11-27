const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a href="#home" className="navbar-brand">
            <span className="brand-highlight">Aryan Tyagi</span>
          </a>
          <ul className="nav-options">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
