import Head from 'next/head'
import NavBar from '../components/navigation'
import ContactForm from '../components/contact_form';
import { useRouter } from 'next/router';

export default function ContactUs() {
  const {locale} = useRouter()
  return (
    <div className='flex flex-col'>
      <Head>
        <title>Dwiprima Karyaguna</title>
        <link rel="icon" href="/dpLogo.ico" />
      </Head>


      <section className='text-white bg-cover bg-main-bg'>
        <div className='h-full bg-primary-blue opacity-90'>
          <div className='flex justify-center py-5 mb-8 md:py-0 md:h-48 md:mb-0'>
            <NavBar/>
          </div>
          <div className='px-10 md:px-24'>
            <h1 className='pb-3 text-2xl md:text-4xl'>Contact Us</h1>
            <p className='pb-3 text-sm md:text-xl'>Please reach out and we'll do our best to help you</p>
            <hr className='h-px my-2 bg-gray-400 border-0'/>
          </div>
          <div className='p-8 mx-2 my-8 text-white border border-white md:mx-24 rounded-3xl'>
            <ContactForm locale={locale}/>
          </div>
        </div>
      </section>
    
      
    </div>
  )
}