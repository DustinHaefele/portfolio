import React from 'react';
import Header from '../src/Components/Header/Header';
import Hero from '../src/Components/Hero/Hero';
import AboutMe from '../src/Components/AboutMe/AboutMe';
import Projects from '../src/Components/Projects/Projects';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Projects />
      </main>
    </div>
  );
}

export default App;
