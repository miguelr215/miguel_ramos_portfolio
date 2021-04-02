import React from 'react';
import { Switch, Route } from 'react-router-dom';
import cases from './cases';
// import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import Contact from './components/Contact/Contact';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cases: [], 
      selectProjectID: 0,
      selectProjectPath: ""
    };
    this.scrollDiv = React.createRef();
  }

  componentDidMount(){
    const caseFile = cases;
    this.setState({
      cases: caseFile
    });
  };

  scrollSmoothHandler = () => {
    this.scrollDiv.current.scrollIntoView({behavior: "smooth"});
  };  
  
  selectProject = (newProjectID, newProjectPath) => {
    this.setState({
      selectProjectID: newProjectID, 
      selectProjectPath: newProjectPath
    });
    this.scrollSmoothHandler();
  };

  render(){
    const { cases, selectProjectID, selectProjectPath } = this.state;
    return (
      <main className="App">
        <div className="sidebar">
          <NavBar />
        </div>
        {/* <Hero /> */}
        <About />
        <Skills />
        <div ref={this.scrollDiv}></div>
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
                onCloseProject={this.scrollSmoothHandler}
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
