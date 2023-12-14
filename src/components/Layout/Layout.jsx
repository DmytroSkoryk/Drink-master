import { NavLink, Outlet } from "react-router-dom";
import css from "./Layout.module.scss";
import User from "../User/User";
import { use } from "react-use";

const Loyout = () => {
  return (
    <div className={css.container}>
      <div className={css.headerWrapper}>
        <header className={css.headerContainer}>
          <NavLink to="/" className={css.logoContainer}>
            <svg width="28" height="28">
              <use href="icons.svg#logo"></use>
            </svg>
            {use(
              "icons.svg#logo",
              "editModalClose",
              "32",
              "32",
              css.editModalClose,
              { onClick: closeLogOutModal }
            )}
            <p className={css.siteName}>Drink Master</p>
          </NavLink>

          <nav className={css.navContainer}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? css.activePage : css.notActivePage
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/drinks"
              className={({ isActive }) =>
                isActive ? css.activePage : css.notActivePage
              }
            >
              Drinks
            </NavLink>
            <NavLink
              to="/add"
              className={({ isActive }) =>
                isActive ? css.activePage : css.notActivePage
              }
            >
              Add recipe
            </NavLink>
            <NavLink
              to="/my"
              className={({ isActive }) =>
                isActive ? css.activePage : css.notActivePage
              }
            >
              My recipes
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? css.activePage : css.notActivePage
              }
            >
              Favorites
            </NavLink>
          </nav>
          <User />
        </header>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Loyout;
