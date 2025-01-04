import cx from 'clsx';
import '@/css/tailwind.css';
import './style.css';
import data from './candidateData.json5';

import { Barlow } from 'next/font/google';
import SectionHeader from '@/components/Resume/SectionHeader';
import Experience, { ExperienceTypes } from '@/components/Resume/Experience';
import About from '@/components/Resume/About';
import _join from 'lodash/join';

const barlow = Barlow({
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const { firstName, lastName, about, contact, experience, education, skills } =
  data;

export default function Page() {
  return (
    <div
      className={cx(barlow.className, 'resumeContainer preview text-[9.5pt]')}
    >
      <h1 className={'text-[21.4pt]'}>{_join([firstName, lastName], ' ')}</h1>

      <About about={about} contact={contact} />

      <SectionHeader title={'Skills'} className="skillsHeader" />
      <div className="skillsBody">
        {skills.map(({ category, skills }) => (
          <div key={category} className="skillCategoryRow">
            <div className="skillCategory">{category}</div>
            <div>{skills.join(', ')}</div>
          </div>
        ))}
      </div>

      <SectionHeader title={'Work Experience'} />

      {experience.map(({ company, title, ...rest }) => (
        <Experience
          key={`${company}-${title}`}
          title={company}
          subtitle={title}
          {...rest}
        />
      ))}

      <SectionHeader title={'Education'} />
      {education.map(({ institute, degree, ...rest }) => (
        <Experience
          type={ExperienceTypes.EDUCATION}
          key={`${institute}-${degree}`}
          subtitle={degree}
          title={institute}
          {...rest}
        />
      ))}
    </div>
  );
}
