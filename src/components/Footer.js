const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <p>&copy; {new Date().getFullYear()} Aryan Tyagi. All rights reserved.</p>
          </div>
          <div className="footer-right">
            <p>Follow me:</p>
            <div className="social-links">
              <a href="https://github.com/Aryan6396" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="https://linkedin.com/in/aryan-tyagi" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="mailto:attyagi101@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope"></i> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
