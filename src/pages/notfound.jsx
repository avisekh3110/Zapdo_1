import { NavLink } from "react-router-dom";

export default function Notfound() {
  return (
    <div className=" text-white h-full flex justify-center">
      <div className=" h-1/3 w-3/5 mt-40 flex justify-around items-center flex-col md:flex-row ">
        <div className="text-8xl font-extrabold border-b-2 md:border-b-0 md:border-r-2 border-r-0 p-4">
          404
        </div>
        <div className="flex flex-col gap-4 md:items-start items-center p-2">
          <div className="text-xl font-semibold ">
            Unfortunately, This page is not available.
          </div>
          <NavLink
            to={"/"}
            className="text-lg bg-blue-600 w-56 text-white rounded-md flex justify-center items-center p-1 font-bold"
          >
            REUTRN TO HOMEPAGE
          </NavLink>
        </div>
      </div>
    </div>
  );
}
