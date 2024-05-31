import { Navigate } from "react-router-dom";

interface AuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  const token = localStorage.getItem("user");
  if (token) {
    return <Navigate to="/welcome" />;
  }
  return children;
};

export default AuthRoute;
