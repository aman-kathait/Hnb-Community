import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import MainPage from "./components/MainPage";

export default function App() {
  const isLoggedIn = true; // Replace with actual authentication logic

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <MainPage /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}