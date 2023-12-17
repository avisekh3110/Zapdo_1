import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <NavLink
      to={"/"}
      className="text-white text-3xl font-black flex flex-row justify-start px-28 py-14 text-shadow"
    >
      ZAPDO_1
    </NavLink>
  );
}

export default Navbar;
