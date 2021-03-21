import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import cases from './cases';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import Contact from './components/Contact/Contact';
import './App.css';

class App extends React.Component {
  state = {
    cases: [], 
    selectProjectID: 0,
    selectProjectPath: ""
  };

  componentDidMount(){
    const caseFile = cases;
    this.setState({
      cases: caseFile
    });
  };

  selectProject = (newProjectID, newProjectPath) => {
    console.log(newProjectID);
    this.setState({
      selectProjectID: newProjectID, 
      selectProjectPath: newProjectPath
    })
  };

  render(){
    const { cases, selectProjectID, selectProjectPath } = this.state;
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
            render={() => 
              <Projects 
                cases={cases}
                onSelectProject={this.selectProject}
              />
            }
          />
          <Route 
            path={`/project/:${selectProjectPath}`}
            render={() =>
              <ProjectDetails 
                cases={cases}
                selectProjectID={selectProjectID}
              />
            }
          />
        </Switch>
        <Education />
        <Contact />
      </main>
    );
  };
};

export default App;
