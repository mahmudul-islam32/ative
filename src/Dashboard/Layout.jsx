
import { Link, NavLink, Outlet } from "react-router-dom";


import { FaMapMarked } from "react-icons/fa";

import {  IoHome } from "react-icons/io5";
import { RiApps2Fill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import Nav from "./Navbar/Nav";
import logo from '../../public/logo.png'
import { AiFillNotification } from "react-icons/ai";
const Layout = () => {
    return (
        <div className="relative bg-[#1E1E1E] h-screen overflow-x-hidden">
            <div className="fixed  left-[113px] w-[100%]">
                <Nav></Nav>
            </div>
            <div className="flex bg-[#1E1E1E] h-screen bg-fixed">
                <div className="fixed left-0 top-0 h-full w-64 rounded-r-[2rem] border-r-4 bg-gradient-to-t from-[#5337FF] to-[#5337FF] overflow-y-auto">
                
                    {/* <h2 className="text-center mb-11 mt-8 font-bold text-2xl">Dashboard</h2>
                    <hr /> */}
                    <div className="px-6 ml-4 py-4">
                        <img className="w-8 h-8" src={logo} alt="Your Company" />
                    </div>
                    <ul className="menu px-6 text-white text-lg gap-4">
                        <li className="">
                            <Link to="/dashboard/home">
                            <IoHome />Home
                            </Link>
                        </li>
                        <li>
                            <NavLink to="/dashboard/space">
                                <RiApps2Fill/>  Space
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/dashboard/health">
                                <FaHeart/>Health
                            </NavLink>
                        </li>
                        <li>
                            <Link to="/dashboard/channel">
                                <AiFillNotification /> Channel
                            </Link>
                        </li>
                        
                       
                      

                    </ul>



                </div>

                <div className="flex-1 ml-64 mt-20">
                    <Outlet />

                    {/*  */}
                </div>
            </div>
        </div>
    );
};

export default Layout;



