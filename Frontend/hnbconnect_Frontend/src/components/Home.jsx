import { useState } from "react";
import Feed from "./Feed";
import EventPosts from "./EventPosts";

export default function Home() {
  const [activeTab, setActiveTab] = useState("feed");

  return (
    <div className="p-4">
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
          onClick={() => setActiveTab("events")}
          className={`px-4 py-2 ${
            activeTab === "events" ? "bg-blue-500 text-white" : "bg-gray-200"
          } rounded-full`}
        >
          Events
        </button>
      </div>
      {activeTab === "feed" ? <Feed /> : <EventPosts />}
    </div>
  );
}