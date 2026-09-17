import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../context/AuthContext";

export default function LoginPage() {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  if (!context) {
    return null;
  }

  const { login } = context;

  const handleLogin = () => {
    login();
    navigate("/admin");
  };

  return (
    <div>
      <h1>Login</h1>

      <button onClick={handleLogin}>
        Log In
      </button>
    </div>
  );
}