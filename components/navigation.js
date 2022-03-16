import Link from 'next/link'
import { useRouter } from "next/router";
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { useState } from 'react';

export default function NavBar() {
  const router = useRouter();
  const [ isHamburgerOpen, setIsHamburgerOpen ] = useState(false);

  return (
    <div id='navigation' className='flex flex-row items-center justify-between w-full text-lg md:text-2xl md:justify-center'>
      <Link href={'/'}>  
        <div className='flex flex-row pl-5 md:w-1/5 flex-2 gap-x-2 md:gap-x-4'>
          <img src='/logo-bw.png' className='w-16 h-16 md:w-24 md:h-24'></img>
          <div className='flex flex-col justify-center'>
            <span> Dwiprima </span>
            <span> Karyaguna</span>
          </div>
        </div>
      </Link>
      <div className='flex-row justify-center flex-auto hidden md:flex gap-x-20'>
        <Link href='/'><div className={`hover:underline underline-offset-8 hover:cursor-pointer ${router.pathname == '/' ? 'underline' : ''}`}>Home</div></Link>
        <Link href='/blog'><div className={`hover:underline underline-offset-8 hover:cursor-pointer ${router.pathname == '/blog' ? 'underline' : ''}`}>Blog</div></Link>
      </div>
      <div className='hidden w-1/5 flex-2 md:flex'>
        {router.pathname == '/' && (
          <Link href='/contact_us'>
            <div className='p-3 text-center text-black bg-white cursor-pointer w-28 hover:bg-gray-400'>Contact</div>
          </Link>
        )}
      </div>

      <MenuIcon className="w-12 h-12 mr-10 md:hidden flex-2" onClick={() => setIsHamburgerOpen(true)}/>
      <div className={`fixed ease-in-out duration-300 bottom-0 right-0 w-1/2 h-screen bg-blue-400 md:hidden ${isHamburgerOpen ? "translate-x-0 " : "translate-x-full"}`}>
        <div className='flex flex-col pl-10 text-2xl text-black gap-y-10'>
          <XIcon className='self-end w-12 h-12 my-6 mr-10' onClick={() => setIsHamburgerOpen(false)}/>
          <Link href='/'><span className="active:text-white">Home</span></Link>
          <Link href='/blog'><span className="active:text-white">Blog</span></Link>
          <Link href='/contact_us'><span className="active:text-white">Contact</span></Link>
        </div>
      </div>
    </div>
  )
}
