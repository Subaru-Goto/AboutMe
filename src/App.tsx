import About from "./components/About";
import Contacts from "./components/contacts/Contacts";
import Experiences from "./components/experience/Experiences";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experiences />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
