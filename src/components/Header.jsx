import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchRoute(route) {
    return route === location.pathname;
  }

  return (
    <div className="sticky top-0 z-50 bg-white border-b shadow-lg cursor-pointer">
      <div className="flex justify-between max-w-6xl py-3 mx-auto cursor-pointer">
        <div>
          <img
            src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
            alt=""
            className="w-40"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div>
          <ul className="flex space-x-10 ">
            <li
              className={
                pathMatchRoute("/")
                  ? "border-b-[3px] border-red-500 font-semibold cursor-pointer"
                  : "text-gray-500 font-semibold cursor-pointer"
              }
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </li>
            <li
              className={
                pathMatchRoute("/offers")
                  ? "border-b-[3px] border-red-500 font-semibold cursor-pointer"
                  : "text-gray-500 font-semibold cursor-pointer"
              }
              onClick={() => {
                navigate("/offers");
              }}
            >
              Offers
            </li>
            <li
              className={
                pathMatchRoute("/sign-in")
                  ? "border-b-[3px] border-red-500 font-semibold"
                  : "text-gray-500 font-semibold border-b-[3px] border-b-transparent"
              }
              onClick={() => {
                navigate("/sign-in");
              }}
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
