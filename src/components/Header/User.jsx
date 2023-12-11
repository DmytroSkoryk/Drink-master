import css from "./User.module.scss";
import { isUserProfile } from "../../redux/Auth/selectors";
import { useSelector } from "react-redux";

const User = () => {
  const profile = useSelector(isUserProfile);
  return (
    <div className={css.userContainer}>
      <img
        src="../../../public/user.png"
        alt="user"
        className={css.userPhoto}
      />
      <div className={css.userName}>{profile.name}</div>
    </div>
  );
};

export default User;
