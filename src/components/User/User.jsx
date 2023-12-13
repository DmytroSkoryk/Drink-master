import css from "./User.module.scss";
import { isUserProfile } from "../../redux/Auth/selectors";
import { useSelector } from "react-redux";
import { useState } from "react";
import UserModal from "../Modals/UserModal/UserModal";
import EditModal from "../Modals/EditModal/EditModal";
import LogOutModal from "../Modals/LogOutModal/LogOutModal";

const User = () => {
  const profile = useSelector(isUserProfile);
  const [isShowUserModal, setIsShowUserModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowLogOutModal, setIsShowLogOutModal] = useState(false);

  const openUserModal = () => {
    setIsShowUserModal(true);
  };

  const closeUserModal = () => {
    setIsShowUserModal(false);
  };

  const openEditModal = () => {
    closeUserModal();
    setIsShowEditModal(true);
  };

  const closeEditModal = () => {
    setIsShowEditModal(false);
  };

  const openLogOutModal = () => {
    closeUserModal();
    setIsShowLogOutModal(true);
  };

  const closeLogOutModal = () => {
    setIsShowLogOutModal(false);
  };

  return (
    <div>
      <div className={css.userContainer} onClick={openUserModal}>
        <img src="/public/user.png" alt="user" className={css.userPhoto} />
        <div className={css.userName}>{profile.name}</div>
      </div>

      <UserModal
        isShowUserModal={isShowUserModal}
        closeUserModal={closeUserModal}
        openEditModal={openEditModal}
        openLogOutModal={openLogOutModal}
      />
      <EditModal
        isShowEditModal={isShowEditModal}
        closeEditModal={closeEditModal}
      />
      <LogOutModal
        isShowLogOutModal={isShowLogOutModal}
        closeLogOutModal={closeLogOutModal}
      />
    </div>
  );
};

export default User;
