import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


type Props = {
   
}

function Header() {
  
   

  return (
   <nav className='nav w-screen fixed left-0 top-0 z-50 pt-2 pl-3'>
    <h1 className='nav__logo italic text-black'>
        K.O
    </h1>
   </nav>
  );
}

export default Header;
