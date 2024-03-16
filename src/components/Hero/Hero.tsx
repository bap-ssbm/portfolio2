import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SeperateText from '../common/SeperateText';
import SectionLayout from '../Layouts/SectionLayout';
import './Hero.scss';
import FlowerSvg from '../common/FlowerSvg/FlowerSvg';

const texts = {
    title: 'Front-end Developer',
    firstName: 'KENTARO',
    lastName: 'OSHIMOTO',
    nameja: '押本健太郎'
}


function Hero() {
    gsap.registerPlugin(ScrollTrigger as gsap.GSAPConfig)
    const nameEn = useRef<HTMLDivElement>(null);
    const heroWrap = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const hero = document.querySelector('.hero');
        const textArr = hero?.querySelectorAll('.seperateText');
  
        if(textArr)textArr.forEach(elm => {
           
            const textBlockArr = elm.querySelectorAll('.seperateText__block');
          
         
            textBlockArr.forEach((letterBlock, i)=>{
                const lettersArr = letterBlock.querySelectorAll('.letter');

                lettersArr.forEach((letter , index) => {

                    const numFromCenter = index - lettersArr.length/2
                    const child = letter.querySelector("span")
                    gsap.from(child, {
                        y:'100%',
                        opacity: 0,
                        duration: .5,
                        delay: index % 5 / 8 ,
                        ease: ''
                    })
                    const letterTl = gsap.timeline({
                        scrollTrigger: {
                            trigger: heroWrap.current,
                            start: "top top",
                            end: "bottom top",
                            scrub: .3,
                        }
                      })
                    letterTl.to(letter,{
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
          if (document.readyState === "complete") {
            document.querySelector('.hero')?.classList.add('is-animate');
          } else {
            document.querySelector('.hero')?.classList.add('is-animate');
          }
    }, [])

   
  return (
    <SectionLayout bgClass='bg-black     ' ref={heroWrap} className='hero relative h-screen' >
        <div className='title text-white text-center absolute h-full top-[50%] left-0 w-full translate-y-[-50%]'>
            <h2 ref={nameEn} className='name1 absolute top-[50%] left-[50%] translate-x-[-50%] w-full text-center translate-y-[-50%] whitespace-nowrap font-bold pc:text-7xl text-3xl tracking-wider'>
                        <SeperateText breakSP={true} text={texts.firstName}/>
                        <SeperateText breakSP={true} text={texts.lastName}/>
            </h2>
            <div className='imgWrapper w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                   
                    <div  className='flowers w-screen pc:max-w-[1000px] pc:min-w-[500px] brightness-200 mx-auto invert'>
                        <FlowerSvg/>
                    </div>
            </div>
            
        </div>
    </SectionLayout>
  );
}

export default Hero;
