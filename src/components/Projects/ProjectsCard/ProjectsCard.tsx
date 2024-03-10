
import React from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import './ProjectsCard.scss';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    imgUrl: string,
    alt: string,
    wave? : true,
    children?: React.ReactNode;
}

function ProjectsCard({children, imgUrl, alt, className, ref, ...props}: Props) {
gsap.registerPlugin(ScrollTrigger as gsap.GSAPConfig)
    const cardRef = useRef<HTMLDivElement>(null);
    const coverRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
      const coverTl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'bottom bottom',
          end: 'center center',
          scrub: .5
        }
      });
      coverTl.to(coverRef.current,{
        scaleY: 0,
        duration: .8,
        ease: 'ease-in'
      })
    })
   
  return (
    <div ref={cardRef} className='projectCard relative p-5 h-fit border border-white'>
        <div ref={coverRef}  className="absolute h-full w-full top-0 left-0 bg-black origin-top"/>
      <img className="" src={imgUrl} alt={alt} {...props}/>
    </div>
   
  );
}

export default ProjectsCard;
