import AboutImage from './AboutImage'
import AboutText from './AboutText'

const aboutText = [
  'I have been a tour guide, a terrible waitress and a children’s party entertainer. \
  I went to university in Bristol, a hub for the arts, and was a member of an improvised \
  comedy variety show called The Bish Bosh Bash. We once improvised a musical about courgettes \
  falling in love, a true highlight in my improvising career.',

  'I am a trained actress and writer. My passion lies with the arts, \
  so I always add a creative flair to everything I do. Having written \
  short stories, reviews, blog posts, plays and poems, I thrive when \
  embracing a challenge.',
];

const aboutImage = 'home/ameira.jpg'
const aboutImageMobile = 'home/ameira-garden.jpg'

const transition = {
  ease: 'easeOut',
  duration: 0.5
}

export default function About() {
  return (
    <section id="about">
      <div className="flex w-full my-0 md:py-32 flex-col md:flex-row">
        <AboutImage image={aboutImage} transition={transition} />
        <AboutText image={aboutImageMobile} transition={transition} content={aboutText} />
      </div>
    </section>
  )
}
