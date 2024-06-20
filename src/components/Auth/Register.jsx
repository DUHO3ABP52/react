import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/slices/authSlice";
import "./Register.css";

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    dispatch(registerUser({ name, email, password }))
      .unwrap()
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="registration-form-container">
      <p className="registration-title">Регистрация</p>
      <form onSubmit={handleSubmit}>
        <div className="full-name-container">
          <p className="name-text-display-style">Имя</p>
          <input
            type="text"
            className="input-field-styled-with-border-radius"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="email-container">
          <p className="name-text-display-style">Электронная почта</p>
          <input
            type="email"
            className="input-field-styled-with-border-radius"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="email-container">
          <p className="name-text-display-style">Пароль</p>
          <input
            type="password"
            className="input-field-styled-with-border-radius"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="email-container">
          <p className="name-text-display-style">Подтвердите пароль</p>
          <input
            type="password"
            className="input-field-styled-with-border-radius"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-text-notification">{error}</p>}
        <button type="submit" className="register-button">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Register;