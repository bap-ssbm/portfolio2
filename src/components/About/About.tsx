import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './About.scss'


import SectionLayout from '../Layouts/SectionLayout';

const texts = {
    title: 'ABOUT ME',
    txt: "Born and raised in America,\nnow living in Tokyo, Japan.\n\nI love creative hobbies like dancing, and drawing.\nI also love playing video games on my pc =)!\n\nCurrently working at a Japanese startup company.",
    nameja: '押本健太郎'
}


function About() {
 
  gsap.registerPlugin(ScrollTrigger as gsap.GSAPConfig)
  useGSAP(()=>{
    const aboutSect = document.querySelector('.aboutSect');

    const aboutWrapper = aboutSect?.querySelector('.wrapper');
    const linesArr = aboutSect?.querySelectorAll('.line');
  
    
    linesArr?.forEach(line => {
      const lineTl = gsap.timeline({
        scrollTrigger: {
              trigger: aboutWrapper,
              start: 'top bottom',
              end: 'bottom center',
              scrub: 1,
            }
      })
        lineTl.from(line, {
          scale: 0,
          ease: 'ease-in'
        })
    })
  })
   
   
  return (
    <SectionLayout  bgClass='bg-slate-500'  className='z-0 aboutSect relative pc:pt-[300px] pt-[100px] text-white' >
        <div className='wrapper relative'>
          <div className='line'/>
          <div className='line'/>
          <div className='line'/>
          <div className='line'/>
          <div className='w-full'>

          </div>
          <h2 className='text-5xl italic text-center'>
          {texts.title}
          </h2>
          <p className='txt mt-7 pc:w-[50vw] text-center mx-auto'>
            {texts.txt}          
          </p>
        </div>
    </SectionLayout>
  );
}

export default About;
