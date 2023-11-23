import css from "./Welcome.module.scss";
import Button from "../../Button/Button";
import { NavLink } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to the app!</h1>
      <p className={css.text}>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </p>
      <div className={css.btnContainer}>
        <NavLink to="/signup">
          <Button type="button" children="Registration" />
        </NavLink>
        <NavLink to="/signin">
          <Button type="button" children="Sign In" />
        </NavLink>
      </div>
    </div>
  );
};
export default WelcomePage;
