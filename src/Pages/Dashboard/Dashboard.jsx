import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import SiteLogo from '../../Components/Header/SiteLogo';
import { Avatar, Button, Menu, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import {
      UserCircleIcon,
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

                              {/* <section className="py-8 pl-24  hidden lg:block">
                                    <div className="container px-4 mx-auto">
                                          <div className="flex flex-wrap -m-4">
                                                <div className="w-full p-4 lg:w-1/3">
                                                      <div className="p-6 bg-white border-b-4 border-blue-400 dark:bg-gray-900 rounded-b-xl ">
                                                            <div className="flex items-center mb-2">
                                                                  <span className="inline-block p-4 mr-2 text-blue-600 bg-blue-100 rounded-full dark:text-gray-400 dark:bg-gray-800">
                                                                        <svg
                                                                              xmlns="http://www.w3.org/2000/svg"
                                                                              width={16}
                                                                              height={16}
                                                                              fill="currentColor"
                                                                              className=" bi bi-people"
                                                                              viewBox="0 0 16 16"
                                                                        >
                                                                              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                                                                        </svg>
                                                                  </span>
                                                                  <h3 className="text-sm text-gray-600 dark:text-gray-400">
                                                                        Total Customer
                                                                  </h3>
                                                                  <span className="inline-block px-2 py-1 ml-auto text-xs text-gray-500 rounded-full dark:bg-gray-800 dark:text-gray-400 bg-gray-50">
                                                                        30 Days
                                                                  </span>
                                                            </div>
                                                            <h2 className="mb-2 text-3xl font-bold dark:text-gray-400">
                                                                  36,240
                                                            </h2>
                                                            <span className="text-xs text-blue-500 dark:text-blue-300">
                                                                  <span className="inline-block mr-2 dark:text-blue-300">
                                                                        <svg
                                                                              xmlns="http://www.w3.org/2000/svg"
                                                                              width={16}
                                                                              height={16}
                                                                              fill="currentColor"
                                                                              className="bi bi-graph-down-arrow"
                                                                              viewBox="0 0 16 16"
                                                                        >
                                                                              <path
                                                                                    fillRule="evenodd"
                                                                                    d="M0 0h1v15h15v1H0V0Zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5Z"
                                                                              />
                                                                        </svg>
                                                                  </span>
                                                                  <span>25% less</span>
                                                            </span>
                                                      </div>
                                                </div>
                                                <div className="w-full p-4 lg:w-1/3">
                                                      <div className="p-6 bg-white border-b-4 border-blue-400 dark:bg-gray-900 rounded-b-xl ">
                                                            <div className="flex items-center mb-2">
                                                                  <span className="inline-block p-4 mr-2 text-blue-600 bg-blue-100 rounded-full dark:text-gray-400 dark:bg-gray-800">
                                                                        <svg
                                                                              xmlns="http://www.w3.org/2000/svg"
                                                                              width={14}
                                                                              height={14}
                                                                              fill="currentColor"
                                                                              className="text-blue-600 dark:text-gray-400 bi bi-calendar-check"
                                                                              viewBox="0 0 16 16"
                                                                        >
                                                                              <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path>
                                                                              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path>
                                                                        </svg>
                                                                  </span>
                                                                  <h3 className="text-sm text-gray-600 dark:text-gray-400">
                                                                        This Month
                                                                  </h3>
                                                                  <span className="inline-block px-2 py-1 ml-auto text-xs text-gray-500 rounded-full dark:bg-gray-800 dark:text-gray-400 bg-gray-50">
                                                                        30 Days
                                                                  </span>
                                                            </div>
                                                            <h2 className="mb-2 text-3xl font-bold dark:text-gray-400">
                                                                  18,297
                                                            </h2>
                                                            <span className="text-xs text-blue-500 dark:text-blue-300">
                                                                  <span className="inline-block mr-2 dark:text-blue-300">
                                                                        <svg
                                                                              xmlns="http://www.w3.org/2000/svg"
                                                                              width={16}
                                                                              height={16}
                                                                              fill="currentColor"
                                                                              className="bi bi-graph-down-arrow"
                                                                              viewBox="0 0 16 16"
                                                                        >
                                                                              <path
                                                                                    fillRule="evenodd"
                                                                                    d="M0 0h1v15h15v1H0V0Zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5Z"
                                                                              />
                                                                        </svg>
                                                                  </span>
                                                                  <span>35% less</span>
                                                            </span>
                                                      </div>
                                                </div>
                                                <div className="w-full p-4 lg:w-1/3">
                                                      <div className="p-6 bg-white border-b-4 border-blue-400 dark:bg-gray-900 rounded-b-xl ">
                                                            <div className="flex items-center mb-2">
                                                                  <span className="inline-block p-4 mr-2 text-blue-600 bg-blue-100 rounded-full dark:text-gray-400 dark:bg-gray-800">
                                                                        <svg
                                                                              xmlns="http://www.w3.org/2000/svg"
                                                                              width={14}
                                                                              height={14}
                                                                              fill="currentColor"
                                                                              className="text-blue-600 dark:text-gray-400 bi bi-calendar-check"
                                                                              viewBox="0 0 16 16"
                                                                        >
                                                                              <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path>
                                                                              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path>
                                                                        </svg>
                                                                  </span>
                                                                  <h3 className="text-sm text-gray-600 dark:text-gray-400">
                                                                        This Month
                                                                  </h3>
                                                                  <span className="inline-block px-2 py-1 ml-auto text-xs text-gray-500 rounded-full dark:bg-gray-800 dark:text-gray-400 bg-gray-50">
                                                                        30 Days
                                                                  </span>
                                                            </div>
                                                            <h2 className="mb-2 text-3xl font-bold dark:text-gray-400">
                                                                  15,240
                                                            </h2>
                                                            <span className="text-xs text-blue-500 dark:text-blue-300">
                                                                  <span className="inline-block mr-2 dark:text-blue-300">
                                                                        <svg
                                                                              xmlns="http://www.w3.org/2000/svg"
                                                                              width={16}
                                                                              height={16}
                                                                              fill="currentColor"
                                                                              className="bi bi-graph-down-arrow"
                                                                              viewBox="0 0 16 16"
                                                                        >
                                                                              <path
                                                                                    fillRule="evenodd"
                                                                                    d="M0 0h1v15h15v1H0V0Zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5Z"
                                                                              />
                                                                        </svg>
                                                                  </span>
                                                                  <span>15% less</span>
                                                            </span>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </section> */}
                              <section className="py-3 w-full">
                                    <div className="container px-3 mx-auto ">
                                          <div className="overflow-x-auto rounded border shadow dark:bg-gray-900 bg-gray-50">


                                                <Outlet></Outlet>

                                                {/* <div className="px-6 py-5 text-right">
                                                                  <a
                                                                        className="inline-flex items-center text-xs font-medium text-blue-500 dark:hover:text-blue-400 dark:text-blue-300 hover:text-blue-700"
                                                                        href="#"
                                                                  >
                                                                        <span className="mr-1">
                                                                              <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={16}
                                                                                    height={16}
                                                                                    fill="currentColor"
                                                                                    className="bi bi-person"
                                                                                    viewBox="0 0 16 16"
                                                                              >
                                                                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                                                              </svg>
                                                                        </span>
                                                                        <span>View all</span>
                                                                  </a>
                                                            </div> */}
                                          </div>

                                    </div>
                              </section>
                        </div>
                  </div>
            </div>
      );
};

export default Dashboard;
