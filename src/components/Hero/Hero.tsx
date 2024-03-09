import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SeperateText from '../common/SeperateText';
import SectionLayout from '../Layouts/SectionLayout';
import './Hero.scss'

const texts = {
    title: 'Front-end Developer',
    name: 'KENTARO OSHIMOTO',
    nameja: '押本健太郎'
}


function Hero() {
    gsap.registerPlugin(ScrollTrigger as gsap.GSAPConfig)
    const nameEn = useRef<HTMLDivElement>(null);
    const heroWrap = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const textArr = document.querySelectorAll('.seperateText');
        textArr.forEach(elm => {
            const textBlockArr = elm.querySelectorAll('.seperateText__block');
          
         
            textBlockArr.forEach((letterBlock, i)=>{
                const lettersArr = letterBlock.querySelectorAll('.letter');

                lettersArr.forEach((letter , index) => {

                    const numFromCenter = index - lettersArr.length/2
                    const child = letter.querySelector("span")
                    gsap.from(child, {
                        opacity: 0,
                        duration: 2,
                        scale: 1,
                        delay: index / 20
                    })
                    const letterTl = gsap.timeline({
                        scrollTrigger: {
                            trigger: heroWrap.current,
                            start: "top top",
                            end: "bottom top",
                            scrub: .3,
                        }
                      })
                    letterTl.fromTo(letter,{
                        y: (-5 *  Math.abs( (numFromCenter % 3) ) ) - 5 ,
                        rotate: 1.2 * numFromCenter,
                        opacity: 1
                    },{
                        y: (-200 *  Math.abs( (numFromCenter % 3) ) ) - 200 ,
                        rotate: 10 * numFromCenter,
                        opacity: 0,
                        ease: "easeIn"
                    })
                })
                
            })    
        })
        
    })
    useEffect(()=> {
        window.addEventListener('load', () => {
            if(document.querySelector('.hero')) {
              document.querySelector('.hero')?.classList.add('is-animate');
            }
          });  
       
    }, [])

   
  return (
    <SectionLayout bgClass='bg-white ' ref={heroWrap} className='hero relative h-screen' >
        <div className='title text-black text-center absolute top-[50%] left-0 w-full translate-y-[-50%]'>
            <div className='name w-full'>
                <h2 ref={nameEn} className='name1 text-center font-semibold pc:text-8xl text-5xl tracking-wider'>
                    <SeperateText breakSP={true} text={texts.name}/>
                </h2>
                <h2 className='pc:mt-2 pc:text-5xl mt-5 text-xl tracking-wider duration-500'>
                    <SeperateText text={texts.nameja}/>
                </h2>
                <p className='hero__ttl pc:mt-5 pc:text-xl tracking-wider  mt-5 text-xp'>
                <SeperateText text={texts.title}/>
                </p>
            </div>
            <img  className='flowers pc:w-40 w-20 brightness-0 mx-auto mt-5' src='/flowers/wedding-flowers-design.svg' alt='flowers'/>
        </div>
    </SectionLayout>
  );
}

export default Hero;
