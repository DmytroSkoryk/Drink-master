import { isUserAuthenticated } from "../../redux/Auth/selectors";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(isUserAuthenticated);
  return isAuth ? <>{children}</> : <Navigate to="/welcome" />;
};

export default PrivateRoute;
