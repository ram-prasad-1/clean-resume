import cx from 'clsx';
import _join from 'lodash/join';
import _compact from 'lodash/compact';
import _isEmpty from 'lodash/isEmpty';

export const ExperienceTypes = {
  JOB: 'JOB',
  EDUCATION: 'EDUCATION',
};

const Experience = ({
  type,
  title,
  subtitle,
  link,
  start,
  end,
  highlights,
}) => {
  const endText = end === null ? 'Present' : _join(end, ' ');
  const dateText = _join(_compact([_join(start, ' '), endText]), ' – '); // join by en-dash

  return (
    <>
      <div key={`${subtitle}-${title}`} className="roleInfo flex">
        <div className="role">
          <a href={link}>{title}</a>
        </div>
        <div className="font-semibold">
          <a href={link}>{subtitle}</a>
        </div>
        <div className="date">{dateText}</div>
      </div>

      {!_isEmpty(highlights) && (
        <ul
          className={cx(
            'highlights list-disc',
            type === ExperienceTypes.EDUCATION && 'eduHighlights',
          )}
        >
          {highlights.map((bullet) => (
            <li key={bullet}>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Experience;
