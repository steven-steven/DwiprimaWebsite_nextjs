import Head from 'next/head'
import NavBar from '../../components/navigation'
import fs from 'fs';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

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
      frontmatter: { title: data.title, date: data.updatedAt, author:data.author, img_src: data.img_src, vid_src: data.vid_src || null },
    },
  };
}

export default function Post( { slug, content, frontmatter } ) {

  return (
    <div className='flex flex-col'>
      <Head>
        <title>Dwiprima Karyaguna</title>
        <link rel="icon" href="/dpLogo.png" />
      </Head>

      <section className='py-5 text-white bg-primary-blue'>
        <NavBar/>
      </section>

      <section className='px-24 pt-8 pb-20 bg-slate-200'>
        <img src={frontmatter.img_src} className='w-1/2 mx-auto my-0 mb-10'/>
        <h1 className='mb-2 text-4xl text-center'>{frontmatter.title}</h1>
        <p className='mb-12 text-lg text-center'>{frontmatter.date} | {frontmatter.author}</p>
        <article className='mx-auto my-0 text-lg prose text-justify'><ReactMarkdown skipHtml={false}>{content}</ReactMarkdown></article>
        {frontmatter.vid_src && 
          <iframe className='mx-auto my-0 mt-10' width="560" height="315" src={frontmatter.vid_src} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        }
      </section>
      
      
    </div>
  );
}