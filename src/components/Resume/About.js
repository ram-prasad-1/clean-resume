import _join from 'lodash/join';
import _replace from 'lodash/replace';
import _map from 'lodash/map';

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

  return (
    <div className="w-full grid grid-cols-2 items-end ">
      <div >
        <a className={'text-[#2a3ffb]'} href={linkedIn}> {getDisplayUrl(linkedIn)} </a>
      </div>

      <div className={'flex justify-end'}>
        <a href={`mailto:${email}`}> {email} </a>
      </div>

      <div>
        <a className={'text-[#2a3ffb]'} href={github}> {getDisplayUrl(github)} </a>
      </div>

      <div className={'flex justify-end'}>
        <a href={`tel:${phone}`}> {phone} </a>
      </div>

      <div className=""></div>

      <div className={'flex justify-end'}>{_join([city, country], ', ')}</div>
    </div>
  );
};

export default About;
