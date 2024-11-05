import Head from 'next/head'
import NavBar from '../../components/navigation'
import fs from 'fs';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Image from "next/image";

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

  const metadata_title = `${frontmatter.title} | Dwiprima Karyaguna Blog`

  return (
    (<div className='flex flex-col bg-slate-200'>
      <Head>
        <title>{metadata_title}</title>
        <link rel="icon" href="/dpLogo.ico" />
        <meta name="description" content={metadata_title} />
        <meta name="keywords" content="blog, sandblasting, painting, coating, heavy equipment rentals, company, contractor" />

        {/* Open Graph Meta Tags */}
        <meta property="og:url" content="https://dwiprimakaryaguna.vercel.app" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={metadata_title} />
        <meta property="og:description" content={metadata_title} />
        <meta property="og:image" content="https://dwiprimakaryaguna.vercel.app/img/blast1.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Dwiprima Karyaguna Sandblasting" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata_title} />
        <meta name="twitter:description" content={metadata_title} />
        <meta name="twitter:image" content="https://dwiprimakaryaguna.vercel.app/img/blast1.png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta name="twitter:image:alt" content="Dwiprima Karyaguna Sandblasting" />
      </Head>
      <section className='py-5 text-white bg-primary-blue'>
        <NavBar/>
      </section>
      <section className='px-8 pt-8 pb-20 md:px-24 bg-slate-200'>
        <div className='relative w-full h-64 mx-auto my-0 mb-10 md:w-1/2 md:h-96'>
          <Image
            src={frontmatter.img_src}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover"
            }} />
        </div>
        <h1 className='mb-2 text-2xl text-center md:text-4xl'>{frontmatter.title}</h1>
        <p className='mb-12 text-base text-center md:text-lg'>{frontmatter.date} | {frontmatter.author}</p>
        <article className='mx-auto my-0 text-sm prose text-justify md:text-lg'><ReactMarkdown skipHtml={false}>{content}</ReactMarkdown></article>
        {frontmatter.vid_src && 
          <iframe className='mx-auto my-0 mt-10' width="560" height="315" src={frontmatter.vid_src} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        }
      </section>
    </div>)
  );
}