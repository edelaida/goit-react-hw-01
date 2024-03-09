const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li>
      <img src={avatar} alt="Avatar" width="48" />
      <p>Friend {name}</p>
      <p>Friend {isOnline}</p>
    </li>
  );
};

export default FriendListItem;
