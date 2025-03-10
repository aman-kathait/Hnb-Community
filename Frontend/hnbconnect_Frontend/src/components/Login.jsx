import { useState, useRef } from "react";
import { Link ,useNavigate} from "react-router-dom";

export default function Login() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const [errorMessages, setErrorMessages] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessages([]);
    fetch("http://localhost:3002/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    })
    .then(res=>{
      if (res.status === 200) {
        navigate("/");
      }else if (res.status === 401) {
        return res.json();
      }})
      .then(({errorMessages})=>setErrorMessages(errorMessages));
  }

  return (
    <>
      <div className="flex items-center justify-center bg-gradient-to-b from-green-150 to-green-200 min-h-screen w-full">
        
        <div className="flex flex-col sm:flex-row sm:bg-gray-100 rounded-2xl sm:shadow-2xl border-none sm:max-w-3xl sm:p-8 border sm:border-gray-300 w-full sm:w-auto">
          <div className="w-full sm:w-1/2 sm:px-5 justify-center">
            <img className="sm:hidden w-1/5 mx-auto" src="Hnblogo.png" alt="" />
            <h2 className="font-bold text-2xl text-center hidden sm:block sm:text-left">Login</h2>
            <p className="hidden sm:block text-sm mt-4 text-center font-semibold sm:text-left">Already a member, login in easily</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">

            <label htmlFor="email" className="block text-sm font-medium text-gray-700"></label>
              <input
                type="email"
                id="email"
                ref={emailRef}
                placeholder="Enter your Email"
                className="p-5 sm:p-3 mx-4 sm:mx-0 mt-8 font-semibold sm:text-sm rounded-xl border border-gray-300 bg-white "
              />
              
            <label htmlFor="password" className="block text-sm font-medium text-gray-700"></label>
              <input
                type="password"
                id="password"
                ref={passwordRef}
                placeholder="Enter your Password"
                className="p-5 sm:p-3 mx-4 sm:mx-0 font-semibold sm:text-sm rounded-xl border border-gray-300 bg-white"
              />
              
              <button className="bg-[#008336] rounded-xl mx-4 sm:mx-0 font-sm text-white p-4 mt-3 sm:py-2">Login</button>

              <div className="sm:text-sm font-semibold border-gray-400 text-[#002D74] flex justify-center sm:justify-end  sm:pr-0 hover:scale-105 duration-300">
                <a href="#">Forgotten password?</a>
              </div>
            </form>

            <div className="mt-4 mx-3 sm:mx-0 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm text-gray-500">OR</p>
              <hr className="border-gray-400" />
            </div>
           
            <button className="bg-white border border-blue-300 mx-auto sm:mx-0 p-3 sm:p-2 sm:w-full rounded-xl mt-5 flex justify-center font-semibold mb-2 items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
              <Link to={"/signup"}>Register Now!</Link>
              
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