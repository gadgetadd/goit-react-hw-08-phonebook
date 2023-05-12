import { logIn } from "redux/authOperations";
import { useDispatch } from "react-redux";

export const Login = () => {

  const dispatch = useDispatch();
 const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email: e.target.elements.login.value,
      password: e.target.elements.password.value,
    };
    dispatch(logIn(user))
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          login
          <input name="login" type="text" />
        </label>
        <label>
          password
          <input name="password" type="text" />
        </label>
        <button>submit</button>
      </form>
    </>
  );
};
