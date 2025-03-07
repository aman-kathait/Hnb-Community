import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout actions (e.g., clear session, remove tokens)
    localStorage.removeItem("token"); // Example: Remove token from localStorage
    navigate("/login"); // Redirect to login page
  }, [navigate]);

  return null; // No UI needed for logout
}