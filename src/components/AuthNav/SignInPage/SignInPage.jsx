import css from "./SignInPage.module.scss";
import Button from "../../Button/Button";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { SignInThank } from "../../../redux/Auth/operations";
import { isUserAuthenticated } from "../../../redux/Auth/selectors";
import { useEffect } from "react";
import Input from "../Input/Input";
import validate from "../validate/validate";

const SignInPage = () => {
  const isAuth = useSelector(isUserAuthenticated);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    const result = await dispatch(
      SignInThank({ email: values.email, password: values.password })
    );

    if (
      (values.email && values.password && result.payload === 400) ||
      result.payload === 401
    ) {
      toast.error("Invalid email or password");
    }
    if (!values.email || !values.password) {
      const errors = validate(values);
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
              <Input name="email" type="email" placeholder="Email" />
              <Input name="password" type="password" placeholder="Password" />
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
