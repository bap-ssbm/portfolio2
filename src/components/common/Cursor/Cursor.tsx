
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
  <div ref={cursorRef} style={{ transform: `translate3d(${mouseX}px, ${mouseY}px, 0) ${hovered? 'scale(5)' : ''}` }} id='cursor' className='cursor pointer-events-none w-3 h-3 rounded-full relative z-50 bg-black invert pc:inline-block hidden'>
  </div>
  );
}

export default Cursor;
