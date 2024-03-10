import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './About.scss'


import SectionLayout from '../Layouts/SectionLayout';
import MaskText from '../common/MaskText/MaskText';

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
              end: 'center bottom',
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
    <SectionLayout  bgClass='bg-slate-100'  className='z-0 aboutSect relative pc:pt-[300px] pt-[100px] text-black' >
        <div className='wrapper relative'>
          <div className='line'/>
          <div className='line'/>
          <div className='line'/>
          <div className='line'/>
          <div className='w-full'>

          </div>
          <h2>
          <MaskText heading={texts.title} className='pc:text-9xl text-3xl font-bold'/>
          </h2>
          <p className='pc:text-8xl text-2xl  mt-7 '>
            <span className='opacity-40'>Born and raised in </span>
            <MaskText heading='America,' className='pc:text-8xl text-2xl font-semibold'/>
            <span className='opacity-40'> now living in </span>
            <MaskText heading='Tokyo, Japan.' className='pc:text-8xl text-2xl font-semibold'/><br/>
            <span className='opacity-40'> Currently working as a </span>
            <MaskText heading='Front-end Developer' className='pc:text-8xl text-2xl font-semibold'/> 
            <span className='opacity-40'> at a Japanese </span>
            <MaskText heading='startup company.' className='pc:text-8xl text-2xl font-semibold'/> 
          </p>
        </div>
    </SectionLayout>
  );
}

export default About;
