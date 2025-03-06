export default function RightSidebar() {
  return (
    <div className="p-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="font-bold">Who to Follow</h2>
        <div className="mt-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="rounded-full"
              />
              <div className="ml-2">
                <p className="font-bold">User 1</p>
                <p className="text-gray-500">@user1</p>
              </div>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
              Follow
            </button>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="rounded-full"
              />
              <div className="ml-2">
                <p className="font-bold">User 2</p>
                <p className="text-gray-500">@user2</p>
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