import { useSelector } from "react-redux";
import { selectLogedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

function Navigation() {
  const isLoggedIn = useSelector(selectLogedIn);
  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home Page
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
