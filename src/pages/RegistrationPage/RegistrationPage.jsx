import { useDispatch } from "react-redux";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { registerOperation } from "../../redux/auth/operations";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const register = (userData) => {
    dispatch(registerOperation(userData));
  };

  return (
    <>
      <h2>Register</h2>
      <br></br>
      <RegistrationForm submit={register} />
    </>
  );
};

export default RegistrationPage;
