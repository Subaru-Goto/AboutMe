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
    <div className="min-h-screen font-montserrat bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
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
