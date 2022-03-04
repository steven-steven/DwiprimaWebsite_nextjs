import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dwiprima Karyaguna</title>
        <link rel="icon" href="/dpLogo.png" />
      </Head>

      <section className='h-1 min-h-screen text-white bg-cover bg-main-bg'>
        <div className='h-full bg-blue-900 opacity-90'>
          <div className='flex flex-col h-full'>
            <div id='navigation' className='flex flex-row items-center justify-center h-48 text-2xl'>
              <div className='flex flex-row justify-center w-1/5 flex-2 gap-x-4'>
                <img src='/logo-bw.png' className='w-24 h-24'></img>
                <div className='flex flex-col justify-center'>
                  <span> Dwiprima </span>
                  <span> Karyaguna</span>
                </div>
              </div>
              <div className='flex flex-row justify-center flex-auto gap-x-20'>
                <div className='hover:underline underline-offset-8 hover:cursor-pointer'>Home</div>
                <div className='hover:underline underline-offset-8 hover:cursor-pointer'>Work</div>
                <div className='hover:underline underline-offset-8 hover:cursor-pointer'>Blog</div>
              </div>
              <div className='w-1/5 flex-2'>
                <div className='p-3 text-center text-black bg-white cursor-pointer w-28 hover:bg-gray-400'>Contact</div>
              </div>
            </div>
            <div className='flex flex-row items-center h-full'>
              <div className='flex flex-col w-2/3 h-full px-16 pt-3 justify-evenly'>
                <p className='text-4xl'> A leading <u>Sandblasting</u>, <u>Painting</u> & <u>Heavy Equipment Rental</u> company in Indonesia</p>
                <p className='text-2xl'>Started in 1996, we've grown and is commited to provide the best quality work and expertise you can trust</p>
                <div className='w-4/5 ml-5 shadow-spray-effect'>
                  <img src='/img/blast1.png' className='object-scale-down'/>
                </div>
              </div>
              <div className='flex flex-col items-center justify-end h-full'>
                <img src='/img/wheel.png' className='w-64 h-64'/>
                <img src='/img/cowboy.png' className='h-2/5'/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='h-screen bg-green-200'>
        Truste
      </section>

      <footer>

      </footer>
    </div>
  )
}
