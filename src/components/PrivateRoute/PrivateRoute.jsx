import { isUserAuthenticated } from "../../redux/Auth/selectors";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // Завантаження стану аутентифікації при ініціалізації компонента
  const isAuth =
    useSelector(isUserAuthenticated) || localStorage.getItem("authToken");

  useEffect(() => {
    // Зберегти стан аутентифікації в localStorage при кожній зміні
    localStorage.setItem("authToken", isAuth);
  }, [isAuth]);

  return isAuth ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;
