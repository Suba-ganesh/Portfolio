import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Mywork from './components/Mywork';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
     <Nav />
     <Hero />
     <About />
     <Mywork/>
    <Contact/>
    </div>
  );
}

export default App;
