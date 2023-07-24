import './App.css';
import Contact from './component/Contact';
import Hero from './component/Hero';
import Who from './component/Who';
import Works from './component/Works';

function App() {
  return (
    <div className="bg-[#9600FA] w-[100vw] h-[100vh]">
      <Contact/>
      <Hero/>
      <Who/>
      <Works/>
    </div>
  );
}

export default App;
