import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import './Heading.scss'



interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    heading: string,
}

function Heading({heading, className, ...props} : Props) {
  gsap.registerPlugin(ScrollTrigger as gsap.GSAPConfig)
    const dividerRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
      const dividerTl = gsap.timeline({
        scrollTrigger: {
          trigger: dividerRef.current,
          start: 'bottom bottom',
          end: 'bottom top',
          scrub: .1,
        }
      });
      dividerTl.to(dividerRef.current,{
        rotate: 5,
        ease: 'ease-in'
      })
    })
   

  return (
   <h2 className={'heading pc:text-5xl text-2xl italic ' + className} {...props}>
        {heading}
   </h2>
  );
}

export default Heading;
