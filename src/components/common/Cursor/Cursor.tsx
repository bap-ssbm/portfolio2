
import { useEffect, useRef, useState } from 'react';
import './Cursor.scss';



interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

function Cursor({className, ...props} : Props) {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);
    const [outOfScreen, setoutOfScreen] = useState<boolean>(false);
    const [mouseY, setMouseY] = useState(0);
    const [mouseX, setMouseX] = useState(0);
  
    useEffect(() => {
       
        const positionElement = (e: MouseEvent) => {
            setMouseY(e.clientY - 13);
            setMouseX(e.clientX - 15);
        };

        const hoverHandler = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isHoveringOverAnchor = target.closest('a') !== null;
            setHovered(isHoveringOverAnchor);
        };
        
        const unhoverHandler = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isHoveringOverAnchor = target.closest('a') !== null;
            setHovered(isHoveringOverAnchor);
        };

        window.addEventListener('mousemove', positionElement);
        document.body.addEventListener('mouseover', e => hoverHandler(e));
        document.body.addEventListener('mouseout', e => unhoverHandler(e));
        document.documentElement.addEventListener('mouseleave', () => {
           setoutOfScreen(true);
        });
        document.documentElement.addEventListener('mouseenter', () => {
            setoutOfScreen(false);
        });  

        return () => {
            window.removeEventListener('mousemove', positionElement);
            document.body.addEventListener('mouseover', e => hoverHandler(e));
            document.body.addEventListener('mouseout', e => unhoverHandler(e));
        };
    }, [mouseY, mouseX]);
    
   

  return (
    <div className='pointer-events-none w-screen h-svh fixed top-0 left-0 bg-black mix-blend-difference z-[99999]'>
<div ref={cursorRef} style={{ transform: `translate3d(${mouseX}px, ${mouseY}px, 0)`, display: outOfScreen?'none':'inline-block'}} id='cursor' className='duration-100 cursor pointer-events-none w-10 h-10 mix-blend-difference rounded-full relative z-50 invert pc:inline-blockhidden pc:flex items-center justify-center hidden'>
     {hovered&&<p className='relative z-50 text-black text-2xl mix-blend-difference text-center ease-in duration-100'>押</p>}
    <div style={{ transform: `${hovered? 'scale(5)' : ''}` }}  className='curso__inner w-full h-full rounded-full invert opacity-80 bg-back absolute top-0 left-0 border border-white ease-in-out duration-300 text-sm'>   
    </div>
  </div>
    </div>
  );
}

export default Cursor;
