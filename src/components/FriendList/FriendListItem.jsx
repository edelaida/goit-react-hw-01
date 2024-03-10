import s from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.linkFriend}>
      <img className={s.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={s.nameFr}>{name}</p>
      {isOnline === true ? (
        <p className={s.oncolor}>Online</p>
      ) : (
        <p className={s.offcolor}>Offline</p>
      )}
    </li>
  );
};

export default FriendListItem;
