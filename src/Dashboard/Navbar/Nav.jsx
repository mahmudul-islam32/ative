// import  { useContext } from 'react';
// import { AuthContext } from '../../provider/AuthProvider';
// import { Link, useNavigate } from 'react-router-dom';

import profile from "../../../public/pro.avif";
const Nav = () => {
  // const { user, logOut } = useContext(AuthContext)
  // const navigate = useNavigate()
  // const handleLogout = () => {
  //     logOut();
  //     navigate("/")
  // }
  return (
    <div>
      

      <nav className="bg-[#2C2C2C]">
        <div className=" max-w-auto  ml-36 px-8">
          <div className="relative flex  h-16 items-center justify-between">
            <div className="">
              <a
                href="#"
                className="text-white rounded-md px-3 py-2 text-md font-bold"
                aria-current="page"
              >
                Hi, Caro!
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <button
              
                type="button"
                className=" rounded-full p-1 -ml-[258px]  text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>

              <div className="">
                <button
                  type="button"
                  className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <img className="h-8 w-8 rounded-full" src={profile} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
