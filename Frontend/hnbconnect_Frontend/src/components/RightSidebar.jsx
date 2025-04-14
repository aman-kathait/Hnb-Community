export default function RightSidebar() {
  return (
    <div className="hidden md:block md:w-1/3 p-4">

      {/* Who to Follow Section */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="font-bold">Who to Follow</h2>
        <div className="mt-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img
                src="profile5.jpg"
                alt="User"
                className="rounded-full  h-12 w-12"
              />
              <div className="ml-2">
                <p className="font-bold">Dheeraj Bisht</p>
                <p className="text-gray-500 text-sm">@Dheeraj_22332</p>
              </div>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
              Follow
            </button>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img
                src="profile4.jpg"
                alt="User"
                className="rounded-full h-12 w-12"
              />
              <div className="ml-2">
                <p className="font-bold">Kshtiz Thapliyal</p>
                <p className="text-gray-500 text-sm">@Kshitiz_2113</p>
              </div>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}