import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../components/navigation'
import fs from 'fs';
import matter from 'gray-matter';

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/data/posts`);

  const posts = files.map((fileName) => {
    const file = fs.readFileSync(`data/posts/${fileName}`).toString();

    const { data, content } = matter(file);
    const frontmatter = { title: data.title, description: data.description, date: data.updatedAt };

    return {
      slug: fileName.replace('.md', ''),
      content: content,
      frontmatter,
    };
  });

  // pass in array of posts
  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
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
          {posts.map((post, idx) => {
            return (
              <BlogEntry 
                slug={post.slug} 
                description={post.frontmatter.description}
                title={post.frontmatter.title}
                date={post.frontmatter.date}/>
            );
          })}
        </div>
      </section>
      
      
    </div>
  )
}

const BlogEntry = ({ slug, description, title, date }) => (
  <Link href={`/blog/${slug}`}>
    <div className='flex h-56 p-3 group hover:border hover:border-gray-500 hover:cursor-pointer'>
      <img src='/img/blast1.png' className='h-full'/>
      <div className='flex flex-col px-10 py-5'>
        <p className='mb-3 text-2xl'>{title}</p>
        <p className='text-lg text-gray-500 grow'>{desc}</p>
        <p className='text-lg text-blue-500'>{date}</p>
      </div>
    </div>
  </Link>
);