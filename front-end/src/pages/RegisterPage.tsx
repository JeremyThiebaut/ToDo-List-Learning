import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "@/redux/store";
import "@/styles/RegisterPage.scss";
import { useNavigate } from "react-router-dom";
import { registerUser } from "@/store/actions/action";

interface Props {
  username: string;
  email: string;
  password: string;
}

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogged, error } = useSelector(
    (state: StateProps) => state.UserReducer
  );
  const [errorMessages, setErrorMessages] = React.useState<Props>({
    username: "",
    email: "",
    password: "",
  });

  const [values, setValues] = React.useState<Props>({
    username: "",
    email: "",
    password: "",
  });

  React.useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged, navigate]);

  React.useEffect(() => {
    setErrorMessages({
      username: values.username.length > 0 ? "" : errorMessages.username,
      email: values.email.length > 0 ? "" : errorMessages.email,
      password: values.password.length > 0 ? "" : errorMessages.password,
    });
  }, [
    errorMessages.email,
    errorMessages.password,
    errorMessages.username,
    values,
  ]);

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

    const usernameError = validateField("username", values.username);
    const emailError = validateField("email", values.email);
    const passwordError = validateField("password", values.password);

    setErrorMessages({
      username: usernameError,
      email: emailError,
      password: passwordError,
    });

    dispatch(registerUser(...Object.values(values)));
  };

  return (
    <div className="register-page">
      <h2 className="register-title">Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        {/* {error && (
          <div className="input-error">Email ou mot de passe incorrect</div>
        )} */}
        <div className="form__items">
          <div
            className={`form__items-container ${
              errorMessages.username && "error"
            }`}
          >
            <label className="title-form" htmlFor="username">
              Username
            </label>
            <input
              onChange={handleInput}
              type="username"
              name="username"
              value={values.username}
              id="username"
              placeholder="Ajouter un username"
            />
          </div>
          {errorMessages.username && (
            <div className="input-error">{errorMessages.username}</div>
          )}
        </div>
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
        <input type="submit" value="Send" className="register-submit" />
      </form>
    </div>
  );
};

export default RegisterPage;
