import cx from 'clsx';

const SectionHeader = ({ title, className }) => (
  <div className={cx('section', className)}>
    <div> {title} </div>
    <div className="hrDivider" />
  </div>
);

export default SectionHeader;
