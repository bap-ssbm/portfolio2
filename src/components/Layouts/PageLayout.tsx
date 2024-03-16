import ReactLenis from '@studio-freight/react-lenis';
import { useEffect, useState } from 'react';
import Cursor from '../common/Cursor/Cursor';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
}
function getWindowWidth() {
    const { innerWidth: width } = window;
    return width;
  }
function SectionLayout({children,  ...props}: Props) {
    const [windowWidth, setWindowWidth] = useState(getWindowWidth());

    useEffect(() => {
      function handleResize() {
        setWindowWidth(getWindowWidth());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
   
  return (
    <>
    {(windowWidth>768)?
      (<ReactLenis root >
        <Cursor/>
        {children}
        </ReactLenis>):
      ( <div>
            {children}
        </div>)}
    </>
  );
}

export default SectionLayout;
