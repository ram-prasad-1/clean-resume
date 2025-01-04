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
    <div className="flex">
      <div className="contact shrink-0">
        <div>{_join([city, country], ', ')}</div>
        <div>
          <a href={linkedIn}> {getDisplayUrl(linkedIn)} </a>
        </div>

        <div>
          <a href={github}> {getDisplayUrl(github)} </a>
        </div>

        <div>
          <a href={`mailto:${email}`}> {email} </a>
        </div>

        <div>
          <a href={`tel:${phone}`}> {phone} </a>
        </div>
      </div>

      {Array.isArray(about.summary) ? (
        <div>
          {_map(about.summary, (line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
      ) : (
        <div>{about.summary}</div>
      )}
    </div>
  );
};

export default About;
