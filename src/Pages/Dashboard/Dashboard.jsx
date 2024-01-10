import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import SiteLogo from '../../Components/Header/SiteLogo';
import { Avatar, Button, Menu, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react';
import useAuth from '../../Hooks/useAuth';
import {
      PowerIcon,
} from "@heroicons/react/24/solid";
import useHR from '../../Hooks/useHR/useHR';
import useEmployeeCheck from '../../Hooks/useEmployee/useEmployee';
import useAdminCheck from '../../Hooks/useAdmin/useAdmin';
import { RxHome } from 'react-icons/rx';



const Dashboard = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const { user, logout } = useAuth()
      const { isHR } = useHR()
      const { isEmployee } = useEmployeeCheck()
      const { isAdmin } = useAdminCheck()
      const profileMenuItems = [
            {
                  label: "Log Out",
                  icon: PowerIcon,
            },
      ];
      return (
            <div>
                  <div className="lg:flex">
                        {/* Sidebar */}
                        <nav className="lg:w-82 lg:flex-shrink-0  lg:left-0 lg:bottom-0 lg:flex lg:flex-col lg:dark:bg-gray-900 lg:text-blue-gray-900 lg:z-50 ">
                              <div className="lg:flex items-center w-full pl-4 pt-4 pb-4 hidden">
                                    <Link to='/'>
                                          <h2 className="text-base font-bold  whitespace-nowrap w-full "> <SiteLogo></SiteLogo> </h2>
                                    </Link>
                              </div>
                              <div className="pb-6 mt-1 lg:mt-3 overflow-x-hidden overflow-y-auto">
                                    <p className="px-6 py-2 text-2xl font-bold ">{isHR && <span>HR </span>}{isEmployee && <span>Employee </span>}{isAdmin && <span>Admin </span>} Dashboard</p>
                                    <ul className="mb-0 text-sm">
                                          <li className="flex items-center group  dark:hover:bg-gray-800">
                                                <NavLink
                                                      to='/dashboard/profile'
                                                      className={({ isActive, isPending }) =>
                                                            isPending ? "text-red-400" : isActive ? "text-blue-400 w-full bg-gray-800 px-6 py-4" : " px-6 py-4 "
                                                      }
                                                >
                                                      <div className="flex items-center gap-2">Profile</div>
                                                </NavLink>
                                          </li>
                                          {/* HR Only */}
                                          {
                                                isHR && <>
                                                      <li className="flex items-center group  dark:hover:bg-gray-800">
                                                            <NavLink
                                                                  to='/dashboard/employee-list'
                                                                  className={({ isActive, isPending }) =>
                                                                        isPending ? "text-red-400" : isActive ? "text-blue-400 w-full bg-gray-800 px-6 py-4" : " px-6 py-4 "
                                                                  }
                                                            >
                                                                  <div className="flex items-center gap-2">Employee List</div>
                                                            </NavLink>
                                                      </li>
                                                      <li className="flex items-center w-full border dark:hover:bg-gray-800">
                                                            <NavLink
                                                                  to='/dashboard/progress'
                                                                  className={({ isActive, isPending }) =>
                                                                        isPending ? "text-red-400" : isActive ? "text-blue-400 w-full bg-gray-800 px-6 py-4" : " px-6 py-4 "
                                                                  }
                                                            >
                                                                  <div className="flex items-center gap-2">Progress</div>
                                                            </NavLink>
                                                      </li>

                                                </>
                                          }
                                          {/* Admin Only */}
                                          {
                                                isAdmin && <>
                                                      <li className="flex items-center group  dark:hover:bg-gray-800">
                                                            <NavLink
                                                                  to='/dashboard/all-employee-list'
                                                                  className={({ isActive, isPending }) =>
                                                                        isPending ? "text-red-400" : isActive ? "text-blue-400 w-full bg-gray-800 px-6 py-4" : " px-6 py-4 "
                                                                  }
                                                            >
                                                                  <div className="flex items-center gap-2">Employee List</div>
                                                            </NavLink>
                                                      </li>
                                                </>
                                          }

                                          {
                                                isEmployee && <>
                                                      <li className="flex items-center w-full border dark:hover:bg-gray-800">
                                                            <NavLink
                                                                  to='/dashboard/payment-history'
                                                                  className={({ isActive, isPending }) =>
                                                                        isPending ? "text-red-400" : isActive ? "text-blue-400 w-full bg-gray-800 px-6 py-4" : " px-6 py-4 "
                                                                  }
                                                            >
                                                                  <div className="flex items-center gap-2">Payment History</div>
                                                            </NavLink>
                                                      </li>
                                                      <li className="flex items-center w-full border dark:hover:bg-gray-800">
                                                            <NavLink
                                                                  to='/dashboard/work-sheet'
                                                                  className={({ isActive, isPending }) =>
                                                                        isPending ? "text-red-400" : isActive ? "text-blue-400 w-full bg-gray-800 px-6 py-4" : " px-6 py-4 "
                                                                  }
                                                            >
                                                                  <div className="flex items-center gap-2">Work Sheet</div>
                                                            </NavLink>
                                                      </li>


                                                </>
                                          }
                                          <div className='divide'></div>
                                          <li className="flex items-center group  dark:hover:bg-gray-800">
                                                <NavLink
                                                      to='/'
                                                      className={({ isActive, isPending }) =>
                                                            isPending ? "text-red-400" : isActive ? "text-blue-400 w-full bg-gray-800 px-6 py-4" : " px-6 py-4 "
                                                      }
                                                >
                                                      <div className="flex items-center gap-2"><RxHome></RxHome> Home</div>
                                                </NavLink>
                                          </li>
                                    </ul>
                              </div>
                        </nav>

                        {/* Main Content */}
                        <div className="lg:flex-1 lg:mx-auto lg:content-wrapper">
                              {/* Top Navbar */}
                              <section className="sticky top-0 px-3 py-3  dark:bg-gray-900 lg:px-5 hidden lg:block">
                                    <nav className="relative">
                                          <div className="flex items-center justify-end">
                                                <div className="flex items-center">
                                                      {/* User Menu */}
                                                      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
                                                            <MenuHandler>
                                                                  <Button
                                                                        variant="text"
                                                                        color="blue-gray"
                                                                        className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto border p-1"
                                                                  >
                                                                        <div className="px-4">
                                                                              <span className="px-3">{user?.displayName}</span>
                                                                        </div>
                                                                        <Avatar
                                                                              variant="circular"
                                                                              size="sm"
                                                                              alt="tania andrew"
                                                                              className="border border-gray-900 p-0.5"
                                                                              src={user?.photoURL}
                                                                        />
                                                                  </Button>
                                                            </MenuHandler>
                                                            <MenuList className="p-1">
                                                                  {profileMenuItems.map(({ label, icon }, key) => {
                                                                        const handleLogout = () => {
                                                                              // Handle logout logic
                                                                              logout()
                                                                                    .then('logged out')

                                                                        };
                                                                        const isLastItem = key === profileMenuItems.length - 1;
                                                                        return (
                                                                              <MenuItem
                                                                                    key={label}
                                                                                    onClick={() => handleLogout()}
                                                                                    className={`flex items-center gap-2 rounded ${isLastItem
                                                                                          ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                                                                          : ""
                                                                                          }`}
                                                                              >
                                                                                    {React.createElement(icon, {
                                                                                          className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                                                                          strokeWidth: 2,
                                                                                    })}
                                                                                    <Typography
                                                                                          as="span"
                                                                                          variant="small"
                                                                                          className="font-normal"
                                                                                          color={isLastItem ? "red" : "inherit"}
                                                                                    >
                                                                                          {label}
                                                                                    </Typography>
                                                                              </MenuItem>
                                                                        );
                                                                  })}
                                                            </MenuList>
                                                      </Menu>
                                                </div>
                                          </div>
                                    </nav>
                              </section>
                              <section className="py-3 w-full">
                                    <div className="container px-3 mx-auto ">
                                          <div className="overflow-x-auto rounded border shadow dark:bg-gray-900 bg-gray-50">


                                                <Outlet></Outlet>
                                          </div>

                                    </div>
                              </section>
                        </div>
                  </div>
            </div>
      );
};

export default Dashboard;
