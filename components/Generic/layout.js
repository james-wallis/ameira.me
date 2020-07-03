import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { animateScroll as scroller } from 'react-scroll'
import Footer from './footer'
import Navigation from './Navigation'

export default function Layout({ children }) {
  const { query } = useRouter()

  useEffect(() => {
    if (query && query.scrollTo) {
      console.log(query);
      const { scrollTo } = query;
      scrollToElement(scrollTo)
    }
  }, [])

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <main className="overflow-hidden">{children}</main>
      </div>
      <Footer />
    </>
  )
}

const scrollToElement = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const scollToPx = el.offsetTop;
    scroller.scrollTo(scollToPx, {
      duration: 100,
      smooth: true,
    })
  }
}
