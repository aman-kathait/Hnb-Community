import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

export default function App() {
  const isLoggedIn = true;
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={isLoggedIn ? <MainPage /> : <Login />} />
      </Routes>
    </Router>
    );
  }