import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import AboutMe from './AboutMe'
import Connect from './Connect';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="aboutme">
        <AboutMe />
      </div>
      <div id="connect">
        <Connect/>
      </div>
    </div>
  );
}

export default App;
