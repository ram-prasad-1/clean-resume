import _join from 'lodash/join';
import _replace from 'lodash/replace';
import _map from 'lodash/map';
import siteMetadata from '@/data/siteMetadata';
import SocialIcon from '@/components/social-icons';
import React from 'react';

const getDisplayUrl = (urlLink) => {
  const url = new URL(urlLink);
  return `${_replace(url.hostname, 'www.', '')}${_replace(
    url.pathname,
    /\/$/,
    '',
  )}`;
};

const About = ({ about, contact }) => {
  const { city, country, phone, email, linkedIn, github } = contact;

  // ●•○▪︎▫︎
  return (
    <div className="flex flex-col items-center justify-center">
      <div className={'flex items-center gap-1.5'}>
        <a className={'text-[#2a3ffbqqqq]'} href={linkedIn}>
          {getDisplayUrl(linkedIn)}{' '}
        </a>
        <span>▫︎</span>
        <a className={'text-[#2a3ffbqqq]'} href={github}>
          {getDisplayUrl(github)}{' '}
        </a>
      </div>

      <div className={'flex items-center gap-1.5'}>
        <a className={'text-[#2a3ffbfff]'} href={`mailto:${email}`}>
          {email}
        </a>
        <span>▫︎</span>
        <a href={`tel:${phone}`}> {phone} </a>
        <span>▫︎</span>
        <span className={''}>{_join([city, country], ', ')}</span>
      </div>
    </div>
  );
};

export default About;
