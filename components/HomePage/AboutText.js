import { motion } from 'framer-motion';
import useAnimationOnScroll from '../../hooks/useAnimationOnScroll';

const variants = {
  hide: { x: 700, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

export default function AboutText({ transition, image, content }) {
  const [viewRef, animate, setAnimationHasRun] = useAnimationOnScroll('show');
  const { src, srcSet } = require(`../../images/${image}?resize&sizes[]=150&sizes[]=300&sizes[]=450`);
  return (
    <div ref={viewRef} className="w-full z-10 pb-10">
      <motion.div
        initial="hide"
        animate={animate}
        variants={variants}
        transition={transition}
        onAnimationComplete={setAnimationHasRun}
        className="pt-12 mt-5 md:mt-12 w-full bg-grey-custom px-10 pb-10 h-full z-10"
      >
        <h2 className="text-6xl font-title mb-2 md:mb-0">About Me</h2>
        <img
          src={src}
          srcSet={srcSet}
          alt="Ameira"
          className="md:hidden object-cover mb-2 md:mb-2"
        />
        {content.map((paragraph) => <p className="py-2 md:py-4 leading-loose font-body" key={`about-paragraph-${paragraph.substring(0, 10)}`}>{paragraph}</p>)}
      </motion.div>
    </div>
  );
}
