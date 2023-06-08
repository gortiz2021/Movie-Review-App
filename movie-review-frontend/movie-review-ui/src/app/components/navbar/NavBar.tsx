import React from "react";

const NavBar = () => {
  return (
    <div className="bg-slate-900 text-slate-50 px-2 py-4 m-2">
      <nav>
        <div className="flex justify-between">
          <div>
            <a
              href=""
              className="border-4 border-red-700 rounded-full bg-red-700 p-1 mx-2"
            >
              Reel Rater
            </a>
          </div>

          <div>
            <a
              href=""
              className="border-4 border-red-700 rounded-full bg-red-700 p-1 mx-2"
            >
              Login
            </a>
            <a
              href=""
              className="border-4 border-red-700 rounded-full bg-red-700 p-1 mx-2"
            >
              Register
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
