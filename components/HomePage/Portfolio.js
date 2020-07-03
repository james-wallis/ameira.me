import PortfolioItem from './PortfolioItem'

export default function Portfolio({ articles }) {
  const [newestArticle] = articles;
  return (
    <section>
      <div className="flex flex-col items-center w-full mt-16 md:mt-32 mb-0 md:mb-16 font-title">
        <h3 className="text-7xl">Portfolio</h3>
        <p className="text-lg my-8">Past. Present. Future.</p>
        {[newestArticle].map((article, index) => {
          return <PortfolioItem key={`portfolio-item-${index}`} invert={index % 2 === 1} {...article} />
        })}
      </div>
    </section>
  )
}
