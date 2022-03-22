import Head from 'next/head'
import { PlayIcon, DownloadIcon } from '@heroicons/react/solid'
import { PlayIcon as PlayOutline } from '@heroicons/react/outline'
import ContactForm from '../components/contact_form'
import Link from 'next/link'
import NavBar from '../components/navigation'
import { Parallax } from 'react-scroll-parallax';
import { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Image from 'next/image'

export default function Home() {
  const [scrollParallaxNum, setScrollParallaxNum] = useState(0);

  return (
    <div>
      <Head>
        <title>Dwiprima Karyaguna</title>
        <link rel="icon" href="/dpLogo.png" />
      </Head>

      <section className='relative text-white md:h-1 md:min-h-screen'>
        <div className='absolute w-full h-full -z-10'>
          <Image
            alt="Main Background"
            src="/img/main-bg.png"
            layout="fill"
            objectFit="cover"
            width={4000}
            height={3000}
            priority
          />
        </div>
        <div className='fixed top-0 left-0 right-0 z-50 flex justify-center h-16 md:hidden bg-opacity-80 bg-primary-blue'>
          <NavBar/>
        </div>
        <div className='h-full bg-primary-blue bg-opacity-90'>
          <div className='flex flex-col h-full'>
            <div id='md-screen-navbar' className='justify-center hidden h-48 md:flex'>
              <NavBar/>
            </div>
            <div className='flex flex-row items-center h-full'>
              <div className='flex flex-col w-full h-full px-16 pt-32 pb-16 font-serif gap-y-16 md:pt-3 md:w-2/3 justify-evenly'>
                <p className='text-xl md:text-4xl'> A leading <u>Sandblasting</u>, <u>Painting</u> & <u>Heavy Equipment Rental</u> company in Indonesia</p>
                <p className='text-sm md:text-2xl'>Started in 1996, we've grown and is commited to provide the best quality work and expertise you can trust</p>
                <div className='ml-5 md:w-4/5 shadow-spray-effect'>
                  <Image
                    alt="BlastingImage"
                    src="/img/blast1.png"
                    layout="responsive"
                    width={1040}
                    height={585}
                  />
                </div>
              </div>
              <div className='flex-col items-center justify-end hidden h-full md:flex'>
                <img src='/img/wheel.png' className='w-64 h-64'/>
                <img src='/img/cowboy.png' className='h-2/5'/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-5 bg-white md:mb-10'>
        <p className='my-10 text-2xl text-center md:text-4xl'>Trusted by partners like</p>
        <div className="grid items-stretch justify-around grid-cols-4 mx-5 md:mx-20 md:grid-cols-6 justify-items-center gap-x-6 md:gap-x-12">
          { [...Array(23).keys()].map(i => (
            <img key={i} className='object-scale-down h-16 cursor-pointer md:h-32 md:grayscale hover:grayscale-0' src={`/clientLogos/${i+1}.png`}/> 
            // <Image
            //   key={i}
            //   alt="PartnerLogo"
            //   src={`/clientLogos/${i+1}.png`}
            //   layout="fill"
            //   objectFit="scale-down"
            //   width="556"
            //   height="386"
            //   className='object-scale-down h-16 cursor-pointer md:h-32 md:grayscale hover:grayscale-0'
            // />
          ))}
        </div>
      </section>

      <section id='showcase_video' className='h-96'>
        <div className='absolute w-full overflow-hidden h-96 -z-10'>
          <Image
            alt="Promotional video"
            src="/img/vid_preview.gif"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            width={640}
            height={335}
            priority
          />
        </div>
        <div className='h-full bg-opacity-60 bg-video-blue'>
          <div className='flex flex-col justify-center h-full text-xl md:text-4xl'>
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
        <div className='flex flex-col items-center mt-10 md:mt-0 md:flex-row'>
          <p className='inline-block w-1/3 text-xl text-center md:font-semibold md:text-3xl'>About Us</p>
          <p className='px-10 py-10 text-sm md:px-0 md:w-2/3 md:text-xl md:py-20 md:pr-20'>Founded in 1993, at the moment PT. Dwiprima Karyaguna has grown rapidly and has expanded to outer Java area throughout Batam and Pekanbaru.
          <br/><br/>
          Our company has gained trust from companies, such as Government Owned Company (BUMN), national private and foreign companies.
          We also maintain a relationship with material vendors needed in our projects, some are paint producers and other material producers in Indonesia.
          <br/><br/>
          Our commitment is to become the best company in SANDBLAST, PAINT, CONCRETE REPAIR & HEAVY EQUIPMENT RENTAL which supply quality and quantity as per customer request. </p>
        </div>
      </section>

      <div className='flex flex-col items-center mt-10 mb-20 md:mt-0'>
        <p className='mb-5 text-xl md:text-3xl'>Download Our Company Profile</p>
        <a className='relative block w-32 md:float-right group md:w-36' href="/company_profile.pdf" download="Dwiprima Company Profile">
          <img src='/img/companyprofile.png' className='w-full group-hover:opacity-60'/>
          <div className='absolute w-full text-center opacity-0 group-hover:opacity-100 top-1/3'>
            <DownloadIcon className='inline w-12 h-12 p-3 border rounded-3xl'/>
          </div>
        </a>
      </div>

      <ParallaxProvider>
      <section id='services' className='text-white bg-white'>
        <div className='sticky top-0 z-10 flex-col hidden px-5 py-2 text-lg bg-white md:flex md:flex-row md:text-xl gap-y-2 md:gap-x-2 bg-opacity-90'>
          <div className={`p-5 rounded-xl ${scrollParallaxNum == 0 ? 'bg-primary-blue':'bg-gray-400'}`}>Sandblasting</div>
          <div className={`p-5 rounded-xl ${scrollParallaxNum == 1 ? 'bg-primary-blue':'bg-gray-400'}`}>Painting</div>
          <div className={`p-5 rounded-xl ${scrollParallaxNum == 2 ? 'bg-primary-blue':'bg-gray-400'}`}>Heavy Equipment Rental</div>
        </div>
        <div className='relative flex flex-col'>
          <div id='sandblasting' className='relative'>
            <div className='absolute w-full h-full overflow-hidden'>
              <Image
                alt="Main Background"
                src="/img/main-bg.png"
                layout="fill"
                objectFit="cover"
                width={4000}
                height={3000}
              />
            </div>
            <div className='flex flex-col px-8 py-48 md:flex-row bg-primary-blue opacity-90'>
              <div className='md:w-1/2'>
                <Image
                  alt="BlastingImage1"
                  src="/img/blasting.png"
                  priority
                  width={1486}
                  height={920}
                />
              </div>
              <Parallax className='md:w-1/2' speed={50} onEnter={()=> setScrollParallaxNum(0)}>
                <div className='flex flex-col w-full p-5 md:p-10'>
                  <p className='mb-3 text-2xl md:text-3xl'>Sandblasting</p>
                  <hr/>
                  <p className='mt-10 text-base md:text-xl'>With decades of accumulated sandblasting expertise and machineries, we are capable of performing the job for a wide range of surfaces, materials, profiles that fit your needs.</p>
                </div>
              </Parallax>
            </div>
          </div>
          <div id='painting' className='relative'>
            <div className='absolute w-full h-full overflow-hidden'>
              <Image
                alt="Main Background"
                src="/img/main-bg.png"
                layout="fill"
                objectFit="cover"
                width={4000}
                height={3000}
              />
            </div>
            <div className='flex flex-col px-8 py-48 md:flex-row bg-primary-blue opacity-90'>
              <div className='md:w-1/2'>
                <Image
                  alt="PaintingImage"
                  src="/img/painting.png"
                  priority
                  width={1404}
                  height={1002}
                />
              </div>
              <Parallax className='md:w-1/2' speed={50} onEnter={()=> setScrollParallaxNum(1)}>
                <div className='flex flex-col w-full p-5 md:p-10'>
                  <p className='mb-3 text-2xl md:text-3xl'>Painting</p>
                  <hr/>
                  <p className='mt-10 text-base md:text-xl'>We are experienced in handling any material to paint, and handling projects from medium to large, on commercial building or even industrial environment.</p>
                </div>
              </Parallax>
            </div>
          </div>
          <div id='heavyequipment' className='relative'>
            <div className='absolute w-full h-full overflow-hidden'>
              <Image
                alt="Main Background"
                src="/img/main-bg.png"
                layout="fill"
                objectFit="cover"
                width={4000}
                height={3000}
              />
            </div>
            <div className='flex flex-col px-8 py-48 md:flex-row bg-primary-blue opacity-90'>
              <div className='md:w-1/2'>
                <Image
                  alt="RentalsImage"
                  src="/img/rentals.png"
                  priority
                  width={1500}
                  height={986}
                />
              </div>
              <Parallax className='md:w-1/2' speed={50} onEnter={()=> setScrollParallaxNum(2)}>
                <div className='flex flex-col w-full p-5 md:p-20'>
                  <p className='mb-3 text-2xl md:text-3xl'>Heavy Equipment Rental</p>
                  <hr/>
                  <p className='mt-10 text-base md:text-xl'>As a supporting tool for our project, we owned heavy equipments which we also rented to clients <br/>
                  Our set of equipment includes forklifts, crane and air compressors. Those equipment are regularly inspected and certified. That way clients can always utilize the equipment without doubt regarding its condition. <br/>
                  Check out the complete list of equipments in our company profile.
                  </p>
                </div>
              </Parallax>
            </div>
          </div>
        </div>
      </section>
      </ParallaxProvider>



      <section id='blog_banner' className='bg-white'>
        <div className='flex flex-col items-center text-xl md:text-3xl md:flex-row'>
          <p className='inline-block px-10 pt-10 md:pb-16 md:px-24 md:w-1/2'>Dig in for insights of what's going on in the company and industry</p>
          <Link href='/blog'><div className='px-16 py-8 mx-auto my-10 text-lg border-4 md:my-0 md:text-xl hover:bg-gray-200 hover:cursor-pointer rounded-3xl'><span>Visit our Blog -></span></div></Link>
        </div>
      </section>

      <section id='contact_us' className='text-white bg-primary-blue'>
        <div className='flex flex-col py-16 text-3xl md:py-24 md:text-4xl md:flex-row'>
          <p className='inline-block px-10 text-center md:text-left md:pr-40 md:pl-24 md:w-1/2'>
            Contact Us <br/> 
            <span className='hidden text-xl md:inline'>Please reach out and we'll do our best to help you</span>
          </p>
          <div className='px-10 pt-12 md:px-0 md:pt-0 md:pr-24'>
            <ContactForm/>
          </div>
        </div>
      </section>

      <footer className='text-white bg-black'>
        <div className='flex flex-col pt-8 mx-10 md:mx-24 md:grid md:grid-cols-2 md:pt-11'>
          <div>
            <div className='flex flex-row items-center gap-x-2 md:gap-x-5'>
              <img src='/logo-bw.png' className='w-10 h-10 md:w-24 md:h-24'></img>
              <span className='md:text-2xl'>PT Dwiprima Karyaguna</span>
            </div>
            <p className='pl-5 mt-5 text-sm md:text-lg'>
              Jl. Raya Anyer No.122 Cilegon – Banten <br/>
              Telp: (0254) 312114<br/>
              Fax: (0254) 310084<br/>
              Email: witarso.ng_dp@yahoo.co.id
            </p>
          </div>
          <div className='pl-5 mt-5 text-sm md:pl-0 md:text-lg md:text-right'>
             <p className='mt-2 md:mb-5 md:mt-0'>Download Company Profile</p>
             <a className='relative block w-20 md:float-right group md:w-36' href="/company_profile.pdf" download="Dwiprima Company Profile">
              <img src='/img/companyprofile.png' className='w-full group-hover:opacity-60'/>
              <div className='absolute w-full text-center opacity-0 group-hover:opacity-100 top-1/3'>
                <DownloadIcon className='inline w-12 h-12 p-3 border rounded-3xl'/>
              </div>
             </a>
          </div>
          <div className='col-span-2 mt-5 md:mt-16'>
            <hr/>
            <p className='py-5 text-xs md:text-base'>
              <span>© Copyright PT Dwiprima Karyaguna. All Rights Reserved.</span>
              <span className='block md:inline md:float-right'>Made with 🛠‍ in Cilegon Indonesia</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
