import React from 'react';

function ProfileSetup() {
  
  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-green-150 to-green-200 min-h-screen w-full">
      <div className="flex flex-col sm:bg-gray-100 rounded-2xl sm:shadow-2xl border-none sm:max-w-3xl sm:p-8 border sm:border-gray-300 w-full sm:w-auto">
        {/* Left Section */}
        <div className="w-full sm:w-full sm:px-8 py-6 flex flex-col items-center justify-center">
          <h2 className="font-bold text-2xl text-center sm:text-left text-gray-800 mb-6">Update Your Profile</h2>

          <form className="flex flex-col gap-6 w-full">
            {/* Profile Image */}
            <div className="flex justify-center items-center w-full">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="profileImageInput"
              />
              <label htmlFor="profileImageInput" className="cursor-pointer text-[#008336] bg-white rounded-xl p-4 text-sm border border-gray-300 w-full sm:w-2/3 flex justify-center items-center">
                <span className="text-center">Upload Profile Image</span>
              </label>
            </div>

            {/* Bio Textarea */}
            <textarea
              className="p-4 sm:p-5 w-full font-semibold sm:text-sm rounded-xl border border-gray-300 bg-white"
              placeholder="Tell us about yourself (max 250 words)"
              rows="6"
            />

            {/* Update Profile Button */}
            <button className="bg-[#008336] rounded-xl w-full sm:w-1/2 mx-auto font-semibold text-white p-4 sm:py-2 hover:bg-green-600 transition-all duration-300">
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileSetup;
