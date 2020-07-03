import { useEffect, useState } from 'react'
import PortfolioItem from './PortfolioItem'

export default function Portfolio({ articles }) {
  const [numItemsOnRow, setNumItemsOnRow] = useState(0);

  useEffect(() => {
    const num = calculateNumItemsOnRow(window.innerWidth);
    setNumItemsOnRow(num);
  }, [])
  return (
    <section>
      <div className="flex flex-row flex-wrap justify-center flex-1">
        {articles.map((article, index) => {
          const onTopRow = index < numItemsOnRow;
          return <PortfolioItem key={`portfolio-item-${index}`} onTopRow={onTopRow} {...article} />
        })}
      </div>
    </section>
  )
}

const calculateNumItemsOnRow = (windowWidth) => {
  if (windowWidth >= 1024) {
    return 3
  }

  if (windowWidth >= 768) {
    return 2
  }

  return 1
}
