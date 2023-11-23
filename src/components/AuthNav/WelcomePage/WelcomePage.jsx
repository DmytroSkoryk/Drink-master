import css from "./Welcome.module.scss";
import Button from "../../Button/Button";

const WelcomePage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to the app!</h1>
      <p className={css.text}>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </p>
      <div>
        <Button children="Registration" />
        <Button children="Sign In" />
      </div>
    </div>
  );
};
export default WelcomePage;
