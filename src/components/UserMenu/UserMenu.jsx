import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOutOperation } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Wellcome {user.name}</p>
      <button
        type="button"
        className={css.btn}
        onClick={() => dispatch(logOutOperation())}
      >
        Log Out
      </button>
    </div>
  );
}

export default UserMenu;
