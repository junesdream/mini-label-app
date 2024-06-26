import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Artist from "./components/Artist";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Artist/>
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
