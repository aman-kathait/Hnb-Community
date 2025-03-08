import LeftSidebar from "./LeftSidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";

export default function MainPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Main Content */}
      <MainContent />

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
}