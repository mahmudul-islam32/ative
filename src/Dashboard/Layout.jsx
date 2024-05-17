
import { NavLink, Outlet } from "react-router-dom";

import { LiaFileInvoiceSolid } from "react-icons/lia";
import { TbReportSearch } from "react-icons/tb";
import { FaMapMarked } from "react-icons/fa";
import { FaFlaskVial } from "react-icons/fa6";
import { IoFlask, IoHome } from "react-icons/io5";
import { FaTablets } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { IoCreateSharp } from "react-icons/io5";
import { TbTableShortcut } from "react-icons/tb";
import { GrValidate } from "react-icons/gr";
import Nav from "./Navbar/Nav";
import logo from '../../public/logo.png'
const Layout = () => {
    return (
        <div className="relative bg-[#1E1E1E] h-screen overflow-x-hidden">
            <div className="fixed left-[113px] w-[100%]">
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
                            <NavLink to="/dashboard/home">
                            <IoHome />Home
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink to="/dashboard/invoice">
                                <LiaFileInvoiceSolid /> Invoice
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/reports">
                                <TbReportSearch />  Reports
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/dashboard/branches">
                                <FaMapMarked />Branches
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/tests">
                                <FaFlaskVial />  Tests
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/cultures">
                                <IoFlask /> Cultures
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/cultureOptions">
                                <IoFlask />  CultureOptions
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/antibiotics">
                                <FaTablets /> Antibiotics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/doctor">
                                <FaUserDoctor />   Doctor
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/create">
                                <IoCreateSharp />    Create Form
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/validate">
                                <GrValidate />  Validation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/table">
                                <TbTableShortcut />   Table
                            </NavLink>
                        </li>
                        <details className=" menu ">
                            <summary className=" ">PriceList</summary>
                            <ul className="">
                                <li>
                                    <NavLink to="/dashboard/test">
                                        Test
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/culture">
                                        Culture
                                    </NavLink>
                                </li>

                            </ul>
                        </details> */}

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



