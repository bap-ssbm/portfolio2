import './App.scss';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import Projects from './components/Projects/Projects';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(()=> {
    const height = containerRef.current?.clientHeight;//コンテンツの高さを取得
  document.body.style.height = `${height}px`
  if(height && window.innerWidth>=768) {
    gsap.to(containerRef.current, {
      y: -(height - document.documentElement.clientHeight),//ページ内要素の高さ - ウインドウの高さ
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });
  }  
  })
  return (
    <div className='fixed top-0 overflow-hidden right-0 left-0 bottom-0 h-full w-full'>
      <Header/>
      <div ref={containerRef} className='overflow-hidden absolute'>
        <Hero/>
        <Projects/>
        <About/>
        <Footer/>
      </div>
    </div>
    
  );
}

export default App;
