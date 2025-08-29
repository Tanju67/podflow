import { motion } from "framer-motion";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Navigation() {
  const [hamburger, setHamburger] = useState(false);
  return (
    <nav className="font-secondary text-md absolute top-0 right-0 left-0 mx-auto flex h-[100px] max-w-[1400px] items-center justify-between gap-2 px-4 text-white sm:gap-10 sm:px-10 md:text-xl lg:px-0">
      <Link to="/" className="z-50 flex items-center gap-2 font-bold">
        <img src={logo} alt="" className="h-20 w-20 sm:h-30 sm:w-30" />
      </Link>
      <div className="flex w-full flex-1 justify-center">
        <input
          className="w-[50px] flex-1 rounded-l-xl border-none bg-amber-50 px-4 py-2 text-gray-800 outline-0 placeholder:text-sm placeholder:text-gray-400"
          type="text"
          placeholder="Search Podcast"
        />
        <button className="rounded-r-xl bg-amber-700 px-4 transition-all duration-300 hover:bg-amber-600">
          <FaSearch />
        </button>
      </div>
      <ul className="hidden items-center gap-8 lg:flex">
        <li className="uppercase">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-bold text-amber-700" // aktif link stili
                : "hover:text-amber-300"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="uppercase">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-bold text-amber-700" // aktif link stili
                : "hover:text-amber-300"
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="uppercase">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-bold text-amber-700" // aktif link stili
                : "hover:text-amber-300"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li className="rounded-4xl border-2 border-white px-6 py-2 transition-all duration-300 hover:bg-white hover:text-gray-800">
          <a href="#topics">Get started</a>
        </li>
      </ul>
      <button
        id="menu-btn"
        className={
          "hamburger z-50 block focus:outline-none lg:hidden" +
          (hamburger ? " open" : "")
        }
        onClick={() => {
          setHamburger(!hamburger);
        }}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
      {/* overlay */}
      {hamburger && (
        <div
          onClick={() => setHamburger(false)}
          className="fixed top-0 right-0 bottom-0 left-0 z-20 h-screen bg-transparent lg:hidden"
        ></div>
      )}
      {/* small screen menu */}
      <motion.ul
        variants={{
          hidden: { height: 0, opacity: 0 },
          show: { height: "auto", opacity: 0.95 },
        }}
        initial="hidden"
        animate={hamburger ? "show" : "hidden"}
        transition={{ duration: 0.3 }}
        exit="hidden"
        className="absolute top-[100px] right-[50px] left-[50px] z-30 flex flex-col justify-start gap-6 rounded-4xl bg-emerald-500 p-10 lg:hidden"
      >
        <li className="uppercase">
          <NavLink
            onClick={() => setHamburger(false)}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-amber-700" // aktif link stili
                : "hover:text-amber-300"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="uppercase">
          <NavLink
            onClick={() => setHamburger(false)}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-amber-700" // aktif link stili
                : "hover:text-amber-300"
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="uppercase">
          <NavLink
            onClick={() => setHamburger(false)}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-amber-700" // aktif link stili
                : "hover:text-amber-300"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li
          onClick={() => setHamburger(false)}
          className="self-start rounded-4xl uppercase"
        >
          <a href="#topics">Get started</a>
        </li>
      </motion.ul>
    </nav>
  );
}

export default Navigation;
