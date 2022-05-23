import React from "react";
import { Link } from "react-scroll";
import { List } from "phosphor-react";
import { NavLink } from "../Buttons";
import Toggle from "../ThemeToggle";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="fixed backdrop-blur w-full flex flex-wrap items-center justify-between bg-light1/0 dark:bg-dark1/0 h-20 z-10">
        <div className="container px-8 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto md:w-auto">
            <a
              className="text-accent text-2xl font-bold pr-4 pl-4 pt-6 pb-6"
              href="#"
            >
              mlkywy
            </a>

            <button className="transition duration-500 ease-in-out rounded-full pr-4 pl-4 pt-6 pb-6 lg:hidden md:hidden">
              <List
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="text-middle dark:text-middle text-2xl cursor-pointer"
              />
            </button>
          </div>
          <div
            className={
              "lg:flex md:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row md:flex-row lg:ml-auto md:ml-auto list-none">
              <NavLink option="About" link="about" />
              <NavLink option="Experience" link="experience" />
              <NavLink option="Portfolio" link="portfolio" />
              <NavLink option="Contact" link="contact" />
              <Toggle />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
