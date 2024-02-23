import css from "./FriendList.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img className={css.friendIcon} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p
        className={clsx(css.online, {
          [css.offline]: isOnline === false,
        })}
      >
        {isOnline ? "online" : "offline"}
      </p>
    </>
  );
};

export default FriendListItem;
