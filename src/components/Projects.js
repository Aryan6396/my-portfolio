const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="text-center">Projects</h2>
        <div className="row">
          {/* Project 1: E-Commerce Website */}
          <div className="col-md-4">
            <div className="card project-card">
              <div className="card-body">
                <h5 className="card-title">E-Commerce Website</h5>
                <p className="card-tools"><strong>Tools:</strong> MERN, Payment Gateway, REST API</p>
                <p className="card-text">
                  <ul>
                    <li>Developed the front-end using React, creating a responsive and intuitive UI.</li>
                    <li>Managed backend with NodeJS and MongoDB for efficient data handling.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          {/* Project 2: Currency Converter */}
          <div className="col-md-4">
            <div className="card project-card">
              <div className="card-body">
                <h5 className="card-title">Currency Converter</h5>
                <p className="card-tools"><strong>Tools:</strong> React, API Integration</p>
                <p className="card-text">
                  <ul>
                    <li>Real-time exchange rate fetching using API for accurate conversions.</li>
                    <li>Added swap functionality for seamless currency interchange.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          {/* Project 3: Vyom - Weather API */}
          <div className="col-md-4">
            <div className="card project-card">
              <div className="card-body">
                <h5 className="card-title">Vyom - Weather API</h5>
                <p className="card-tools"><strong>Tools:</strong> JavaScript, API Integration, Bootstrap</p>
                <p className="card-text">
                  <ul>
                    <li>Designed a responsive interface with Bootstrap for cross-device compatibility.</li>
                    <li>Integrated APIs for accurate and real-time weather data.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
