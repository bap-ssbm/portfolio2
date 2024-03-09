import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef, useState } from 'react';


type Props = {
   
}

function Header() {
    const [rotation, setRotation] = useState(0);
    const [scrolling, setScrolling] = useState(false);
    const flowerRef = useRef<HTMLImageElement>(null)
    const [scrollTop, setScrollTop] = useState(0);
    
    gsap.registerPlugin(ScrollTrigger as gsap.GSAPConfig)
    useEffect(() => {
        const onScroll = (e : any)=> {
          setScrollTop(e.target.documentElement.scrollTop);
          setScrolling(e.target.documentElement.scrollTop > scrollTop);
        };
        window.addEventListener("scroll", onScroll);
        setRotation(scrollTop%360);
        return () => window.removeEventListener("scroll", onScroll);
      }, [scrollTop]);


  return (
   <nav className='nav w-screen fixed left-0 top-0 z-50 pt-2 pl-3'>
    <h1 className='nav__logo italic text-black flex gap-4 items-center'>
    <img ref={flowerRef} style={{ transform: `rotate(${rotation}deg)` }} id='mainflower' className='flower w-10 brightness-0' src='/flowers/flower-with-6-petals.svg' alt='flower'/>
        K.O
    </h1>
   </nav>
  );
}

export default Header;
