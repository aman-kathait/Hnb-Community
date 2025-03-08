import { Link } from "react-router-dom";

export default function SignUp() {
  // Get the current year
  const currentYear = new Date().getFullYear();
  
  // Generate an array of years from 2000 to the current year + 5
  const yearOptions = [];
  for (let i = 2000; i <= currentYear + 5; i++) {
    yearOptions.push(i);
  }

  // Department options
  const departmentOptions = [
    "CSE", "IT", "ME", "ECE", "EIE"
  ];

  return (
    <>
    <div className="flex items-center justify-center bg-gradient-to-b from-green-150 to-green-200 min-h-screen w-full">
        
        <div className="flex flex-col sm:flex-row sm:bg-gray-100 rounded-2xl sm:shadow-2xl border-none sm:max-w-3xl sm:p-8 border sm:border-gray-300 w-full sm:w-auto">
          <div className="w-full sm:w-1/2 sm:px-5 justify-center">
            <img className="sm:hidden w-1/5 mx-auto" src="Hnblogo.png" alt="" />
            <h2 className="font-bold text-2xl text-center hidden sm:block sm:text-left">Sign Up</h2>
            <p className="hidden sm:block text-sm mt-4 text-center font-semibold sm:text-left">Join us today!</p>
            <form action="" className="flex flex-col gap-4">
              <input className="p-5 sm:p-3 mx-4 sm:mx-0 mt-8 font-semibold sm:text-sm rounded-xl border border-gray-300 bg-white " type="text" name="name" placeholder="Enter your Name" />
              
              <input className="p-5 sm:p-3 mx-4 sm:mx-0 font-semibold sm:text-sm rounded-xl border border-gray-300 bg-white" type="email" name="email" placeholder="Enter your Email" />
              
              <input className="p-5 sm:p-3 mx-4 sm:mx-0 font-semibold sm:text-sm rounded-xl border border-gray-300 bg-white" type="password" name="password" placeholder="Enter your Password" />

              {/* Department Select */}
              <select 
                className="p-5 sm:p-3 mx-4 sm:mx-0 font-semibold sm:text-sm rounded-xl border border-gray-300 bg-white"
                name="department"
              >
                <option value="">Select Department</option>
                {departmentOptions.map((department) => (
                  <option key={department} value={department}>{department}</option>
                ))}
              </select>
              
              {/* Role Select */}
              <select className="p-5 sm:p-3 mx-4 sm:mx-0 font-semibold sm:text-sm rounded-xl border border-gray-300 bg-white" name="role">
                <option value="student">Student</option>
                <option value="alumni">Alumni</option>
              </select>

              {/* Graduation Year Select */}
              <select 
                className="p-5 sm:p-3 mx-4 sm:mx-0 font-semibold sm:text-sm rounded-xl border border-gray-300 bg-white" 
                name="graduationYear"
              >
                <option value="">Select Graduation Year</option>
                {yearOptions.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>

              <button className="bg-[#008336] rounded-xl mx-4 sm:mx-0 font-sm text-white p-4 sm:py-2">Sign Up</button>

            </form>

            <div className="mt-4 mx-3 sm:mx-0 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm text-gray-500">OR</p>
              <hr className="border-gray-400" />
            </div>
           
            <button className="bg-white border border-blue-300 mx-auto sm:mx-0 p-3 sm:p-2 sm:w-full rounded-xl mt-5 flex justify-center font-semibold mb-2 items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
              Login
            </button>
          </div>
          <div className="hidden sm:block sm:w-1/2">
            <img className="rounded-2xl" src="/Sample1.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}