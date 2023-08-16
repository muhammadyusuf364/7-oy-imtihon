import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import BurgerMenu from "./BurgerMenu";
function Navbar({ state }) {
  const navigate = useNavigate();

  const [mode, setMode] = useState(JSON.parse(localStorage.getItem("mode")));

  if (mode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  useEffect(() => {
    if (mode) {
      localStorage.setItem("mode", true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("mode", false);
    }
  }, [mode]);

  return (
    <div className="bg-[#F0F6FF] dark:bg-[#181920] ">
      <div className="flex items-center container p-5 w-[80%] mx-auto  justify-between">
        <button
          className="px-4 py-2 font-bold rounded-xl bg-[#0069E0]
           text-[#DBE1FF] dark:bg-[#FF57B6] dark:text-[#301C27] text-2xl max-lg:hidden"
          onClick={() => navigate("/")}
        >
          C
        </button>
        <div>
          <BurgerMenu></BurgerMenu>
        </div>
        <div className=" gap-7  flex  items-center justify-center max-lg:hidden">
          <NavLink className="text-gray-500" to="/">
            Home
          </NavLink>
          <NavLink className="text-gray-500" to="/about">
            About
          </NavLink>
          <NavLink className="text-gray-500" to="/product">
            Products
          </NavLink>
          <NavLink className="text-gray-500" to="/cart">
            Cart
          </NavLink>
        </div>

        <div className="flex gap-5">
          <button onClick={() => setMode(!mode)} className="dark:text-white">
            {mode ? <BsFillSunFill /> : <BsMoonFill />}
          </button>

          <div className="relative">
            <button onClick={() => navigate("/cart")}>
              <span className="absolute px-1 rounded-full py-0 top-[-20px] bg-slate-600 text-teal-50">
                {state || 0}
              </span>
              <svg
                stroke="currentColor"
                fill="grey"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="h-6 w-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
