import Link from 'next/link'
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <div id='navigation' className='flex flex-row items-center justify-center w-full text-2xl'>
      <div className='flex flex-row justify-center w-1/5 flex-2 gap-x-4'>
        <img src='/logo-bw.png' className='w-24 h-24'></img>
        <div className='flex flex-col justify-center'>
          <span> Dwiprima </span>
          <span> Karyaguna</span>
        </div>
      </div>
      <div className='flex flex-row justify-center flex-auto gap-x-20'>
        <Link href='/'><div className={`hover:underline underline-offset-8 hover:cursor-pointer ${router.pathname == '/' ? 'underline' : ''}`}>Home</div></Link>
        <Link href='/blog'><div className={`hover:underline underline-offset-8 hover:cursor-pointer ${router.pathname == '/blog' ? 'underline' : ''}`}>Blog</div></Link>
      </div>
      <div className='w-1/5 flex-2'>
        {router.pathname == '/' && (
          <Link href='/contact_us'>
            <div className='p-3 text-center text-black bg-white cursor-pointer w-28 hover:bg-gray-400'>Contact</div>
          </Link>
        )}
      </div>
    </div>
  )
}
