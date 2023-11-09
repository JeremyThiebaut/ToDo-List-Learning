import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "@/redux/store";
import "@/styles/LoginPage.scss";
import { useNavigate } from "react-router-dom";
import { fetchLogin } from "@/store/actions/action";

interface Props {
  email: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogged, loginError } = useSelector(
    (state: StateProps) => state.UserReducer
  );
  const [errorMessages, setErrorMessages] = React.useState<Props>({
    email: "",
    password: "",
  });

  const [values, setValues] = React.useState<Props>({
    email: "",
    password: "",
  });

  React.useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged, navigate]);

  const validateField = (field: string, value: string) => {
    if (value.length <= 0) {
      return `Le champ ${field} est requis`;
    }
    return "";
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailError = validateField("email", values.email);
    const passwordError = validateField("password", values.password);

    setErrorMessages({
      email: emailError,
      password: passwordError,
    });

    if (emailError || passwordError) {
      return;
    }

    dispatch(fetchLogin(...Object.values(values)));
  };

  return (
    <div className="login-page">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        {loginError && (
          <div className="input-error">Email ou mot de passe incorrect</div>
        )}
        <div className="form__items">
          <div
            className={`form__items-container ${
              errorMessages.email && "error"
            }`}
          >
            <label className="title-form" htmlFor="email">
              Email
            </label>
            <input
              onChange={handleInput}
              type="email"
              name="email"
              value={values.email}
              id="email"
              placeholder="Ajouter un email"
            />
          </div>
          {errorMessages.email && (
            <div className="input-error">{errorMessages.email}</div>
          )}
        </div>
        <div className="form__items">
          <div
            className={`form__items-container ${
              errorMessages.password && "error"
            }`}
          >
            <label className="title-form" htmlFor="password">
              Password
            </label>
            <input
              onChange={handleInput}
              type="password"
              name="password"
              value={values.password}
              id="password"
              placeholder="Ajouter un mot de passe"
            />
          </div>
          {errorMessages.password && (
            <div className="input-error">{errorMessages.password}</div>
          )}
        </div>
        <input type="submit" value="Login" className="login-submit" />
      </form>
    </div>
  );
};

export default LoginPage;
