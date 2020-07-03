import Head from 'next/head'
import DateFormatter from '../Generic/DateFormatter'
import PrintMarkdownHTML from '../Generic/PrintMarkdownHTML'

export default function Article({ title, image, date, content }) {
  const imgSrc = require(`../../images/portfolio/${image}`);
  return (
    <article className="flex flex-col items-center justify-center text-center pt-6 md:pt-32">
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={imgSrc} />
      </Head>
      <img
        src={imgSrc}
        alt={`Image for ${title}`}
        className="md:h-50vh"
      />
      <h1 className="text-6xl font-title text-pink-custom mt-4 md:mt-16 mb-4">{title}</h1>
      <p className="font-title my-2 md:my-8 text-lg">
        <DateFormatter dateString={date} />
      </p>
      <PrintMarkdownHTML content={content} />
    </article>
  )
}
