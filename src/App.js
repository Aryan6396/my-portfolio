import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/experience';
import Skills from './components/Skills';
import Certifications from './components/Certificate';
import Contact from './components/Contact';
import Footer from './components/Footer';


import './styles.css';






function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
