import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  console.log(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
  return (
    <div>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
