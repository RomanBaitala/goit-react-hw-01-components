import PropTypes from 'prop-types';
import css from './friendList.module.css';

export const FriendItem = ({ id, name, avatar, isOnline }) => {
  return (
    <li key={id} className={css.item}>
      <span className={isOnline ? css.status_true : css.status_false}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ),
};
