import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";

export default function MainPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-grow pt-16">
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Main Content */}
        <MainContent />

        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
}