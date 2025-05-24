import About from "./components/About";
import Header from "./components/header/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen font-montserrat bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;
