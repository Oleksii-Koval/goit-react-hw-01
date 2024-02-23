import css from "./Profile.module.css";
import clsx from "clsx";
import { MdLocationOn } from "react-icons/md";
import { FiAtSign } from "react-icons/fi";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.container}>
      <div className={css.userInfo}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.userInfoText}>
          <FiAtSign /> {tag}
        </p>
        <p className={clsx(css.userInfoText, css.userLocation)}>
          <MdLocationOn />
          {location}
        </p>
      </div>

      <ul className={css.socialList}>
        <li className={css.socialListItem}>
          <span className={css.socialItemTitle}>Followers</span>
          <span className={css.socialItemText}>{followers}</span>
        </li>
        <li className={css.socialListItem}>
          <span className={css.socialItemTitle}>Views</span>
          <span className={css.socialItemText}>{views}</span>
        </li>
        <li className={css.socialListItem}>
          <span className={css.socialItemTitle}>Likes</span>
          <span className={css.socialItemText}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
