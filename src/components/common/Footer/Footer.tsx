import './Footer.scss';


type Props = {
   
}

const iconList = [
    {
        name: 'github',
        src: 'github.svg',
        url: 'https://github.com/bap-ssbm'
    },
    {
        name: 'gmail',
        src: 'gmail.svg',
        url: 'https://mail.google.com/mail/u/0/?fs=1&to=ken.oshimoto@gmail.com&su=&body=&tf=cm'
    },
    {
        name: 'linkedIn',
        src: 'linkedIn.svg',
        url: 'https://www.linkedin.com/in/kentaro-oshimoto/'
    }
]
function Footer() {
   
  return (
   <footer className='footer bg-white w-screen h-fit pc:py-[150px] pt-[50px] pc:pb-[50px] pb-[50px]'>
    <div className='footer__inner pt-20'>
    <div className='flex gap-10 justify-center items-center'>
        {
            iconList.map((elm) => (
                    <a href={elm.url} rel="noreferrer" target='_blank' className='footer__link w-fit brightness-0'>
                        <img id={elm.name} className='pc:w-[30px] w-[20px]' width='30' height='30' src={'/icons/' + elm.src} alt={elm.name} />
                    </a>
            ))
        }
    </div>
    <div className='mx-auto w-fit pc:mt-[100px] mt-10'>
        <img id='footerFlower' className='flower pc:w-[200px] w-[100px] brightness-0 ' src='/flowers/wedding-flowers-design.svg' alt='flower' width='200' height='82'/>
    </div>
    </div>
   </footer>
  );
}

export default Footer;
