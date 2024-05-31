import React, { useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../storage/userStorage";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");

    if (!username.trim() || !password.trim()) {
      setTouched(true);
      return;
    }

    try {
      const response = await login(username, password);

      if (response) {
        saveUser(response);
        navigate("/welcome");
      }
    } catch (error) {
      setError("Nombre de usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="form-card">
      {error && <p className="error">{error}</p>}
      <div className="form-input">
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {username === "" && touched && (
          <span className="error">Este campo es requerido</span>
        )}
      </div>

      <div className="form-input">
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {password === "" && touched && (
          <span className="error">Este campo es requerido</span>
        )}
      </div>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
