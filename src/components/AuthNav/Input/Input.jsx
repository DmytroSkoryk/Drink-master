import { Field } from "react-final-form";
import css from "./Input.module.scss";

const Input = ({ type, placeholder, name }) => {
  return (
    <Field name={name}>
      {({ input, meta }) => (
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
            <span className={css.notice}>{meta.error || meta.submitError}</span>
          )}
        </div>
      )}
    </Field>
  );
};

export default Input;
