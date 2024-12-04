const Projects = () => {
  const projectData = [
    {
      title: "E-Commerce Website",
      tools: "MERN Stack, Payment Gateway, REST API",
      description: [
        "Developed a responsive and user-friendly front-end using React.",
        "Implemented backend services using Node.js and MongoDB for efficient data handling.",
        "Integrated a secure payment gateway for seamless transactions.",
        "Ensured scalability and robustness through REST API development."
      ],
      link: "#", // Placeholder link; update as needed
    },
    {
      title: "Currency Converter",
      tools: "React, API Integration",
      description: [
        "Created a responsive design using React to work across all devices.",
        "Integrated an external API for fetching real-time exchange rates.",
        "Implemented a swap functionality for quick currency interchange.",
        "Supported multiple global currencies to cater to diverse users."
      ],
      link: "https://currency-converter-using-react-vite-m8g7b4wso.vercel.app",
    },
    {
      title: "Vyom - Weather API",
      tools: "JavaScript, Bootstrap, API Integration",
      description: [
        "Designed a clean and intuitive user interface using Bootstrap.",
        "Fetched live weather data using an API for real-time updates.",
        "Ensured cross-device compatibility with responsive design techniques.",
        "Displayed weather details aesthetically with organized sections."
      ],
      link: "https://vyom-aryan-tyagis-projects-7f4efdbe.vercel.app/?vercelToolbarCode=bg1fRzXXiKJvSOx",
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="section-title text-center mb-4">Projects</h2>
        <div className="row">
          {projectData.map((project, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card shadow-sm h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-subtitle text-muted">{project.tools}</p>
                  <ul className="mt-3 flex-grow-1">
                    {project.description.map((point, idx) => (
                      <li key={idx} className="card-text">
                        {point}
                      </li>
                    ))}
                  </ul>
                  {project.link && (
                    <div className="d-flex justify-content-center mt-3">
                      <a
                        href={project.link}
                        className="btn btn-primary w-100"
                        style={{ maxWidth: "200px" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
