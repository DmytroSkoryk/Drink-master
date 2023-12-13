import css from "./LogOutModal.module.scss";
import Button from "../../Button/Button";
import { useEffect } from "react";

const LogOutModal = ({ isShowLogOutModal, closeLogOutModal }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeLogOutModal();
    }
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeLogOutModal();
    }
  };

  useEffect(() => {
    if (isShowLogOutModal) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isShowLogOutModal, closeLogOutModal]);

  if (!isShowLogOutModal) return null;

  return (
    <div
      className={css.modalOverlay}
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
    >
      <div className={css.modal}>
        <svg
          width="32"
          height="32"
          className={css.editModalClose}
          onClick={closeLogOutModal}
        >
          <use href="icons.svg#close"></use>
        </svg>
        <p className={css.title}>Are you sure you want to log out?</p>
        <div className={css.buttonContainer}>
          <Button children="Log out" variant="logOutCancelBtn" />
          <Button
            children="Cancel"
            variant="logOutCancelBtn"
            onClick={closeLogOutModal}
          />
        </div>
      </div>
    </div>
  );
};

export default LogOutModal;
