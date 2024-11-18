import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tech from "./components/Tech";

function App() {
  return (
    <div className="text-2xl font-bold text-blue-800">
      <div
        className="fixed -z-10 min-h-screen w-full"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
        }}
      ></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;

