import { motion } from 'framer-motion';
import useIsMobile from '../../hooks/useIsMobile';

const paragraphAnimation = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const spanAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const createSubTitle = () => {
  const titles = [{
    id: 1,
    text: 'copywriter',
  },
  {
    id: 2,
    span: true,
  },
  {
    id: 3,
    text: 'actor',
  },
  {
    id: 4,
    span: true,
  },
  {
    id: 5,
    text: 'creative',
  }];
  return titles.map(({ id, text, span }) => {
    if (span) {
      return <motion.span key={`subtitle-span-${id}`} variants={spanAnimation} className="rounded-full inline-block h-2 w-2 mx-2 mt-1 bg-black" />;
    }
    return <motion.span key={`subtitle-${id}`} variants={spanAnimation}>{text}</motion.span>;
  });
};

export default function Hero() {
  const isMobile = useIsMobile();
  const subTitle = createSubTitle();
  // eslint-disable-next-line import/no-unresolved
  const desktopImage = require('../../images/home/header-background.jpg?resize&size=2000');
  // eslint-disable-next-line import/no-unresolved
  const mobileImage = require('../../images/home/header-background.jpg?resize&size=1000');
  const image = isMobile ? mobileImage : desktopImage;
  return (
    <section id="hero">
      <div
        className="w-screen h-screen md:bg-fixed flex justify-center items-center flex-col font-title bg-cover bg-top"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      >
        <h1 className="text-center text-7xl block">Ameira Yanni</h1>
        <motion.p
          variants={paragraphAnimation}
          initial="hidden"
          animate="visible"
          className="block mt-5 mb-20 flex items-center text-xl"
        >
          {subTitle}
        </motion.p>
      </div>
    </section>
  );
}
