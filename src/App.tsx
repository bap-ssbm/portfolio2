import './App.scss';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import Projects from './components/Projects/Projects';


function App() {

  return (
    <div className='overflow-x-hidden'>
      <Header/>
      <Hero/>
      <Projects/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
