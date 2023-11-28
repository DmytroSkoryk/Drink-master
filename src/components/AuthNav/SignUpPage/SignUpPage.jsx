import css from "./SignUpPage.module.scss";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import { Form, Field } from "react-final-form";
import SignUpUser from "../../../redux/Auth/operations";

const SignUpPage = () => {
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    console.log(values);
    const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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
      navigate("auth/signin");
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
                {({ input, meta }) => (
                  <div className={css.inputWrapper}>
                    <input
                      {...input}
                      type="password"
                      placeholder="Password"
                      className={css.input}
                    />
                    {(meta.error || meta.submitError) && meta.touched && (
                      <span>{meta.error || meta.submitError}</span>
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
