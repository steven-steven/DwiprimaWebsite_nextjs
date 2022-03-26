import Head from 'next/head'
import { XCircleIcon as XSolid } from '@heroicons/react/solid'
import { XCircleIcon as XOutline } from '@heroicons/react/outline'
import Link from 'next/link'

export default function Video() {
  return (
    <div>
      <Head>
        <title>Dwiprima Karyaguna</title>
        <link rel="icon" href="/dpLogo.ico" />
      </Head>

      <section className='flex flex-col items-center justify-center h-1 min-h-screen text-white bg-gray-700 py-28'>
        <div className='w-2/3 text-right'>
          <Link href='/'>
            <div className='inline-block w-16 h-16 group'>
              <XSolid className="hidden cursor-pointer group-hover:inline"/>
              <XOutline className="inline group-hover:hidden"/>
            </div>
          </Link>
        </div>
        <div className='mt-5 w-full md:w-[56.25%] relative grow'>
          <iframe className='absolute top-0 left-0 w-full h-full' src="https://www.youtube.com/embed/keCEYHU3zpY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </section>
    </div>
  )
}
