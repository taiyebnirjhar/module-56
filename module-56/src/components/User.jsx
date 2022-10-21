import React from "react";

function User({ userName, userEmail, clickHandler }) {
  return (
    <div>
      <div className="w-96 max-w-sm  rounded-lg border border-gray-200 shadow-md ">
        <div className="flex flex-col items-center pb-10">
          <h5 className="mb-1 text-xl font-medium text-gray-900 ">
            {userName}
          </h5>
          <span className="text-sm text-gray-500 ">{userEmail}</span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <div
              onClick={clickHandler}
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  "
            >
              sign out
            </div>
            <a
              href="#"
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100  "
            >
              more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
