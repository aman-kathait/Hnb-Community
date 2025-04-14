import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-2">
        <div className="flex items-center h-16 justify-between">
          {/* Left Side: Brand Name */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-9 mr-2" src="Hnblogo.png" alt="HNB Logo" />
            <h1 className="text-lg md:text-2xl font-bold text-[#008336] mr-18">
              HNB <span className="text-black">Connect</span>
            </h1>
          </div>

          {/* Center: Search Bar */}
          <div className="hidden md:block md:flex-grow md:mx-4">
            <input
              type="text"
              placeholder="🔍 Search Here"
              className="w-153 p-2 text-sm font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="m-5">
          <Link to="/" className="hidden md:block  flex-col items-center text-gray-700 hover:text-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span className="text-xs md:hidden">Home</span>
      </Link>

          </div>
          <div className="m-6 hidden md:block">
          <Link to="/notifications" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
              <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
            >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <span className="text-xs md:hidden">Notifications</span>
            </Link>
           </div>

           <div className="m-6 hidden md:block">
          <Link to="/create-post" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span className="text-xs md:hidden">Create Post</span>
          </Link>
        </div>
          {/* Right Side: Logout Button */}
          <Link to="/logout" div className="hidden md:block flex-shrink-0 ml-5">

            <button
            
              className="bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 text-sm font-semibold"
              onClick={() => {
                
                console.log("Logout clicked");
              }}
            >
              + LOGOUT
            </button>
          </Link>
        
          
        </div>
      </div>
    </div>
  );
}