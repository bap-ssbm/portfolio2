import './App.scss';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import Projects from './components/Projects/Projects';
import PageLayout from './components/Layouts/PageLayout';



function App() {



  return (
    <PageLayout>
        <Header/>
        <Hero/>
        <About/>
        <Projects/>
        <Footer/>
    </PageLayout>
  );
}

export default App;
