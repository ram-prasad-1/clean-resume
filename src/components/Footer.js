import Link from '@/components/Link';
import siteMetadata from '@/data/siteMetadata';
import SocialIcon from '@/components/social-icons';
import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          {/*<SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6}/>*/}
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/public">{siteMetadata.title}</Link>
          <div>{` • `}</div>
          <div>Ram Prasad</div>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          Powered by{` `}
          <a className={'underline'} href="https://nextjs.org">
            NextJS
          </a>
          {` `}&{` `}
          <a className={'underline'} href="https://tailwindcss.com">
            TailwindCSS
          </a>
        </div>
      </div>
    </footer>
  );
}
