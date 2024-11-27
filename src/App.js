import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './styles.css';


import Experience from './components/experience';

// Inside the App function, include the Experience section
function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experience /> {/* Add this line */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
