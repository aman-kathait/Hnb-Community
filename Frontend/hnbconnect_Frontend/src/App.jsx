function App() {
  return (
    <>
      <div className="flex items-center justify-center bg-gradient-to-b from-green-150 to-green-200 min-h-screen w-full">
        
        <div className="flex flex-col sm:flex-row sm:bg-gray-100 rounded-2xl sm:shadow-2xl border-none sm:max-w-3xl sm:p-8 border sm:border-gray-300 w-full sm:w-auto">
          <div className="w-full sm:w-1/2 sm:px-5 justify-center">
            <img className="sm:hidden w-1/5 mx-auto" src="Hnblogo.png" alt="" />
            <h2 className="font-bold text-2xl text-center hidden sm:block sm:text-left">Login</h2>
            <p className="hidden sm:block text-sm mt-4 text-center font-semibold sm:text-left">Already a member, login in easily</p>
            <form action="" className="flex flex-col gap-4">
              <input className="p-5 sm:p-3 mx-4 sm:mx-0 mt-8 font-semibold sm:text-sm rounded-xl border border-gray-300 bg-white " type="text" name="email" id="" placeholder="Enter your email" />
              
              <input className="p-5 sm:p-3 mx-4 sm:mx-0 font-semibold sm:text-sm rounded-xl border border-gray-300 bg-white" type="password" name="password" id="" placeholder="Enter your password" />
              
              <button className="bg-[#008336] rounded-xl mx-4 sm:mx-0 font-sm text-white p-4 sm:py-2">Login</button>

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
              Register Now!
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

export default App;
