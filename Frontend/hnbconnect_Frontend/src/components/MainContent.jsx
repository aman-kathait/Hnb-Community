import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Notification from "./Notification";
import Logout from "./Logout";
import PostCard from "./PostCard";

export default function MainContent() {
  return (
    <div className="flex-grow overflow-y-auto p-4 md:w-2/3">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/create-post" element={<PostCard />} />
      </Routes>
    </div>
  );
}


