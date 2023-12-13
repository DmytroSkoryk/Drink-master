import css from "./UserModal.module.scss";
import Button from "../../Button/Button";
import { useEffect } from "react";

const UserModal = ({
  isShowUserModal,
  closeUserModal,
  openEditModal,
  openLogOutModal,
}) => {
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeUserModal();
    }
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeUserModal();
    }
  };

  useEffect(() => {
    if (isShowUserModal) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isShowUserModal, closeUserModal]);

  if (!isShowUserModal) return null;

  return (
    <div
      className={css.modalOverlay}
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
    >
      <div className={css.modal}>
        <div className={css.editContainer}>
          <p className={css.text}>Edit profile</p>
          <svg
            width="14"
            height="14"
            className={css.editImg}
            onClick={openEditModal}
          >
            <use href="icons.svg#pencil"></use>
          </svg>
        </div>
        <div className={css.buttonContainer}>
          <Button
            children="Log out"
            variant="logOutBtn"
            onClick={openLogOutModal}
          />
        </div>
      </div>
    </div>
  );
};

export default UserModal;
