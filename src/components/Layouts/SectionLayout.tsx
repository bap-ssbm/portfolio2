import Divider from "../common/Divider";
import React from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    bgClass: string,
    children: React.ReactNode;
}

function SectionLayout({children, bgClass, className, ref, ...props}: Props) {
gsap.registerPlugin(ScrollTrigger as gsap.GSAPConfig)
    const sectionRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
      const dividerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'bottom top+=100',
          end: 'bottom top',
          scrub: .1,
        }
      });
      dividerTl.to(sectionRef.current,{
       opacity: 0.5,
       ease: 'power3.in'
      })
    })
   
  return (
    <div ref={sectionRef} className="mb-[100px]">
      <div className={bgClass + ' min-h-screen relative ' + className} {...props}>
       {children}
       <Divider color={bgClass}/>
    </div>
    </div>
   
  );
}

export default SectionLayout;
