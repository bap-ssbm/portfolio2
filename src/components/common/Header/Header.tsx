import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';

type Props = {
   
}
function Header() {
    const [rotation, setRotation] = useState(0);
    const [scrolling, setScrolling] = useState(false);
    const flowerRef = useRef<HTMLImageElement>(null)
    const navRef = useRef<HTMLDivElement>(null)
    const [scrollTop, setScrollTop] = useState(0);
    const [whiteFilter, setWhiteFilter] = useState('invert-0');
    
    gsap.registerPlugin(ScrollTrigger as gsap.GSAPConfig)
    useEffect(() => {
        const onScroll = (e : any)=> {
          setScrollTop(e.target.documentElement.scrollTop);
          setScrolling(e.target.documentElement.scrollTop > scrollTop);
        };
        const darkSect = document.querySelectorAll('.bg-black');
        if(darkSect.length) {
            darkSect.forEach(sect => {
                const divider = sect.querySelector('.divider');
                if(sect.classList.contains('section') && divider?.getBoundingClientRect().bottom){
                    if(sect.getBoundingClientRect().top < 0) {
                        setWhiteFilter('invert');
                        if(divider?.getBoundingClientRect().bottom - (window.innerWidth>=768?260:100) < 0) {
                            setWhiteFilter('invert-0');
                        }
                    } else if(sect.getBoundingClientRect().top > 0) {
                        setWhiteFilter('invert-0');
                    }
              
                }
               
            })
        }

        window.addEventListener("scroll", onScroll);
        setRotation(scrollTop%360);
        return () => window.removeEventListener("scroll", onScroll);
      }, [scrollTop]);


  return (
   <nav ref={navRef} className={'nav w-screen fixed left-0 top-0 z-50 pc:h-[70px] h-[50px] pc:pl-5 pl-3 duration-300 ' + whiteFilter}>
    <h1 className='nav__logo italic text-black flex gap-4 items-center h-full'>
    <img ref={flowerRef} style={{ transform: `rotate(${rotation}deg)` }} id='mainflower' className='flower pc:w-10 w-8 brightness-0' src='/flowers/flower-with-6-petals.svg' alt='flower' width='57' height='57'/>
        K.O
    </h1>
   </nav>
  );
}

export default Header;
