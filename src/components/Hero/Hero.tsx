import React, { useRef } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SeperateText from '../common/SeperateText';
import SectionLayout from '../Layouts/SectionLayout';

const texts = {
    title: 'A Creative Front-end Web Developer',
    name: 'KENTARO OSHIMOTO',
    nameja: '押本健太郎'
}


function Hero() {
    gsap.registerPlugin(ScrollTrigger as gsap.GSAPConfig)
    const nameEn = useRef<HTMLDivElement>(null);
    const heroWrap = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        if(nameEn.current) {
            const nameEnArr = Array.prototype.slice.call( nameEn.current.children )
         
            nameEnArr.forEach((letter, index)=>{
                const numFromCenter = index - nameEnArr.length/2
                console.log(letter)
                const letterTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: heroWrap.current,
                        start: "top+=100 top",
                        end: "bottom top",
                        scrub: .3,
                    }
                  })
                letterTl.to(letter,{
                    y: -200 *  Math.abs( (numFromCenter % 3) ) - 100 ,
                    rotate: 10 * numFromCenter,
                    ease: "easeIn"
                })
            })    
        }
    })
   
  return (
    <SectionLayout bgClass='bg-neutral-700 ' ref={heroWrap} className='flex items-center justify-end' >
        <div className='title text-slate-100 pr-7'>
            <div className='name '>
                <h2 ref={nameEn} className='name1 pc:text-9xl text-5xl tracking-wider'>
                    <SeperateText text={texts.name}/>
                </h2>
                <h2 className='pc:mt-10 pc:text-4xl'>
                    <SeperateText text={texts.nameja}/>
                </h2>
                <p className=' pc:mt-20 pc:text-xl'>
                {texts.title}
                </p>
            </div>
        </div>
    </SectionLayout>
  );
}

export default Hero;
