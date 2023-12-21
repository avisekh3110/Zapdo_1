import { NavLink } from "react-router-dom";
import calc from "../../public/assets/calculator.svg";

export default function Mode() {
  return (
    <div className="absolute top-0 right-0 p-4 sm:p-8 md:p-20">
      <NavLink
        to={"/calculator"}
        title="Calculator"
        className={({ isActive }) => {
          return `${
            isActive
              ? "bg-orange-400 flex justify-center items-center h-10 w-10 mt-6 rounded-full ring-8 ring-orange-400 duration-150 "
              : "bg-white flex justify-center items-center h-10 w-10 mt-6 rounded-full hover:ring-4 ring-white duration-150 "
          }`;
        }}
      >
        <img src={calc} />
      </NavLink>
      <NavLink
        to={"/second"}
        className="bg-white h-10 w-10 mt-6 rounded-full hover:ring-4 ring-white duration-150 "
      ></NavLink>
      <NavLink to={"/third"}>
        <div className="bg-white h-10 w-10 mt-6 rounded-full hover:ring-4 ring-white duration-150 "></div>
      </NavLink>
      <NavLink to={"/calculator"}>
        <div className="bg-white h-10 w-10 mt-6 rounded-full hover:ring-4 ring-white duration-150 "></div>
      </NavLink>
      <NavLink to={"/calculator"}>
        <div className="bg-white h-10 w-10 mt-6 rounded-full hover:ring-4 ring-white duration-150 "></div>
      </NavLink>
      <NavLink to={"/calculator"}>
        <div className="bg-white h-10 w-10 mt-6 rounded-full hover:ring-4 ring-white duration-150 "></div>
      </NavLink>
    </div>
  );
}
