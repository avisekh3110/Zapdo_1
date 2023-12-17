import { NavLink } from "react-router-dom";
import calc from "../../public/assets/calculator.svg";

export default function Mode() {
  return (
    <div className="absolute top-0 right-0 p-20">
      <NavLink to={"/calculator"}>
        <div
          title="Calculator"
          className="bg-white flex justify-center items-center h-10 w-10 mt-6 rounded-full"
        >
          <img src={calc} />
        </div>
      </NavLink>
      <NavLink to={"/calculator"}>
        <div className="bg-white h-10 w-10 mt-6 rounded-full"></div>
      </NavLink>
      <NavLink to={"/calculator"}>
        <div className="bg-white h-10 w-10 mt-6 rounded-full"></div>
      </NavLink>
      <NavLink to={"/calculator"}>
        <div className="bg-white h-10 w-10 mt-6 rounded-full"></div>
      </NavLink>
      <NavLink to={"/calculator"}>
        <div className="bg-white h-10 w-10 mt-6 rounded-full"></div>
      </NavLink>
      <NavLink to={"/calculator"}>
        <div className="bg-white h-10 w-10 mt-6 rounded-full"></div>
      </NavLink>
    </div>
  );
}
