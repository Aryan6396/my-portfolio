const Skills = () => {
  return (
    <section id="skills">
      <div className="container text-center">
        <h2>Skills</h2>
        <div className="row">
          {/* Programming Languages */}
          <div className="col-md-4">
            <h3>Programming Languages</h3>
            <ul className="list-unstyled">
              <li>C</li>
              <li>C++</li>
            </ul>
          </div>
          {/* Frontend Development */}
          <div className="col-md-4">
            <h3>Frontend Development</h3>
            <ul className="list-unstyled">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React.js (Framework)</li>
            </ul>
          </div>
          {/* Backend Development */}
          <div className="col-md-4">
            <h3>Backend Development</h3>
            <ul className="list-unstyled">
              <li>Node.js (Runtime Environment)</li>
              <li>Express.js</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
        </div>
        <div className="row">
          {/* Databases */}
          <div className="col-md-4">
            <h3>Databases</h3>
            <ul className="list-unstyled">
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
          </div>
          {/* Tools */}
          <div className="col-md-4">
            <h3>Tools</h3>
            <ul className="list-unstyled">
              <li>Git & GitHub</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
