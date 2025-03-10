import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {

  const emailRef = useRef();
  const fullNameRef = useRef();
  const passwordRef = useRef();
  const departmentRef = useRef();
  const graduationYearRef = useRef();
  const userTypeRef = useRef();
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState([]);

  // const confirmPasswordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessages([]);
    fetch("http://localhost:3002/register", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        fullName: fullNameRef.current.value,
        password: passwordRef.current.value,
        role: userTypeRef.current.value,
        department: departmentRef.current.value,
        graduationYear: graduationYearRef.current.value
      }),
    })
    .then(res=>{
      if (res.status === 201) {
        navigate("/login");
      }else if (res.status === 422) {
        return res.json();
      }})
      .then(({errorMessages})=>setErrorMessages(errorMessages));
  }

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

  // State to manage the selected role
  const [selectedRole, setSelectedRole] = useState("");

  // Event handler for role change
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
    if (event.target.value === "teacher") {
      departmentRef.current.disabled = true;
      graduationYearRef.current.disabled = true;
      departmentRef.current.classList.add("bg-gray-200", "text-gray-500");
      graduationYearRef.current.classList.add("bg-gray-200", "text-gray-500");
    } else {
      departmentRef.current.disabled = false;
      graduationYearRef.current.disabled = false;
      departmentRef.current.classList.remove("bg-gray-200", "text-gray-500");
      graduationYearRef.current.classList.remove("bg-gray-200", "text-gray-500");
    }
  };

  return (
    <>
    <div className="flex items-center justify-center bg-gradient-to-b from-green-150 to-green-200 min-h-screen w-full">
        
        <div className="flex flex-col sm:flex-row sm:bg-gray-100 rounded-2xl sm:shadow-2xl border-none sm:max-w-3xl sm:p-8 border sm:border-gray-300 w-full sm:w-auto">
          <div className="w-full sm:w-1/2 sm:px-5 justify-center">
            <img className="sm:hidden w-1/5 mx-auto" src="Hnblogo.png" alt="" />
            <h2 className="font-bold text-2xl text-center hidden sm:block sm:text-left">Sign Up</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700"></label>
              <input
                type="text"
                id="fullName"
                ref={fullNameRef}
                placeholder="Enter your Name"
                className="p-5 sm:p-3 mx-4 sm:mx-0 mt-4 font-semibold sm:text-sm rounded-xl border border-gray-300 bg-white"
              />
              
              <label htmlFor="email" className="block text-sm font-medium text-gray-700"></label>
              <input
                type="email"
                id="email"
                ref={emailRef}
                placeholder="Enter your Email"
                className="p-5 sm:p-3 mx-4 sm:mx-0 font-semibold sm:text-sm rounded-xl border border-gray-300 bg-white"
              />

              <label htmlFor="password" className="block text-sm font-medium text-gray-700"></label>
              <input
                type="password"
                id="password"
                ref={passwordRef}
                placeholder="Enter your Password"
                className="p-5 sm:p-3 mx-4 sm:mx-0 font-semibold sm:text-sm rounded-xl border border-gray-300 bg-white"
              />

              <label htmlFor="userType" className="block text-sm font-medium text-gray-700"></label>
              <select
                id="userType"
                ref={userTypeRef}
                className="p-5 sm:p-3 mx-4 sm:mx-0 font-semibold sm:text-sm rounded-xl border border-gray-300 bg-white"
                onChange={handleRoleChange}
              >
                <option value="">Select Role</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>

              <label htmlFor="department" className="block text-sm font-medium text-gray-700"></label>
              <select
                id="department"
                ref={departmentRef}
                className="p-5 sm:p-3 mx-4 sm:mx-0 font-semibold sm:text-sm rounded-xl border border-gray-300 bg-white"
              >
                <option value="">Select Department</option>
                {departmentOptions.map((department) => (
                  <option key={department} value={department}>{department}</option>
                ))}
              </select>
              
              <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700"></label>
              <select
                id="graduationYear"
                ref={graduationYearRef}
                className="p-5 sm:p-3 mx-4 sm:mx-0 font-semibold sm:text-sm rounded-xl border border-gray-300 bg-white"
              >
                <option value="">Select Graduation Year</option>
                {yearOptions.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>

              <button className="bg-[#008336] rounded-xl mx-4 sm:mx-0 mt-2 font-sm text-white p-4 sm:py-2">Sign Up</button>
            </form>

            <div className="mt-4 mx-3 sm:mx-0 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm text-gray-500">OR</p>
              <hr className="border-gray-400" />
            </div>
           
            <button className="bg-white border border-blue-300 mx-auto sm:mx-0 p-3 sm:p-2 sm:w-full rounded-xl mt-5 flex justify-center font-semibold mb-2 items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
              <Link to={"/login"}>Login</Link>
            </button>

            {errorMessages.map((errorMsg,index)=> <div key={index}>{errorMsg}</div>)}
          </div>
          <div className="hidden sm:block sm:w-1/2">
            <img className="rounded-2xl" src="/Sample1.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}