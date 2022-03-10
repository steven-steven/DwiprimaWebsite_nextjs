import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../components/navigation'

export default function Blog() {
  return (
    <div className='flex flex-col bg-slate-200'>
      <Head>
        <title>Dwiprima Karyaguna</title>
        <link rel="icon" href="/dpLogo.png" />
      </Head>

      <section className='py-5 text-white bg-blue-900'>
        <NavBar/>
      </section>

      <section className='px-24 py-8 grow'>
        <h1 className='pb-1 text-4xl'>Blog</h1>
        <p>Dig in for insights of what's going on in the company and industry</p>
        <hr className='h-px my-2 text-black bg-black border-0'/>
        <div className='flex flex-col p-5 gap-y-5'>
          <BlogEntry article={{date:'date', slug:'slug', title:'Title', desc:'body truncated...'}}/>
          <BlogEntry article={{date:'date', slug:'slug', title:'Title', desc:'body truncated...'}}/>

        </div>
      </section>
      
      
    </div>
  )
}

const BlogEntry = ({ article }) => (
  <Link href={`/blog/${article.slug}`}>
    <div className='flex h-56 p-3 group hover:border hover:border-gray-500 hover:cursor-pointer'>
      <img src='/img/blast1.png' className='h-full'/>
      <div className='flex flex-col px-10 py-5'>
        <p className='mb-3 text-2xl'>{article.title}</p>
        <p className='text-lg text-gray-500 grow'>{article.desc}</p>
        <p className='text-lg text-blue-500'>{article.date}</p>
      </div>
    </div>
  </Link>
);