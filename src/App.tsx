import About from "./components/About";
import Experiences from "./components/Experiences";
import Header from "./components/header/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen font-montserrat bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experiences />
    </div>
  );
}

export default App;
