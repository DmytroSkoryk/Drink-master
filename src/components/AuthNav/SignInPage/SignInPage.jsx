import React, { useState } from "react";
import css from "./SignInPage.module.scss";
import Button from "../../Button/Button";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const [activeInput, setActiveInput] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const handleInputFocus = (fieldName) => {
    setActiveInput(fieldName);
  };

  const handleInputBlur = () => {
    setActiveInput("");
  };

  const handleSelect = (event) => {
    const { value } = event.target;
    setSelectedValue(value);
  };

  const getInputClassName = (fieldName) => {
    return `${css.input} ${activeInput === fieldName ? css.activeInput : ""} ${
      selectedValue && selectedValue === fieldName ? css.selectedInput : ""
    }`;
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Sign In</h1>

      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <div className={css.inputContainer}>
              <Field
                name="email"
                component="input"
                placeholder="Email"
                className={getInputClassName("email")}
                onFocus={() => handleInputFocus("email")}
                onBlur={handleInputBlur}
                onSelect={handleSelect}
              />
              <Field name="phone">
                {() => (
                  <input
                    type="password"
                    placeholder="Password"
                    className={getInputClassName("phone")}
                    onFocus={() => handleInputFocus("phone")}
                    onBlur={handleInputBlur}
                    onSelect={handleSelect}
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
