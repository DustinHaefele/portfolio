import React from 'react';
import './App.css';
import Header from '../src/Components/Header/Header';
import Hero from '../src/Components/Hero/Hero';
import AboutMe from '../src/Components/AboutMe/AboutMe';
import Skills from '../src/Components/Skills/Skills';
import Projects from '../src/Components/Projects/Projects';
import Contact from '../src/Components/Contact/Contact';



function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <div className ='row'>
          <Skills />
          <Contact />
        </div>
      </main>
      <footer>Built by Dustin Haefele</footer>
    </div>
  );
}

export default App;
