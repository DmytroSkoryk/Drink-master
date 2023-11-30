import css from "./SignUpPage.module.scss";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import { Form, Field } from "react-final-form";
import { SignUpUser } from "../../../redux/Auth/operations";

const SignUpPage = () => {
  const navigate = useNavigate();
  const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const onSubmit = async (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Enter your name";
    }
    if (!values.email) {
      errors.email = "Enter your email";
    } else if (!emailRegexp.test(values.email)) {
      errors.email = "Email incorrect";
    }

    if (!values.password) {
      errors.password = "Enter your password";
    } else if (values.password.length < 6) {
      errors.password = "Password should be at least 6 characters";
    }

    if (Object.keys(errors).length > 0) {
      return errors;
    }
    try {
      await SignUpUser({
        name: values.name,
        email: values.email,
        password: values.password,
      });
      toast.success("Authorization is successful");
      navigate("/signin");
    } catch (error) {
      if (error.response.status === 409) {
        toast.error("Email already used");
      }
    }
  };
  return (
    <div className={css.container}>
      <h1 className={css.title}>Registration</h1>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={css.inputContainer}>
              <Field name="name">
                {({ input, meta }) => (
                  <div className={css.inputWrapper}>
                    <input
                      {...input}
                      type="text"
                      placeholder="Name"
                      className={css.input}
                    />
                    {(meta.error || meta.submitError) && meta.touched && (
                      <span className={css.notice}>
                        {meta.error || meta.submitError}
                      </span>
                    )}
                  </div>
                )}
              </Field>
              <Field name="email">
                {({ input, meta }) => (
                  <div className={css.inputWrapper}>
                    <input
                      {...input}
                      type="email"
                      placeholder="Email"
                      className={css.input}
                    />
                    {(meta.error || meta.submitError) && meta.touched && (
                      <span className={css.notice}>
                        {meta.error || meta.submitError}
                      </span>
                    )}
                  </div>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <div className={css.inputWrapper}>
                    <input
                      {...input}
                      type="password"
                      placeholder="Password"
                      className={css.input}
                    />
                    {(meta.error || meta.submitError) && meta.touched && (
                      <span className={css.notice}>
                        {meta.error || meta.submitError}
                      </span>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <div className={css.btnContainer}>
              <Button type="submit" children="Sign Up" variant="signInBtn" />
              <Link to="/signin" className={css.link}>
                Sign In
              </Link>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default SignUpPage;
