import css from "./SignUpPage.module.scss";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import { Form } from "react-final-form";
import { SignUpUser } from "../../../redux/Auth/operations";
import validate from "../validate/validate";
import Input from "../Input/Input";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const onClick = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const errors = validate(values);

    if (!errors || Object.keys(errors).length === 0) {
      try {
        await SignUpUser({
          name: values.name,
          email: values.email,
          password: values.password,
        });
        toast.success("Authorization is successful");
        navigate("/signin");
      } catch (error) {
        if (error.response && error.response.status === 409) {
          toast.error("Email already used");
        }
      }
    } else {
      return errors;
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
              <Input name="name" type="text" placeholder="Name" />
              <Input name="email" type="email" placeholder="Email" />

              <Input
                name="password"
                type={!showPassword ? "password" : "trxt"}
                placeholder="Password"
                onClick={onClick}
                showPassword={showPassword}
              />
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
