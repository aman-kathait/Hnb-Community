export default function Notifications() {
    return (
      <div className="p-6 rounded-lg shadow-lg bg-white">
      <div className="flex items-center mb-4">
        <img
        src="Profile.jpg"
        alt="User Profile"
        className="w-12 h-12 rounded-full mr-4 border-2 border-blue-500"
        />
        <span className="font-semibold text-gray-700">Abhijeet Rauthan</span>
      </div>
      <textarea
        className="w-full p-3 rounded-lg bg-gray-50 mb-4 focus:outline-none shadow-xl focus:ring-2 focus:ring-blue-400"
        placeholder="What's on your mind?"
        rows="4"
      ></textarea>
      <div className="flex items-center justify-between">
        <label className="flex items-center cursor-pointer text-blue-500 hover:text-blue-600">
        <input type="file" className="hidden" />
        <span className="flex items-center">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 16l4-4m0 0l4 4m-4-4v12m13-12h-3m0 0l-4 4m4-4l4 4"
          />
          </svg>
          Upload Image
        </span>
        </label>
        <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
        Post
        </button>
      </div>
      <div className="mt-4 flex items-center">
        <button className="flex items-center text-gray-500 hover:text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 20h5v-2a3 3 0 00-3-3h-4a3 3 0 00-3 3v2h5m-6 0v-2a5 5 0 015-5h4a5 5 0 015 5v2m-6 0v2m-6-2v2m-6-2v2m6-6a3 3 0 100-6 3 3 0 000 6z"
          />
        </svg>
        Tag people
        </button>
      </div>
      </div>
    );
  }