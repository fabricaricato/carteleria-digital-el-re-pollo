import { Navigate } from "react-router-dom";

const ProtectedResetRoute = ({ children }) => {
  const canReset = localStorage.getItem("canResetPassword") === "true";
  return canReset ? children : <Navigate to="/" replace />;
};

export default ProtectedResetRoute;
