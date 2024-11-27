const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-lg-5 text-center">
            <img
              src="C:\Users\ASUS\OneDrive\Desktop\new portfolio\my-portfolio\public\logo192.png"
              alt="Aryan Tyagi"
              className="img-fluid rounded-circle shadow-lg"
            />
          </div>
          {/* Text Section */}
          <div className="col-lg-7">
            <h2 className="about-title">About Me</h2>
            <p className="about-text">
              Hi, I'm <strong>Aryan Tyagi</strong>, a passionate and dedicated software developer currently pursuing my
              B.Tech in Computer Science from <strong>Quantum University</strong>. With a knack for innovation and a
              drive to solve real-world problems, I specialize in creating efficient, scalable, and user-friendly
              digital solutions.
            </p>
            <p className="about-text">
              My skill set spans across programming languages like <strong>C++</strong> and <strong>JavaScript</strong>, 
              frameworks like <strong>React</strong>, and backend technologies like <strong>Node.js</strong> and 
              <strong>Express.js</strong>. Whether it's crafting seamless user interfaces or building robust APIs, I 
              approach every project with precision and creativity.
            </p>
            <p className="about-text">
              Beyond coding, I am an avid reader and a sports enthusiast. Cricket has instilled in me a strong sense of 
              teamwork and strategy, which I bring to every collaboration and project I undertake.
            </p>
            <div className="btn-container mt-4">
              <a
                href="#contact"
                className="btn btn-primary shadow-sm btn-lg rounded-pill"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
