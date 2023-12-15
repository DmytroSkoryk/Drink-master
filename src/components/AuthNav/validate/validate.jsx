const validate = (values) => {
  const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
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
  } else if (!passwordRegexp.test(values.password)) {
    errors.password =
      "Password should be at least 6 charactersThe password must contain one number and at least one uppercase and lowercase letter";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }
};

export default validate;
