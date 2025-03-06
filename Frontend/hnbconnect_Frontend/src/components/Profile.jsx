export default function Profile() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-green-150 to-green-200 min-h-screen w-full">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:max-w-3xl w-full sm:w-auto flex flex-col sm:flex-row sm:space-x-6">
        {/* Left Section: Profile Photo and Info */}
        <div className="flex flex-col items-center sm:items-start sm:w-1/3">
          <img
            className="w-32 h-32 sm:w-48 sm:h-48 rounded-full border-4 border-[#008336] object-cover"
            src="Sampleprofile.jpg" // Add your image URL here
            alt="Profile"
          />
          <h2 className="font-semibold text-xl text-center sm:text-left mt-4 text-gray-800">Abhijeet Kumar</h2>
          <p className="text-sm text-gray-500 text-center sm:text-left">Senior Intern</p>

          {/* Department and Graduation Year */}
          <div className="text-center sm:text-left mt-4 space-y-1">
            <p className="text-sm text-gray-600">B.Tech in Computer Science</p>
            <p className="text-sm text-gray-600">Graduation Year: 2025</p>
          </div>

          {/* Followers and Following */}
          <div className="flex space-x-6 mt-4 text-center sm:text-left">
            <div className="flex flex-col items-center">
              <p className="font-semibold text-lg">0</p>
              <p className="text-sm text-gray-500">Followers</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-semibold text-lg">10</p>
              <p className="text-sm text-gray-500">Following</p>
            </div>
          </div>
        </div>

        {/* Right Section: Bio */}
        <div className="sm:w-2/3 mt-6 sm:mt-0">
          <h3 className="font-semibold text-xl text-gray-800">About Me</h3>
          <p className="text-sm mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt architecto ratione dolore fuga ipsam non amet neque asperiores dolores, labore, quasi molestias magnam similique molestiae accusantium tenetur pariatur quod recusandae cupiditate ipsa excepturi totam! Magni odio inventore dolores modi! Ullam.
          </p>
        </div>
      </div>
    </div>
  );
  }