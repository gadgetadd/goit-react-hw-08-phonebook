import { signUp } from 'redux/authOperations';
import { useDispatch } from 'react-redux';

export const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      name: e.target.elements.name.value,
      email: e.target.elements.login.value,
      password: e.target.elements.password.value,
    };

    dispatch(signUp(user));
  };

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          name
          <input name="name" type="text" />
        </label>
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
