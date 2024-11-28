const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-description">
          Feel free to reach out to discuss opportunities, collaborations, or just to say hi!
        </p>
        <div className="contact-info">
          <div className="contact-card">
            <h4>Email</h4>
            <p>
              <a href="mailto:attyagi101@gmail.com">attyagi101@gmail.com</a>
            </p>
          </div>
          <div className="contact-card">
            <h4>Phone</h4>
            <p>
              <a href="tel:+916396250978">+91 6396250978</a>
            </p>
          </div>
          <div className="contact-card">
            <h4>Social Media</h4>
            <p>
              <a href="https://github.com/Aryan6396" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>{' '}
              |{' '}
              <a
                href="https://linkedin.com/in/aryan-tyagi-088738229"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        <div className="btn-container">
          <a
            href="#about"
            className="btn btn-primary shadow-sm btn-lg rounded-pill"
          >
            Back to Top
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
