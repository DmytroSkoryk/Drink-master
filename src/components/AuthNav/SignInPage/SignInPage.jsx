import css from "./SignInPage.module.scss";
import Button from "../../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { SignInThank } from "../../../redux/Auth/operations";
import { isUserAuthenticated } from "../../../redux/Auth/selectors";
import { useEffect } from "react";

const SignInPage = () => {
  const isAuth = useSelector(isUserAuthenticated);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(SignInThank({ email: values.email, password: values.password }));

    const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const errors = {};
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
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Sign In</h1>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={css.inputContainer}>
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
              <Button type="submit" children="Sign In" variant="signInBtn" />
              <Link to="/signup" className={css.link}>
                Registration
              </Link>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default SignInPage;
