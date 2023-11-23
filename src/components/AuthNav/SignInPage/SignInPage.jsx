import css from "./SignInPage.module.scss";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import { Form, Field } from "react-final-form";

const SignInPage = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className={css.container}>
      <h1 className={css.title}>Sign In</h1>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={css.inputContainer}>
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
