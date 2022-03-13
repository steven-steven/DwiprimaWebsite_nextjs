import Head from 'next/head'
import NavBar from '../components/navigation'
import ContactForm from '../components/contact_form';

export default function ContactUs() {
  return (
    <div className='flex flex-col'>
      <Head>
        <title>Dwiprima Karyaguna</title>
        <link rel="icon" href="/dpLogo.png" />
      </Head>


      <section className='text-white bg-cover bg-main-bg'>
        <div className='h-full bg-primary-blue opacity-90'>
          <div className='flex justify-center h-48'>
            <NavBar/>
          </div>
          <div className='px-24'>
            <h1 className='pb-3 text-4xl'>Contact Us</h1>
            <p className='pb-3 text-xl'>Please reach out and we'll do our best to help you</p>
            <hr className='h-px my-2 bg-gray-400 border-0'/>
          </div>
          <div className='p-8 mx-24 my-8 text-white border border-white rounded-3xl'>
            <ContactForm/>
          </div>
        </div>
      </section>
    
      
    </div>
  )
}