import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

type Props = {
    color : string
}

function Divider({color} : Props) {
  gsap.registerPlugin(ScrollTrigger as gsap.GSAPConfig)
    const dividerRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
      const dividerTl = gsap.timeline({
        scrollTrigger: {
          trigger: dividerRef.current,
          start: 'top bottom',
          end: 'top top',
          scrub: .1,
          markers: true
        }
      });
      dividerTl.to(dividerRef.current,{
        rotate: 5,
        ease: 'ease-in'
      })
    })
   

  return (
   <div ref = {dividerRef} className={color + " w-[calc(100vw+200px)] h-[200px] absolute bottom-[-100px] z-0"}>
   </div>
  );
}

export default Divider;
