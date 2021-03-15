import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <main className="App">
        <div className="sidebar">
          <NavBar />
        </div>
        <Hero />
        <About />
        <Skills />
        <Switch>
          <Route 
            exact
            path="/"
            component={Projects} 
          />
        </Switch>
        <Education />
        <Contact />
      </main>
    );
  };
};

export default App;
