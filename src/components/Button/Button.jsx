import clsx from "clsx";
import css from "./Button.module.scss";

const Button = ({ children, type, variant, onClick }) => {
  return (
    <button className={clsx(css.btn, css[variant])} type={type}>
      {children}
    </button>
  );
};

export default Button;
