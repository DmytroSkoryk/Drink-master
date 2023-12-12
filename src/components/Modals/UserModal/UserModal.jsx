import css from "./Modal.module.scss";
import Button from "../../Button/Button";
import { useEffect } from "react";

const UserModal = ({ isOpenUserModal, closeUserModal, openEditModal }) => {
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
    if (isOpenUserModal) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpenUserModal, closeUserModal]);

  if (!isOpenUserModal) return null;

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
            <use href="../../../public/icons.svg#pencil"></use>
          </svg>
        </div>
        <div className={css.buttonContainer}>
          <Button children="Log out" variant="logOutBtn" />
        </div>
      </div>
    </div>
  );
};

export default UserModal;
