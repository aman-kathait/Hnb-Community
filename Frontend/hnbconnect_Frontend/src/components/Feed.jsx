
import React from 'react';

export default function Feed() {
  return (
  
    <div className="p-4">
      <div className="tweet bg-white shadow rounded-lg p-4 mb-4">
        <div className="tweet-header flex items-center mb-4">
          <img
            src="profile2.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h4 className="font-bold">Aman Kathait</h4>
            <p className="text-gray-500 text-sm">@Aman_12345</p>
          </div>
        </div>
        <div className="tweet-content mb-4">
          <p className="text-gray-800 mb-3">This is a sample tweet description.</p>
          <img
            src="tweet 1.jpg"
            alt="Tweet"
            className="rounded-lg" 
          />
        </div>
        <div className="tweet-actions flex justify-around text-gray-500 mb-8">
          <button className="flex items-center space-x-2 hover:text-blue-500">
            <i className="fas fa-heart"></i>
            <span>Like</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-blue-500">
            <i className="fas fa-comment"></i>
            <span>Comment</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-blue-500">
            <i className="fas fa-share"></i>
            <span>Share</span>
          </button>
        </div>

        <div className="tweet-header flex items-center mb-4">
          <img
            src="profile2.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h4 className="font-bold">Abhay</h4>
            <p className="text-gray-500 text-sm">@Abhay_12345</p>
          </div>
        </div>
        <div className="tweet-content mb-4">
          <p className="text-gray-800 mb-3">This is a sample tweet 2 description.</p>
          <img
            src="tweet2.jpg"
            alt="Tweet"
            className="rounded-lg" 
          />
        </div>
        <div className="tweet-actions flex justify-around text-gray-500">
          <button className="flex items-center space-x-2 hover:text-blue-500">
            <i className="fas fa-heart"></i>
            <span>Like</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-blue-500">
            <i className="fas fa-comment"></i>
            <span>Comment</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-blue-500">
            <i className="fas fa-share"></i>
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
  }