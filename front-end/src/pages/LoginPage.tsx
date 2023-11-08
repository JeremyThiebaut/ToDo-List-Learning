import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "@/redux/store";
import "@/styles/LoginPage.scss";
import { useNavigate } from "react-router-dom";
import { fetchLogin } from "@/store/actions/action";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogged, error } = useSelector(
    (state: StateProps) => state.UserReducer
  );
  const [errorAddMessages, setErrorAddMessages] = React.useState<any>({});
  const [username, setUsername] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const usernameError = validateField("username", username);
    const emailError = validateField("email", email);
    const passwordError = validateField("password", password);

    setErrorAddMessages({
      username: usernameError,
      email: emailError,
      password: passwordError,
    });

    if (usernameError || emailError || passwordError) {
      return;
    }

    dispatch(fetchLogin(username, email, password));
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form__items">
          {error && <div className="input-error">{error}</div>}
          <div
            className={`form__items-container ${
              errorAddMessages.username && "error"
            }`}
          >
            <label className="title-form" htmlFor="username">
              Username
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="username"
              value={username}
              id="username"
              placeholder="Ajouter un nom d'utilisateur"
            />
          </div>
          {errorAddMessages.username && (
            <div className="input-error">{errorAddMessages.username}</div>
          )}
        </div>
        <div className="form__items">
          <div
            className={`form__items-container ${
              errorAddMessages.email && "error"
            }`}
          >
            <label className="title-form" htmlFor="email">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              value={email}
              id="email"
              placeholder="Ajouter un email"
            />
          </div>
          {errorAddMessages.email && (
            <div className="input-error">{errorAddMessages.email}</div>
          )}
        </div>
        <div className="form__items">
          <div
            className={`form__items-container ${
              errorAddMessages.password && "error"
            }`}
          >
            <label className="title-form" htmlFor="password">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              value={password}
              id="password"
              placeholder="Ajouter un mot de passe"
            />
          </div>
          {errorAddMessages.password && (
            <div className="input-error">{errorAddMessages.password}</div>
          )}
        </div>
        <input type="submit" value="Login" className="login-submit" />
      </form>
    </div>
  );
};

export default LoginPage;
