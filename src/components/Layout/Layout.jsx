import { NavLink, Outlet } from "react-router-dom";
import css from "./Layout.module.scss";

const Loyout = () => {
  return (
    <div className={css.container}>
      <div className={css.headerWrapper}>
        <header className={css.headerContainer}>
          <NavLink to="/" className={css.logoContainer}>
            <svg width="28" height="28">
              <use href="../../../public/icons.svg#logo"></use>
            </svg>
            <p className={css.siteName}>Drink Master</p>
          </NavLink>

          <nav className={css.navContainer}>
            <NavLink to="/" className={css.pages}>
              Home
            </NavLink>
            <NavLink to="/drinks" className={css.pages}>
              Drinks
            </NavLink>
            <NavLink to="/add" className={css.pages}>
              Add recipe
            </NavLink>
            <NavLink to="/my" className={css.pages}>
              My recipes
            </NavLink>
            <NavLink to="/favorites" className={css.pages}>
              Favorites
            </NavLink>
          </nav>
          <div className={css.userContainer}>
            <img
              src="../../../public/user.png"
              alt="user"
              className={css.userPhoto}
            />
            <div className={css.pages}>name</div>
          </div>
        </header>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Loyout;
