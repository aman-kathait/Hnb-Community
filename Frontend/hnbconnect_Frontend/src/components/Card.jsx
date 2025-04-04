import React from 'react'
import { Link } from "react-router-dom";
const Card = () => {
  return (
    <div className='m-4 mb- bg-slate-800  shadow-md rounded-lg flex flex-col items-center justify-center'>
      <div>
        <div className='w-full rounded-lg'>
          <img className="rounded-lg w-max" src="Cover.jpg" alt="" />
        </div>
        <div className='flex justify-center items-center mt-[-90px] mb-2'>
            <img className='h-20 w-20 bg-white p-1 rounded-full' src="Profile.jpg" />  
        </div>
        
      </div>
      <div className='text-center mt-2 mb-3'>
        <h1 className='text-xl font-semibold text-white'>Abhijeet Rauthan</h1>
        <p className='text-sm text-white'>Btech 4th year</p>
      </div>

      <div className='flex bg-gray-50 border rounded-lg mb-3 m-'>
        <div className='w-1/2 text-center p-2 hover:bg-violet-200 hover:rounded-lg cursor-pointer'>
          <p><span className='font-semibold'>1.5k</span></p>
          <p>Followers</p>
        </div>

        <div className='border'></div>

        <div className='w-1/2 text-center p-2 hover:bg-violet-200 hover:rounded-lg cursor-pointer'>
        <p><span className='font-semibold'>3.2k</span></p>
        <p>Following</p>
        </div>
      </div>
      <div className='mb-4'>
        <Link to="/profile" button className='bg-green-400 p-2 w-30 font-2px text-sm font-semibold text-white rounded-lg'>MY PROFILE</Link>
      </div>
    </div>
  )
}

export default Card