import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  //   const location = useLocation();
  //   console.log(location.pathname);

  //   function pathMatchRoute(route) {
  //     if (route === location.pathname) {
  //       return true;
  //     }
  //   }

  const location = useLocation();

  function pathMatchRoute(route) {
    return route === location.pathname;
  }

  return (
    <div className="sticky top-0 z-50 bg-white border-b shadow-lg">
      <div className="flex justify-between max-w-6xl py-3 mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
            alt=""
            className="w-40"
          />
        </div>
        <div>
          <ul className="flex space-x-10 ">
            <li
              className={
                pathMatchRoute("/")
                  ? "border-b border-red-500 font-semibold"
                  : "text-gray-500 font-semibold"
              }
            >
              Home
            </li>
            <li
              className={
                pathMatchRoute("/offers")
                  ? "border-b border-red-500 font-semibold"
                  : "text-gray-500 font-semibold"
              }
            >
              Offers
            </li>
            <li
              className={
                pathMatchRoute("/sign-in")
                  ? "border-b border-red-500 font-semibold"
                  : "text-gray-500 font-semibold"
              }
            >
              Sign In
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
