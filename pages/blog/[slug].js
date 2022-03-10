import Head from 'next/head'
import { useRouter } from 'next/router'
import NavBar from '../../components/navigation'

export default function Post() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div className='flex flex-col bg-slate-200'>
      <Head>
        <title>Dwiprima Karyaguna</title>
        <link rel="icon" href="/dpLogo.png" />
      </Head>

      <section className='py-5 text-white bg-blue-900'>
        <NavBar/>
      </section>

      <section className='px-24 py-8'>
        <img src='/' className='h-56 mx-auto my-0 mb-8'/>
        <h1 className='mb-2 text-4xl text-center'>{slug}</h1>
        <p className='mb-5 text-lg text-center'>March 23, 2021 | Steven</p>
        <p className='text-lg text-justify'>Dig in for insights of what's going on in the company and industry</p>
      </section>
      
      
    </div>
  );
}