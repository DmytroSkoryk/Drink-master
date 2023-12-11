import { Field } from "react-final-form";
import css from "./Input.module.scss";

const Input = ({ type, placeholder, name, onClick, showPassword }) => {
  return (
    <Field name={name}>
      {({ input, meta }) =>
        name !== "password" ? (
          <div className={css.inputWrapper}>
            <input
              {...input}
              type={type}
              placeholder={placeholder}
              className={`${css.input} ${
                meta.error || meta.submitError ? css.active : ""
              }`}
            />
            {(meta.error || meta.submitError) && meta.touched && (
              <span className={css.notice}>
                {meta.error || meta.submitError}
              </span>
            )}
          </div>
        ) : (
          <div className={css.inputWrapper}>
            <div
              className={`${css.passwordContainer} ${
                meta.error || meta.submitError ? css.active : ""
              }`}
            >
              <input
                {...input}
                type={type}
                placeholder={placeholder}
                className={css.inputPassword}
              />
              {!showPassword ? (
                <svg
                  width="24"
                  height="24"
                  className={css.imgShowPassword}
                  onClick={onClick}
                >
                  <use href="../../../public/icons.svg#eye-off"></use>
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  className={css.imgShowPassword}
                  onClick={onClick}
                >
                  <use href="../../../public/icons.svg#eye"></use>
                </svg>
              )}
            </div>

            {(meta.error || meta.submitError) && meta.touched && (
              <span className={css.notice}>
                {meta.error || meta.submitError}
              </span>
            )}
          </div>
        )
      }
    </Field>
  );
};

export default Input;
