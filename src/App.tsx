import './App.scss';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import Projects from './components/Projects/Projects';
import Cursor from './components/common/Cursor/Cursor';
import ReactLenis from '@studio-freight/react-lenis';
import { useEffect, useState } from 'react';

function getWindowWidth() {
  const { innerWidth: width } = window;
  return width;
}

function App() {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <>
    {(windowWidth>768)?
      (<ReactLenis root >
      <Header/>
        <Hero/>
        <Projects/>
        <About/>
        <Footer/>
    </ReactLenis>):
      (<div>
      <Header/>
        <Hero/>
        <Projects/>
        <About/>
        <Footer/>
    </div>)
    }
    
    </>
    
    
  );
}

export default App;
