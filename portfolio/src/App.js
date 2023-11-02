import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Brand from "./components/Brands/brand";
import About from "./components/About/about";
import Education from "./components/Eduaction/education";
import Project from "./components/Project/project";
import Contact from "./components/Contact/contact";




function App() {
  return (
    
    <div className="App">
    <Navbar/>
    <Intro/>
    <About />
    <Education />
    <Project /> 
    <Contact />
    <Brand />
    
    
    
    </div>
  
  );
}

export default App;
