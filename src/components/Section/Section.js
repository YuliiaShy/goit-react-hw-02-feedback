import PropTypes from 'prop-types';
import s from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <div className={s.section}>
      <h1 className={s.title}>{title}</h1>
      {children}
    </div>
  );
}

Section.propType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
