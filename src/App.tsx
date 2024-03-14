import './App.scss';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import Projects from './components/Projects/Projects';
import Cursor from './components/common/Cursor/Cursor';
import ReactLenis from '@studio-freight/react-lenis';

function App() {
  
  return (
    <ReactLenis root>
      <Header/>
        <Hero/>
        <Projects/>
        <About/>
        <Footer/>
    </ReactLenis>
    
  );
}

export default App;
