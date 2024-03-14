import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import './MaskText.scss'
import SeperateText from '../SeperateText';



interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    heading: string,
    seperate?: boolean
}

function MaskText({heading, seperate, className, ...props} : Props) {
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
    <span ref={coverRef} className='maskText__cover w-fit inline-block'>
    {seperate?<SeperateText text={heading}/>:heading}
    </span>
    <span ref={baseRef} className='maskText__base w-fit inline-block'>
    {seperate?<SeperateText text={heading}/>:heading}
    </span>
   </span>
  );
}

export default MaskText;
