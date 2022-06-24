import PropTypes from 'prop-types';
import s from "components/NotificationMessage/NotificationMessage.module.css"

const NotificationMessage = ({ message }) =>
  <p className={s.message}>{message}</p>;
export default NotificationMessage;

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
