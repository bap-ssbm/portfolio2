import Divider from "../common/Divider/Divider";
import React from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from 'react';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    bgClass: string,
    wave? : true,
    children: React.ReactNode;
}

function SectionLayout({children, bgClass, wave, className, ref, ...props}: Props) {
gsap.registerPlugin(ScrollTrigger as gsap.GSAPConfig)
    const sectionRef = useRef<HTMLDivElement>(null);
    // useGSAP(() => {
    //   const dividerTl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: sectionRef.current,
    //       start: 'bottom top+=100',
    //       end: 'bottom top',
    //       scrub: .1,
    //     }
    //   });
    //   dividerTl.to(sectionRef.current,{
    //    opacity: 0.5,
    //    ease: 'power3.in'
    //   })
    // })
   
  return (
    <div ref={sectionRef} className={bgClass + " relative section"}>
      <div className={' min-h-[800px] relative z-20 pc:mb-[50px] pb-[100px] ' + className} {...props}>
       {children}
       
    </div>
    <Divider color={bgClass} wave={wave}/>
    </div>
   
  );
}

export default SectionLayout;
