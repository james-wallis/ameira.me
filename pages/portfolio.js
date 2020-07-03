import Layout from '../components/Generic/layout'
import { getCompletePortfolio } from '../lib/api'
import Head from 'next/head'
import Portfolio from '../components/PortfolioPage/Portfolio'


export default function Index({ articles }) {
  return (
    <Layout>
      <Head>
        <title>Portfolio | Ameira Yanni</title>
      </Head>
      <div className="pt-12 md:pt-24 text-center mb-4 md:mb-10">
        <h1 className="font-title text-7xl text-pink-custom mb-4">Portfolio</h1>
        <p className="font-body text-base mx-4 md:mx-16 lg:mx-32">
          The following is a collection of my writing projects.
          Each piece is unique in style and content.
          I hope you enjoy my work and I invite you to
          contact me with any questions.
        </p>
      </div>
      <Portfolio articles={articles} />
    </Layout>
  )
}

export async function getStaticProps() {
  const articles = getCompletePortfolio([
    'title',
    'date',
    'slug',
    'author',
    'image',
    'excerpt',
    'description',
  ])

  return {
    props: { articles },
  }
}
