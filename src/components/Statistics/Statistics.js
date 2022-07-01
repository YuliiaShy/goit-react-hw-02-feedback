import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={s.statistics}>
      <ul className={s.list}>
        <li className={s.item}>
          Good:<span>{good}</span>
        </li>
        <li className={s.item}>
          Neutral:<span>{neutral}</span>
        </li>
        <li className={s.item}>
          Bad:<span>{bad}</span>
        </li>
        <li className={s.item}>
          Total:<span>{total}</span>
        </li>
        <li className={s.item}>
          Positive feedback: <span>{positivePercentage}%</span>
        </li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
