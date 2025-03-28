import About from "./components/layout/About";
import Contact from "./components/layout/Conatct";
import Home from "./components/layout/Hero";
import Projects from "./components/layout/Projects";
import Skills from "./components/layout/Skills";
import Header from "./components/ui/Header";

function App() {
  return (
    <div className="text-slate-100">
      <div className="fixed w-full z-10 top-4 px-6 xl:px-0">
      <Header />
      </div>
      <div className="max-w-6xl mx-auto top-2 mb-14 md:mb-20 relative px-6 xl:px-0">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
