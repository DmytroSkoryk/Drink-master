import css from "./User.module.scss";
import { isUserProfile } from "../../redux/Auth/selectors";
import { useSelector } from "react-redux";
import { useState } from "react";
// import UserModal from "../Modals/UserModal/UserModal";
import EditModal from "../Modals/EditModal/EditModal";

const User = () => {
  const profile = useSelector(isUserProfile);
  // const [showUserModal, setShowUserModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  // const openUserModal = () => {
  //   setShowUserModal(true);
  // };

  // const closeUserModal = () => {
  //   setShowUserModal(false);
  // };

  const openEditModal = () => {
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  return (
    <div>
      <div className={css.userContainer} onClick={openEditModal}>
        <img
          src="../../../public/user.png"
          alt="user"
          className={css.userPhoto}
        />
        <div className={css.userName}>{profile.name}</div>
      </div>
      <EditModal
        isOpenEditModal={showEditModal}
        closeEditModal={closeEditModal}
      />
    </div>
  );
};

export default User;
