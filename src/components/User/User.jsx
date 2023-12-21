import css from "./User.module.scss";
import { isUserProfile } from "../../redux/Auth/selectors";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import UserModal from "../Modals/UserModal/UserModal";
import EditModal from "../Modals/EditModal/EditModal";
import LogOutModal from "../Modals/LogOutModal/LogOutModal";
import { updateUser } from "../../redux/Auth/operations";
import { getProfileThank } from "../../redux/Auth/operations";

const User = () => {
  const profile = useSelector(isUserProfile);
  const dispatch = useDispatch();

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

  const onUpdateUser = async (data) => {
    try {
      await dispatch(updateUser(data));
      closeEditModal();
      await dispatch(getProfileThank());
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
      {profile ? (
        <div className={css.userContainer} onClick={openUserModal}>
          <img
            src={profile?.avatarURL || ""}
            alt="user"
            className={css.userPhoto}
          />
          <div className={css.userName}>{profile.name}</div>
        </div>
      ) : (
        ""
      )}

      <UserModal
        isShowUserModal={isShowUserModal}
        closeUserModal={closeUserModal}
        openEditModal={openEditModal}
        openLogOutModal={openLogOutModal}
      />
      <EditModal
        isShowEditModal={isShowEditModal}
        closeEditModal={closeEditModal}
        profile={profile}
        onUpdateUser={onUpdateUser}
      />
      <LogOutModal
        isShowLogOutModal={isShowLogOutModal}
        closeLogOutModal={closeLogOutModal}
      />
    </div>
  );
};

export default User;
