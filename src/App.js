import React from 'react';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <main className="App">
        <About />
        <Skills />
        <Education />
        <Projects />
      </main>
    );
  };
};

export default App;
