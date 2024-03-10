import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import './MaskText.scss'



interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    heading: string,
}

function MaskText({heading, className, ...props} : Props) {
  gsap.registerPlugin(ScrollTrigger as gsap.GSAPConfig);
    const coverRef = useRef<HTMLDivElement>(null);
    const baseRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
      const maskTl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'bottom bottom',
          end: 'center center',
          scrub: .1,
        }
      })
      maskTl.to(headingRef.current, {
        '--text-mask': '100%',
        ease: 'ease-in'
      });
        
    })
   

  return (
   <span  ref={headingRef} className={'maskText w-fit ' + className} {...props}>
    <div ref={coverRef} className='maskText__cover w-fit'>
    {heading}
    </div>
    <div ref={baseRef} className='maskText__base w-fit '>
    {heading}
    </div>
   </span>
  );
}

export default MaskText;
