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
    const frontmatter = { title: data.title, description: data.description, date: data.updatedAt, img_src: data.img_src };

    return {
      slug: fileName.replace('.md', ''),
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
    <div className='flex flex-col'>
      <Head>
        <title>Dwiprima Karyaguna</title>
        <link rel="icon" href="/dpLogo.png" />
      </Head>

      <section className='py-5 text-white bg-primary-blue'>
        <NavBar/>
      </section>

      <section className='px-24 py-8 grow bg-slate-200'>
        <h1 className='pb-3 text-4xl'>Blog</h1>
        <p className='pb-3 text-xl'>Dig in for insights of what's going on in the company or in the industry</p>
        <hr className='h-px my-2 text-black bg-gray-400 border-0'/>
        <div className='flex flex-col p-5 gap-y-5'>
          {posts.map((post, idx) => {
            return (
              <BlogEntry 
                slug={post.slug} 
                description={post.frontmatter.description}
                title={post.frontmatter.title}
                date={post.frontmatter.date}
                img_src={post.frontmatter.img_src} />
            );
          })}
        </div>
      </section>
      
      
    </div>
  )
}

const BlogEntry = ({ slug, description, img_src, title, date }) => (
  <Link href={`/blog/${slug}`}>
    <div className='flex h-56 p-3 group hover:border hover:border-gray-400 hover:cursor-pointer'>
      <img src={img_src} className='h-full'/>
      <div className='flex flex-col px-10 py-5'>
        <p className='mb-3 text-2xl'>{title}</p>
        <p className='text-lg text-gray-500 grow'>{description}</p>
        <p className='text-lg text-blue-500'>{date}</p>
      </div>
    </div>
  </Link>
);