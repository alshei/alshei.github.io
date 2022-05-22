import React from "react";
import { List } from "phosphor-react";
import { NavLink } from "../Buttons";
import Toggle from "../ThemeToggle";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="fixed w-full flex flex-wrap items-center justify-between bg-light1 dark:bg-dark1 h-20 z-10">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-accent text-2xl font-bold pr-4 pl-4 pt-6 pb-6"
              href="#"
            >
              mlkywy
            </a>

            <button className="transition duration-500 ease-in-out rounded-full pr-4 pl-4 pt-6 pb-6 lg:hidden">
              <List
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="text-middle dark:text-middle text-2xl cursor-pointer"
              />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <NavLink option="About" link="" />
              <NavLink option="Experience" link="" />
              <NavLink option="Portfolio" link="" />
              <NavLink option="Contact" link="" />
              <Toggle />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
