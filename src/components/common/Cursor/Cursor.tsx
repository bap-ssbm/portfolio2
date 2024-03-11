
import { useEffect, useRef, useState } from 'react';
import './Cursor.scss';



interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

function Cursor({className, ...props} : Props) {
    const cursorRef = useRef<HTMLDivElement>(null);
    const hoverContainer = document.querySelectorAll('a'); 
    const [hovered, setHovered] = useState(false);
    const [mouseY, setMouseY] = useState(0);
    const [mouseX, setMouseX] = useState(0);
  
    useEffect(() => {
        const positionElement = (e: MouseEvent) => {
            setMouseY(e.clientY);
            setMouseX(e.clientX);
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

        return () => {
            window.removeEventListener('mousemove', positionElement);
            document.body.addEventListener('mouseover', e => hoverHandler(e));
            document.body.addEventListener('mouseout', e => unhoverHandler(e));
        };
    }, [mouseY, mouseX]);
    
   

  return (
  <div ref={cursorRef} style={{ transform: `translate3d(${mouseX}px, ${mouseY}px, 0)`}} id='cursor' className='cursor pointer-events-none w-3 h-3 rounded-full relative z-50 bg-black invert pc:inline-blockhidden flex items-center justify-center'>
     {hovered&&<p className='relative z-50 text-white text-sm mix-blend-difference text-center ease-in duration-100'>押</p>}
    <div style={{ transform: `${hovered? 'scale(5)' : ''}` }}  className='curso__inner w-full h-full rounded-full invert bg-back absolute top-0 left-0 bg-white ease-in-out duration-300 text-sm'>   
    </div>
  </div>
  );
}

export default Cursor;
