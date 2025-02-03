import { useNavigate } from "react-router-dom";

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  if (!token) {
    navigate("/"); // Redirect to the root path (or your login page)
    return false; // Indicate that authentication failed
  }

  return true; // Indicate that authentication succeeded
};