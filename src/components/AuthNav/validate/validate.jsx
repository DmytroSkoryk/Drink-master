const validate = (values) => {
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
};

export default validate;
