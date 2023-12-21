import css from "./EditModal.module.scss";
import Button from "../../Button/Button";
import { useEffect } from "react";
import Input from "../../AuthNav/Input/Input";
import { Form } from "react-final-form";

const EditModal = ({
  isShowEditModal,
  closeEditModal,
  profile,
  onUpdateUser,
}) => {
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

  const onSubmit = (values) => {
    onUpdateUser({ name: values.name, ...values });
  };

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
          <use href="icons.svg#close"></use>
        </svg>

        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <div className={css.userAvatarContainer}>
                  <img
                    src={profile?.avatarURL || ""}
                    alt="User"
                    className={css.userPhoto}
                  />
                </div>
                <svg width="32" height="32" className={css.editImg}>
                  <use href="icons.svg#add-photo"></use>
                </svg>
                <div className={css.inputContainer}>
                  <Input name="name" type="text" placeholder="Name" />
                </div>
              </div>
              <div className={css.btnContainer}>
                <Button
                  type="submit"
                  children="Save changes"
                  variant="saveChangesBtn"
                />
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default EditModal;
