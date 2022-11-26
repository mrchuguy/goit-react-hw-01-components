import { Avatar, ListItem, Name, Status } from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <ListItem>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} />
      <Name>{name}</Name>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
