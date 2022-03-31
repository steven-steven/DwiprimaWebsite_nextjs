import Link from 'next/link'
import { useRouter } from "next/router";
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { useState } from 'react';
import Image from 'next/image';

const content = {
  "en-US": {
    language: "Select Language",
  }, 
  "id-ID": {
    language: "Pilih Bahasa",
  }
}

export default function NavBar({locale}) {
  const router = useRouter();
  const [ isHamburgerOpen, setIsHamburgerOpen ] = useState(false);
  const localeContent = content[locale];

  const changeLocale = () => {
    if (locale !== "id-ID"){
      router.push(router.asPath, router.asPath,  { locale: "id-ID" })
    } else {
      router.push(router.asPath, router.asPath, { locale: "en-US" });
    }
  }

  return (
    <div id='navigation' className='flex flex-row items-center justify-between w-full text-sm md:text-2xl md:justify-center'>
      <Link href={'/'}>  
        <div className='flex flex-row pl-5 md:w-1/5 flex-2 gap-x-2 md:gap-x-4'>
          <div id='logo' className='relative w-12 h-12 md:w-24 md:h-24'>
            <Image
              src='/logo-bw.png'
              layout='fill'
              objectFit="contain"
              quality={30}
            />
          </div>
          <div className='flex flex-col justify-center invisible xxs:visible'>
            <span> Dwiprima </span>
            <span> Karyaguna</span>
          </div>
        </div>
      </Link>
      <div className='flex-row justify-center flex-auto hidden md:flex gap-x-20'>
        <Link href='/'><div className={`hover:underline underline-offset-8 hover:cursor-pointer ${router.pathname == '/' ? 'underline' : ''}`}>Home</div></Link>
        <Link href='/blog' locale={false}><div className={`hover:underline underline-offset-8 hover:cursor-pointer ${router.pathname == '/blog' ? 'underline' : ''}`}>Blog</div></Link>
      </div>
      <div className='flex ml-auto md:ml-0 md:mr-24 flex-2 md:min-w-[150px]'>
        {router.pathname == '/' && (
          <div className='flex items-center'>
            <Link href='/contact_us'>
              <div className='hidden p-3 text-center text-black bg-white cursor-pointer md:inline-block w-28 hover:bg-gray-400'>Contact</div>
            </Link>

            <div className='flex items-center justify-center md:ml-10 md:flex-col'>
              <span className='hidden w-12 mr-3 text-xs text-right md:w-auto xs:inline-block md:text-base'>{localeContent.language}</span>

              <div className="relative inline-block w-10 mr-2 align-middle transition duration-200 ease-in select-none md:w-20"
                onClick={changeLocale}
              >
                <input type="checkbox" name="toggle" 
                  className='absolute z-10 block w-5 h-5 bg-white border-4 border-white rounded-full appearance-none cursor-pointer md:w-10 md:h-10 checked:right-0 opacity-40'
                  checked={locale === "id-ID"}
                  readOnly
                />
                <div className='relative block h-5 overflow-hidden rounded-full cursor-pointer md:h-10'>
                  <label htmlFor="toggle" />
                  <div className='absolute w-full h-full'>
                    <Image
                      src="/indo_flag.svg"
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                    <div className={locale === "id-ID" ? 'hidden': 'block'}>
                      <Image
                        src="/us_flag.svg"
                        layout="fill"
                        objectFit="cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        )}
      </div>

      <MenuIcon className="w-8 h-8 mr-10 md:hidden flex-2" onClick={() => setIsHamburgerOpen(true)}/>
      <div className={`fixed ease-in-out duration-300 bottom-0 right-0 w-1/2 h-screen bg-blue-400 md:hidden ${isHamburgerOpen ? "translate-x-0 " : "translate-x-full"}`}>
        <div className='flex flex-col pt-20 pl-10 text-2xl text-black gap-y-10'>
          <XIcon className='self-end w-12 h-12 my-6 mr-10' onClick={() => setIsHamburgerOpen(false)}/>
          <Link href='/'><span className="active:text-white">Home</span></Link>
          <Link href='/blog' locale={false}><span className="active:text-white">Blog</span></Link>
          <Link href='/contact_us' locale={false}><span className="active:text-white">Contact</span></Link>
        </div>
      </div>
    </div>
  )
}
