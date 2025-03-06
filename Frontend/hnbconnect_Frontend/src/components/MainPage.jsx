import { useState } from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Feed from "./Feed";
import Profile from "./Profile";

export default function MainPage() {
  const [activeTab, setActiveTab] = useState("feed");

  return (
    <div className="flex min-h-screen">
      {/* Side Navigation Bar */}
      <LeftSidebar />

      {/* Main Content */}
      <div className="flex-grow overflow-y-auto p-4 md:w-2/3">
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setActiveTab("feed")}
            className={`px-4 py-2 mr-2 ${
              activeTab === "feed" ? "bg-blue-500 text-white" : "bg-gray-200"
            } rounded-full`}
          >
            Feed
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-4 py-2 ${
              activeTab === "profile" ? "bg-blue-500 text-white" : "bg-gray-200"
            } rounded-full`}
          >
            Profile
          </button>
        </div>
        {activeTab === "feed" ? <Feed /> : <Profile />}
      </div>

      {/* Right Section */}
      <div className="hidden md:block md:w-1/3 p-4">
        <RightSidebar />
      </div>
    </div>
  );
}


