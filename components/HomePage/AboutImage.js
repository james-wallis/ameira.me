import { motion } from 'framer-motion';
import useAnimationOnScroll from '../../hooks/useAnimationOnScroll';

const variants = {
  hide: { x: -700, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

export default function AboutImage({ transition, image }) {
  const [viewRef, animate, setAnimationHasRun] = useAnimationOnScroll('show');
  const { src, srcSet } = require(`../../images/${image}?resize&sizes[]=400&sizes[]=700&sizes[]=1000`);
  return (
    <div ref={viewRef} className="w-full">
      <motion.div
        initial="hide"
        animate={animate}
        variants={variants}
        transition={{ type: 'spring', ...transition }}
        onAnimationComplete={setAnimationHasRun}
        className="w-full h-full relative"
      >
        <img
          src={src}
          srcSet={srcSet}
          alt="Ameira"
          className="hidden md:block absolute z-0 object-cover w-overlap h-overlap max-w-overlap"
          data-testid="about-image"
        />
      </motion.div>
    </div>
  );
}
