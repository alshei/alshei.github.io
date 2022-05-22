import React from "react";
import { Link } from "react-scroll";

export const NavLink = (props) => {
  return (
    <Link to={props.link}>
      <button className="flex items-center pr-4 pl-4 pt-6 pb-6 font-bold text-middle focus:text-dark1 focus:dark:text-light2 focus:border-b-4 focus:pb-5 border-accent">
        {props.option}
      </button>
    </Link>
  );
};
