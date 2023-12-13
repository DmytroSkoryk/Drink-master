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
        <div className={css.editContainer}>
          <svg width="32" height="32" className={css.editModalClose}>
            <use href="../../../public/icons.svg#close"></use>
          </svg>
          <div>
            <img
              src="../../../../public/user.png"
              alt="User"
              className={css.userPhoto}
            />
            <svg width="32" height="32" className={css.editImg}>
              <use href="../../../public/icons.svg#add-photo"></use>
            </svg>
          </div>
        </div>
        <div className={css.buttonContainer}>
          <Button children="Save changes" variant="saveChangesBtn" />
        </div>
      </div>
    </div>
  );
};

export default LogOutModal;
