import PropTypes from 'prop-types';
import s from 'components/FeedbackOptions/FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
  <div className={s.thumb}>
      <ul className={s.list}>
        {Object.keys(options).map(option => (
          <li key={option} className={s.item}>
                <button      
              className={s.button}
              type="button"
              name = {option}
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};