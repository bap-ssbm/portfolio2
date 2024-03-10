import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Projects.scss'


import SectionLayout from '../Layouts/SectionLayout';
import MaskText from '../common/MaskText/MaskText';
import ProjectsCard from './ProjectsCard/ProjectsCard';

const content = {
    title: 'PROJECTS',
    projectList: [
        {
            title: 'oshimoto.net',
            src: '/projects/oshimotonet.png',
            link: 'https://www.oshimoto.net/'
        },
        {
            title: 'seta-tei.net',
            src: '/projects/seta-tei.png',
            link: 'https://www.seta-tei.jp/'
        }
    ]
}


function Projects() {
 
  gsap.registerPlugin(ScrollTrigger as gsap.GSAPConfig)
  useGSAP(()=>{
    const projectsSect = document.querySelector('.projectsSect');

    const aboutWrapper = projectsSect?.querySelector('.wrapper');
    const linesArr = projectsSect?.querySelectorAll('.line');
  
    
    linesArr?.forEach(line => {
      const lineTl = gsap.timeline({
        scrollTrigger: {
              trigger: aboutWrapper,
              start: 'top bottom',
              end: 'center bottom',
              scrub: 1,
            }
      })
        lineTl.from(line, {
          scale: 0,
          ease: 'ease-in',
          duration: 1
        })
    })
  })
   
   
  return (
    <SectionLayout  bgClass='bg-black'  className='z-0 projectsSect relative pc:pt-[300px] pt-[100px] text-white' >
        <div className='wrapper relative'>
          <div className='line'/>
          <div className='line'/>
          <div className='line'/>
          <div className='line'/>
          <div className='w-full'>
          </div>
          <h2>
          <MaskText heading={content.title} className='pc:text-8xl text-2xl font-bold'/>
          </h2>
         <div className='pc:flex gap-9 pc:mt-20 mt-10 brightness-75'>
            {
                content.projectList.map((item) => (
                    <ProjectsCard link={item.link} imgUrl={item.src} alt={item.title}/>
                ))
            }
         </div>
        </div>
    </SectionLayout>
  );
}

export default Projects;
