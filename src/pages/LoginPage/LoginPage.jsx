import { useDispatch } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { logInOperation } from "../../redux/auth/operations";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const login = (userData) => {
    dispatch(logInOperation(userData));
  };

  return (
    <>
      <h2>Login</h2>
      <br></br>
      <LoginForm submit={login} />
    </>
  );
};

export default RegistrationPage;
