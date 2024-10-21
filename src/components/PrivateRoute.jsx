import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectLogedIn } from "../redux/auth/selectors";

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectLogedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
