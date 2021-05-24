import '../styles/index.css';
import { DefaultSeo } from 'next-seo';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Navigation from '../components/Generic/Navigation';
import Footer from '../components/Generic/Footer';

export default function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Ameira Yanni"
        description="Ameira Yanni - Copywriter, actor and creative in Southampton, England."
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://ameira.me/',
          description: 'Ameira Yanni - Copywriter, actor and creative in Southampton, England.',
          site_name: 'Ameira Yanni',
          images: [
            {
              url: 'https://ameira.me/ameira.jpg',
              width: 800,
              height: 512,
              alt: 'Ameira Yanni',
            },
            {
              url: 'https://ameira.me/logo.png',
              alt: 'AY Logo',
            },
          ],
        }}
        twitter={{
          handle: '@AmeiraYanni',
          site: '@AmeiraYanni',
          cardType: 'summary_large_image',
        }}
      />
      <Navigation />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} key={pathname} />
      </AnimatePresence>
      <Footer />
    </>
  );
}
