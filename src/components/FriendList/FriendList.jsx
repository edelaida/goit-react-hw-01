import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((user) => {
        return (
          <FriendListItem
            key={user.id}
            avatar={user.avatar}
            name={user.name}
            isOnline={user.isOnline}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;
