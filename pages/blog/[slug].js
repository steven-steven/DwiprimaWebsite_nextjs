import Head from 'next/head'
import NavBar from '../../components/navigation'
import fs from 'fs';
import matter from 'gray-matter';

// determines which paths will be prerendered amongst the /posts/[slug]
export async function getStaticPaths() {
  const files = fs.readdirSync(`${process.cwd()}/data/posts`);

  const paths = files.map((fileName) => {
    return {
      params: {
        slug: fileName.replace('.md', ''),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

// to pass props to the component. Receives params.slug from getStaticPaths
export async function getStaticProps({ params: { slug } }) {
  const file = fs.readFileSync(`data/posts/${slug}.md`).toString();
  const { data, content } = matter(file);

  return {
    props: {
      slug,
      content,
      frontmatter: { title: data.title, date: data.updatedAt, author:data.author },
    },
  };
}

export default function Post( { slug, content, frontmatter } ) {

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
        <h1 className='mb-2 text-4xl text-center'>{frontmatter.title}</h1>
        <p className='mb-5 text-lg text-center'>{frontmatter.date} | {frontmatter.author}</p>
        <p className='text-lg text-justify'>{content}</p>
      </section>
      
      
    </div>
  );
}