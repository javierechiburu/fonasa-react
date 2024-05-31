import React from "react";
import { loadUser } from "../storage/userStorage";

const WelcomePage: React.FC = () => {
  const user = loadUser();
  return (
    <div>
      <h1>Bienvenido {user?.name}!</h1>
    </div>
  );
};

export default WelcomePage;
