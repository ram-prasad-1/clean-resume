import Mail from './mail.svg';
import Github from './github.svg';
import Facebook from './facebook.svg';
import Youtube from './youtube.svg';
import Linkedin from './linkedin.svg';
import Twitter from './twitter.svg';
import Instagram from './instagram.svg';
import Rss from './rss.svg';

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  rss: Rss,
};

const SocialIcon = ({ kind, href }) => {
  if (
    !href ||
    (kind === 'mail' &&
      !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))
  )
    return null;

  const SocialSvg = components[kind];

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`h-6 w-6 fill-current text-gray-700 hover:text-blue-400 dark:text-gray-200`}
      />
    </a>
  );
};

export default SocialIcon;
