import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import './Divider.scss'


type Props = {
    color : string,
    wave? : boolean
}

function Divider({color, wave} : Props) {
  gsap.registerPlugin(ScrollTrigger as gsap.GSAPConfig)
    const dividerRef = useRef<HTMLDivElement>(null);
    const waveRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
      const dividerTl = gsap.timeline({
        scrollTrigger: {
          trigger: dividerRef.current,
          start: 'bottom bottom',
          end: 'bottom top',
          scrub: .1,
        }
      });
      dividerTl.fromTo(dividerRef.current ,{
        rotate: -2,
        ease: 'ease-in'
      },{
        rotate: 5,
        ease: 'ease-in'
      })

      if(wave) {
        const waveTl = gsap.timeline({
          repeat: -1
        })
        waveTl.to(waveRef.current, {
          x: '100vw',
          duration: 10,
          ease:'linear'
        })
      }
    })
   

  return (
   <div ref = {dividerRef} className={(wave?'bg-[#273036]' : color) + " divider w-[calc(100vw*2)] left-[50%] translate-x-[-50%] pc:h-[300px] h-[200px] absolute pc:bottom-[-200px] bottom-[-35px] z-10"}>
    {wave&&<div ref={waveRef} className='absolute left-[-50%] bottom-[80%] w-[calc(100vw*2)] flex'>
    <svg className='flex-1 w-[50%]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,96L18.5,85.3C36.9,75,74,53,111,64C147.7,75,185,117,222,122.7C258.5,128,295,96,332,74.7C369.2,53,406,43,443,42.7C480,43,517,53,554,90.7C590.8,128,628,192,665,208C701.5,224,738,192,775,202.7C812.3,213,849,267,886,277.3C923.1,288,960,256,997,224C1033.8,192,1071,160,1108,138.7C1144.6,117,1182,107,1218,112C1255.4,117,1292,139,1329,138.7C1366.2,139,1403,117,1422,106.7L1440,96L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path></svg>
    <svg className='flex-1 w-[50%]'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,96L18.5,85.3C36.9,75,74,53,111,64C147.7,75,185,117,222,122.7C258.5,128,295,96,332,74.7C369.2,53,406,43,443,42.7C480,43,517,53,554,90.7C590.8,128,628,192,665,208C701.5,224,738,192,775,202.7C812.3,213,849,267,886,277.3C923.1,288,960,256,997,224C1033.8,192,1071,160,1108,138.7C1144.6,117,1182,107,1218,112C1255.4,117,1292,139,1329,138.7C1366.2,139,1403,117,1422,106.7L1440,96L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path></svg>
      </div>}
   </div>
  );
}

export default Divider;
