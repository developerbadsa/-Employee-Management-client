import React from "react";
import {
      Navbar,
      Typography,
      Button,
      Menu,
      MenuHandler,
      MenuList,
      MenuItem,
      Avatar,
      IconButton,
      Collapse,
      Badge,
} from "@material-tailwind/react";
import {
      UserCircleIcon,
      ChevronDownIcon,
      PowerIcon,
      Bars2Icon,
} from "@heroicons/react/24/solid";
import SiteLogo from "./SiteLogo";
import { NavLink } from "react-router-dom";
import { RxDashboard, RxEnvelopeOpen } from "react-icons/rx";
import {CheckIcon} from "@heroicons/react/24/outline";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

// profile menu component
const profileMenuItems = [
      {
            label: "My Profile",
            icon: UserCircleIcon,
      },
      {
            label: "Log Out",
            icon: PowerIcon,
      },
];

function ProfileMenu() {
      const [isMenuOpen, setIsMenuOpen] = React.useState(false);

      const closeMenu = () => setIsMenuOpen(false);
      const { user, logout } = useAuth()

      return (
            user ? <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
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
                                    src={user.photoURL}
                              />
                              <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                                          }`}
                              />
                        </Button>
                  </MenuHandler>

                  <MenuList className="p-1">

                        {profileMenuItems.map(({ label, icon }, key) => {
                              const handleLogout = () => {
                                    logout()
                                          .then(() => {
                                                Swal.fire({
                                                      icon: "warning",
                                                      title: "Logged Out",
                                                      showConfirmButton: false,
                                                      timer: 1500
                                                })
                                          })
                              }
                              const isLastItem = key === profileMenuItems.length - 1;
                              return (
                                    <MenuItem
                                          key={label}
                                          onClick={() => closeMenu, handleLogout}
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
                        }
                        )}
                  </MenuList>
            </Menu> : <div className="inline-flex rounded-md shadow-sm" role="group">
                  <NavLink to={'/login'} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                        Login
                  </NavLink>
                  <NavLink to={'/register'} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                        Register
                  </NavLink>
            </div>);
}


// nav list component


function NavList() {


      const {user} = useAuth()
      return (
            <ul className="mt-2 mb-4 flex flex-col  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:justify-center text-black ml-[100px] gap-5">

                  {user && <NavLink
                        to='/dashboard'
                        className={({ isActive, isPending }) =>
                              isPending ? "text-red-400" : isActive ? "text-blue-600" : ""
                        }
                  >
                        <div className=" flex items-center gap-2"><RxDashboard></RxDashboard> Dashboard</div>
                  </NavLink>}
                  <NavLink
                        to='/contact'
                        className={({ isActive, isPending }) =>
                              isPending ? "text-red-400" : isActive ? "text-blue-600" : ""
                        }
                  >
                        <div className=" flex items-center gap-2"><RxEnvelopeOpen></RxEnvelopeOpen> Contact</div>
                  </NavLink>
            </ul>
      );
}




export const Header = () => {
      const [isNavOpen, setIsNavOpen] = React.useState(false);

      const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

      React.useEffect(() => {
            window.addEventListener(
                  "resize",
                  () => window.innerWidth >= 960 && setIsNavOpen(false),
            );
      }, []);



      return (
            <Navbar className="mx-auto max-w-screen-xl p-2  lg:pl-6 shadow-none">
                  <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
                        <Typography
                              className="mr-4 ml-2 cursor-pointer py-1.5 font-medium hidden sm:flex"
                        >
                              <SiteLogo></SiteLogo>
                        </Typography>
                        <div className="hidden lg:block">
                              <NavList />
                        </div>
                        <IconButton
                              size="sm"
                              color="blue-gray"
                              variant="text"
                              onClick={toggleIsNavOpen}
                              className="ml-auto mr-2 lg:hidden"
                        >
                              <Bars2Icon className="h-6 w-6" />
                        </IconButton>


                        <ProfileMenu />
                  </div>
                  <Collapse open={isNavOpen} className="overflow-scroll">
                        <NavList />
                  </Collapse >
            </Navbar>
      );
}