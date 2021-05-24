import * as Scroll from 'react-scroll';
import { useRouter } from 'next/router';
import ExternalLink from './ExternalLink';
import Link from './NoScrollLink';

const getLink = ({
  url, external, text, ariaLabel, scrollTo,
}) => {
  if (external) {
    return (
      <ExternalLink aria-label={ariaLabel || text} href={url}>
        {text}
      </ExternalLink>
    );
  }
  return (
    <Link href={{ pathname: url, query: { scrollTo, internalLink: true } }} as={url}>
      <a aria-label={ariaLabel || text}>{text}</a>
    </Link>
  );
};

const getScrollLink = ({ text, scrollTo, closeMenu }) => (
  <Scroll.Link to={scrollTo} spy smooth duration={500} onSetActive={closeMenu}>
    {text}
  </Scroll.Link>
);

export default function NavigationLink({
  closeMenu, text, scrollTo, href, external, ariaLabel,
}) {
  const url = href;
  const { pathname } = useRouter();
  const children = (scrollTo && (href === pathname))
    ? getScrollLink({ text, scrollTo, closeMenu })
    : getLink({
      text, url, external, ariaLabel, scrollTo,
    });
  return (
    <li onClick={closeMenu} role="menuitem" className="inline-block py-3 md:py-0 px-3 tracking-wider cursor-pointer">
      {children}
    </li>
  );
}
