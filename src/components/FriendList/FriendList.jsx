import FriendListItem from "./FriendListItem";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.listFriend}>
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
