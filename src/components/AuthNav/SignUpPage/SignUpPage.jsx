import css from "./SignUpPage.module.scss";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import { Form, Field } from "react-final-form";

const SignInPage = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className={css.container}>
      <h1 className={css.title}>Registration</h1>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={css.inputContainer}>
              <Field
                name="name"
                component="input"
                placeholder="Name"
                className={css.input}
              />
              <Field
                name="email"
                component="input"
                placeholder="Email"
                className={css.input}
              />
              <Field name="password">
                {() => (
                  <input
                    type="password"
                    placeholder="Password"
                    className={css.input}
                  />
                )}
              </Field>
            </div>
            <div className={css.btnContainer}>
              <Button type="submit" children="Sign Up" variant="signInBtn" />
              <Link to="/signin" className={css.link}>
                Sign in
              </Link>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default SignInPage;
