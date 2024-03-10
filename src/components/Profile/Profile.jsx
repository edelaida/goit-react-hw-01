import s from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.blockProf}>
        <img className={s.foto} src={image} alt="User avatar" />
        <p className={s.avatar}>{name}</p>
        <p>@{tag}</p>
        <p>{location} </p>
      </div>
      <ul className={s.linkProf}>
        <li className={s.listProf}>
          <span>Followers</span>
          <span className={s.quantity}>{stats.followers} </span>
        </li>
        <li className={s.listProf}>
          <span>Views</span>
          <span className={s.quantity}> {stats.views} </span>
        </li>
        <li className={s.listProf}>
          <span>Likes</span>
          <span className={s.quantity}>{stats.likes} </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
