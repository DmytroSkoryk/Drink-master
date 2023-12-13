import css from "./EditModal.module.scss";
import Button from "../../Button/Button";
import { useEffect } from "react";

const EditModal = ({ isShowEditModal, closeEditModal }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeEditModal();
    }
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeEditModal();
    }
  };

  useEffect(() => {
    if (isShowEditModal) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isShowEditModal, closeEditModal]);

  if (!isShowEditModal) return null;

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
          onClick={closeEditModal}
        >
          <use href="/public/icons.svg#close"></use>
        </svg>
        <div>
          <img src="/public/user.png" alt="User" className={css.userPhoto} />
          <svg width="32" height="32" className={css.editImg}>
            <use href="/public/icons.svg#add-photo"></use>
          </svg>
        </div>

        <input type="text" className={css.input} />
        <div className={css.buttonContainer}>
          <Button children="Save changes" variant="saveChangesBtn" />
        </div>
      </div>
    </div>
  );
};

export default EditModal;