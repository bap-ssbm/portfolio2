import React, { useLayoutEffect, useRef } from 'react';
import './App.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Hero from './components/Hero/Hero';


function App() {

  

  return (
    <div className='overflow-x-hidden'>
      <Hero/>

      <div className='h-dvh'>

</div>
    </div>
  );
}

export default App;
