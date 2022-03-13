import Head from 'next/head'
import { PlayIcon, DownloadIcon } from '@heroicons/react/solid'
import { PlayIcon as PlayOutline } from '@heroicons/react/outline'
import ContactForm from '../components/contact_form'
import Link from 'next/link'
import NavBar from '../components/navigation'
import { Parallax } from 'react-scroll-parallax';
import { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  const [scrollParallaxNum, setScrollParallaxNum] = useState(0);

  return (
    <div>
      <Head>
        <title>Dwiprima Karyaguna</title>
        <link rel="icon" href="/dpLogo.png" />
      </Head>

      <section className='h-1 min-h-screen text-white bg-cover bg-main-bg'>
        <div className='h-full bg-primary-blue opacity-90'>
          <div className='flex flex-col h-full'>
            <div className='fixed top-0 left-0 right-0 z-50 flex justify-center h-24 bg-primary-blue opacity-90 md:h-48 md:relative'>
              <NavBar/>
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

      <section className='mb-10 bg-white'>
        <p className='my-10 text-2xl text-center md:text-4xl'>Trusted by partners like</p>
        <div className="grid items-stretch justify-around grid-cols-4 mx-20 md:grid-cols-6 justify-items-center gap-x-12">
          { [...Array(23).keys()].map(i => <img key={i} className='object-scale-down h-16 cursor-pointer md:h-32 md:grayscale hover:grayscale-0' src={`/clientLogos/${i+1}.png`}/> )}
        </div>
      </section>

      <section id='showcase_video' className='bg-center bg-cover h-96 bg-vid-preview'>
        <div className='h-full bg-opacity-60 bg-video-blue'>
          <div className='flex flex-col justify-center h-full text-4xl'>
            <p className='mb-10 text-center'>Ready to see how we can help?</p>
            <Link href="/video">
              <div className='inline-block px-10 py-6 mx-auto my-0 align-middle border border-black hover:bg-opacity-50 hover:cursor-pointer hover:bg-gray-700 group rounded-3xl'>
                <PlayIcon className="hidden w-16 h-16 text-blue-700 group-hover:inline"/>
                <PlayOutline className="inline w-16 h-16 text-blue-700 group-hover:hidden"/>
                <span>&nbsp; Watch Now</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id='about_us' className='bg-white'>
        <div className='flex items-center text-4xl'>
          <p className='inline-block w-1/3 font-semibold text-center'>About Us</p>
          <p className='w-2/3 py-20 pr-20 text-xl'>Founded in 1993, at the moment PT. Dwiprima Karyaguna has grown rapidly and has expanded to outer Java area throughout Batam and Pekanbaru.
          <br/><br/>
          Our company has gained trust from companies, such as Government Owned Company (BUMN), national private and foreign companies.
          We also maintain a relationship with material vendors needed in our projects, some are paint producers and other material producers in Indonesia.
          <br/><br/>
          Our commitment is to become the best company in SANDBLAST, PAINT, CONCRETE REPAIR & HEAVY EQUIPMENT RENTAL which supply quality and quantity as per customer request. </p>
        </div>
      </section>

      <ParallaxProvider>
      <section id='services' className='text-white bg-white'>
        <div className='sticky top-0 z-10 flex flex-col px-5 py-2 text-lg bg-white md:flex-row md:text-xl gap-y-2 md:gap-x-2 bg-opacity-90'>
          <div className={`p-5 rounded-xl ${scrollParallaxNum == 0 ? 'bg-primary-blue':'bg-gray-400'}`}>Sandblasting</div>
          <div className={`p-5 rounded-xl ${scrollParallaxNum == 1 ? 'bg-primary-blue':'bg-gray-400'}`}>Painting</div>
          <div className={`p-5 rounded-xl ${scrollParallaxNum == 2 ? 'bg-primary-blue':'bg-gray-400'}`}>Heavy Equipment Rental</div>
        </div>
        <div className='relative flex flex-col'>
          <div id='sandblasting' className='bg-main-bg'>
            <div className='flex flex-col px-8 py-48 md:flex-row bg-primary-blue opacity-90'>

              <img src='/img/blasting.png' className='w-1/2'/>
              <Parallax speed={50} onEnter={()=> setScrollParallaxNum(0)}>
                <div className='flex flex-col w-full p-20'>
                  <p className='mb-3 text-4xl'>Sandblasting</p>
                  <hr/>
                  <p className='mt-10 text-2xl'>Build as the first commercial blasting painting company in Cilegon, we are experienced in handling any material to paint</p>
                </div>
              </Parallax>
            </div>
          </div>
          <div id='painting' className='bg-main-bg'>
            <div className='flex flex-col px-8 py-48 md:flex-row bg-primary-blue opacity-90'>
            
              <img src='/img/painting.png' className='w-1/2'/>
              <Parallax speed={50} onEnter={()=> setScrollParallaxNum(1)}>
                <div className='flex flex-col w-full p-20'>
                  <p className='mb-3 text-4xl'>Painting</p>
                  <hr/>
                  <p className='mt-10 text-2xl'>Build as the first commercial blasting painting company in Cilegon, we are experienced in handling any material to paint</p>
                </div>
              </Parallax>
            </div>
          </div>
          <div id='heavyequipment' className='bg-main-bg'>
            <div className='flex flex-col px-8 py-48 md:flex-row bg-primary-blue opacity-90'>

              <img src='/img/rentals.png' className='w-1/2'/>
              <Parallax speed={50} onEnter={()=> setScrollParallaxNum(2)}>
              <div className='flex flex-col w-full p-20'>
                <p className='mb-3 text-4xl'>Heavy Equipment Rental</p>
                <hr/>
                <p className='mt-10 text-2xl'>As a supporting tool for our project, we owned heavy equipments which we also rented to clients <br/>
                We owned a complete set of compressors available for your every kind of projects 
                </p>
              </div>
              </Parallax>
            </div>
          </div>
        </div>
      </section>
      </ParallaxProvider>



      <section id='blog_banner' className='bg-white'>
        <div className='flex flex-col items-center text-3xl md:flex-row'>
          <p className='inline-block w-1/2 px-24 py-16'>Dig in for insights of what's going on in the company and industry</p>
          <Link href='/blog'><div className='px-16 py-8 mx-auto my-0 text-xl border-4 hover:bg-gray-200 hover:cursor-pointer rounded-3xl'><span>Visit our Blog -></span></div></Link>
        </div>
      </section>

      <section id='contact_us' className='text-white bg-primary-blue'>
        <div className='flex flex-col py-24 text-4xl md:flex-row'>
          <p className='inline-block w-1/2 pl-24 pr-40'>Contact Us <br/> 
            <span className='text-2xl'>Please reach out and we'll do our best to help you</span>
          </p>
          <div className='pr-24'>
            <ContactForm/>
          </div>
        </div>
      </section>

      <footer className='text-xl text-white bg-black'>
        <div className='grid grid-cols-2 mx-24 pt-11'>
          <div>
            <div className='flex flex-row items-center gap-x-5'>
              <img src='/logo-bw.png' className='w-24 h-24'></img>
              <span className='text-2xl'>PT Dwiprima Karyaguna</span>
            </div>
            <p className='pl-5 mt-5 text-lg'>
              Jl. Raya Anyer No.122 Cilegon – Banten <br/>
              Telp: (0254) 312114<br/>
              Fax: (0254) 310084<br/>
              Email: witarso.ng_dp@yahoo.co.id
            </p>
          </div>
          <div className='mt-5 text-lg text-right'>
             <p className='mb-5'>Download Company Profile</p>
             <a className='relative block float-right group w-36' href="/company_profile.pdf" download="Dwiprima Company Profile">
              <img src='/img/companyprofile.png' className='w-full group-hover:opacity-60'/>
              <div className='absolute w-full text-center opacity-0 group-hover:opacity-100 top-1/3'>
                <DownloadIcon className='inline w-12 h-12 p-3 border rounded-3xl'/>
              </div>
             </a>
          </div>
          <div className='col-span-2 mt-16'>
            <hr/>
            <p className='py-5 text-base'>
              <span>© Copyright PT Dwiprima Karyaguna. All Rights Reserved.</span>
              <span className='float-right'>Made with 🛠‍ in Cilegon Indonesia</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
