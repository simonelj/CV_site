import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects"; 
import Contact from "./components/Contact";

function App() {
  return( 
  <div className="min-h-screen bg-indigo-950 text-white overflow-hidden">
    <div className="absolute bottom-0 right-0 w-100 h-100 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute top-0 left-20 w-100 h-100 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />

    <Navbar />
    <div className="max-w-4xl md:mx-auto m-4">
       <Hero />
      <About />
      <WorkExperience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
   
  </div>
  )
}

export default App;
