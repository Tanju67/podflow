import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="font-secondary bg-custom px-4 py-30 text-white sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-4 lg:flex-row">
        <div className="flex flex-1 flex-col gap-4 md:flex-row">
          <form className="relative flex-1 rounded-2xl border-1 border-white p-10">
            <h3 className="absolute top-[-16px] left-1/2 w-4/5 -translate-x-1/2 rounded-2xl bg-white px-2 py-1 text-center font-bold text-emerald-500">
              Subscribe. Every weekly.
            </h3>
            <div className="flex flex-col">
              <input
                type="email"
                placeholder="Email Address"
                className="rounded-t-2xl bg-white px-4 py-2 placeholder:text-gray-500"
              />
              <button className="rounded-b-2xl bg-amber-700 px-4 py-2 font-bold transition-all duration-300 hover:bg-amber-600 lg:text-xl">
                Subscribe
              </button>
            </div>
          </form>
          <div className="my-4 flex-1">
            <h3 className="text-lg text-emerald-500">Contact</h3>
            <p>
              <span className="font-bold">Phone:</span> 0123456789
            </p>
            <p>
              <span className="font-bold">Address:</span> 123 Street, City,
              Country
            </p>
            <p>
              <span className="font-bold">Email:</span> 1o6lT@example.com
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-lg text-emerald-500">Quick Links</h3>
          <ul className="flex items-center gap-4">
            <li className="uppercase">
              <NavLink to="/">Home</NavLink>
            </li>
            |
            <li className="uppercase">
              <NavLink to="/about">About</NavLink>
            </li>
            |
            <li className="uppercase">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
