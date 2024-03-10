import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import './Heading.scss'



interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    heading: string,
}

function Heading({heading, className, ...props} : Props) {
  gsap.registerPlugin(ScrollTrigger as gsap.GSAPConfig);
    const coverRef = useRef<HTMLDivElement>(null);
    const baseRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
      const maskTl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'bottom bottom',
          end: 'top top',
          scrub: .1,
        }
      })
      maskTl.to(headingRef.current, {
        '--text-mask': '100%',
        ease: 'ease-in'
      });
        
    })
   

  return (
   <h2  ref={headingRef} className={'heading pc:text-8xl text-2xl font-semibold w-fit' + className} {...props}>
    <div ref={coverRef} className='heading__cover w-fit'>
    {heading}
    </div>
    <div ref={baseRef} className='heading__base w-fit'>
    {heading}
    </div>
   </h2>
  );
}

export default Heading;
