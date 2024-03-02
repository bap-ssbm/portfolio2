import React, { useRef } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SeperateText from '../common/SeperateText';
import Divider from '../common/Divider';

const texts = {
    title: 'Front-end Web Developer',
    name: 'Kentaro Oshimoto',
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
                        markers: true
                    }
                  })
                letterTl.fromTo(letter, {
                    y: 0,
                    rotate: 0
                },{
                    y: -200 *  Math.abs( (numFromCenter % 3) ) - 100 ,
                    rotate: 10 * numFromCenter,
                    filter: 'blur(4px)',
                    ease: "easeIn"
                })
            })    
        }
    })
   
  return (
    <div ref={heroWrap} className='hero min-h-screen bg-slate-800 relative '>
        <div className='title text-slate-100 absolute top-[50%] left-[50%]'>
            <div className='name '>
                <h2 ref={nameEn} className='name1 text-9xl tracking-wider'>
                    <SeperateText text={texts.name}/>
                </h2>
                <h2 className=''>
                    <SeperateText text={texts.nameja}/>
                </h2>
            </div>
        </div>
        <Divider color='bg-slate-800'/>
    </div>
  );
}

export default Hero;
