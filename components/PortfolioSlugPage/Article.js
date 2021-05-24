import DateFormatter from '../Generic/DateFormatter';
import PrintMarkdownHTML from '../Generic/PrintMarkdownHTML';
import Link from '../Generic/NoScrollLink';

export default function Article({
  title, imgSrc, imgSrcSet, date, content,
}) {
  return (
    <article className="flex flex-col items-center justify-center text-center pt-6 md:pt-32">
      <img
        src={imgSrc}
        srcSet={imgSrcSet}
        alt={title}
        className="md:h-50vh"
      />
      <h1 className="text-4xl md:text-6xl font-title text-pink-custom mt-4 md:mt-16 mb-4">{title}</h1>
      <p className="font-title my-2 md:my-8 text-lg">
        <DateFormatter dateString={date} />
      </p>
      <PrintMarkdownHTML content={content} />
      <Link href={{ pathname: '/portfolio', query: { internalLink: true } }}>
        <a className="px-4 py-2 my-8 md:my-8 border-solid border border-black font-body text-base hover:bg-black hover:text-pink-custom ease-in-out transition duration-500">
          Back to Portfolio
        </a>
      </Link>
    </article>
  );
}
