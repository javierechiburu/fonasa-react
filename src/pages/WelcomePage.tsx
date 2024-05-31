import React from "react";
import { useNavigate } from "react-router-dom";
import { loadUser, removeUser } from "../storage/userStorage";

const WelcomePage: React.FC = () => {
  const user = loadUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeUser(); // This function should remove the user from storage
    navigate("/"); // Redirect to login page
  };
  return (
    <div>
      <h1>Bienvenido {user?.name}!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default WelcomePage;
