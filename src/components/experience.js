const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="text-center">Experience</h2>
        <div className="row">
          {/* Experience 1 */}
          <div className="col-md-6">
            <div className="card experience-card">
              <div className="card-body">
                <h5 className="card-title">Intern | <span className="highlight">Febtech IT Solutions Pvt. Ltd</span></h5>
                <p className="card-text">
                  <ul>
                    <li>
                      Worked on <strong>Full Stack Development</strong>, building responsive web applications and backend APIs.
                    </li>
                    <li>
                      Collaborated with a team to develop scalable and efficient solutions for real-world problems.
                    </li>
                    <li>
                      Utilized tools like <strong>Node.js</strong>, <strong>React</strong>, and <strong>MongoDB</strong> to deliver high-quality projects.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          {/* Experience 2 */}
          <div className="col-md-6">
            <div className="card experience-card">
              <div className="card-body">
                <h5 className="card-title">Hackathon | <span className="highlight">Hack 12</span></h5>
                <p className="card-text">
                  <ul>
                    <li>
                      Participated in a <strong>12-hour hackathon</strong> with a team of 4 to create an innovative <strong>EdTech platform</strong>.
                    </li>
                    <li>
                      Designed user-friendly interfaces and implemented APIs for smooth functionality.
                    </li>
                    <li>
                      Enhanced problem-solving and collaboration skills by working under a tight deadline.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Additional Experience */}
          <div className="col-md-6">
            <div className="card experience-card">
              <div className="card-body">
                <h5 className="card-title">Freelance Project | <span className="highlight">Portfolio Website</span></h5>
                <p className="card-text">
                  <ul>
                    <li>
                      Designed and developed a personal <strong>responsive portfolio website</strong> using <strong>React</strong> and <strong>Bootstrap</strong>.
                    </li>
                    <li>
                      Highlighted key skills and projects to create an interactive and engaging user experience.
                    </li>
                    <li>
                      Ensured cross-browser compatibility and optimized website performance.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          {/* Placeholder for more experiences */}
          <div className="col-md-6">
            <div className="card experience-card">
              <div className="card-body">
                <h5 className="card-title">Project-Based Learning | <span className="highlight">Quantum University</span></h5>
                <p className="card-text">
                  <ul>
                    <li>
                      Completed multiple projects as part of the curriculum, including a <strong>Weather API</strong> project and a <strong>Currency Converter</strong>.
                    </li>
                    <li>
                      Gained expertise in <strong>React</strong>, <strong>JavaScript</strong>, and <strong>API integration</strong>.
                    </li>
                    <li>
                      Focused on delivering user-friendly and scalable solutions.
                    </li>
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

export default Experience;
