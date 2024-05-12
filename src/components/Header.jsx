import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { app } from "../Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const Header = () => {
  const auth = getAuth(app);
  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);

  function pathMatchRoute(route) {
    return route === location.pathname;
  }

  return (
    <div className="sticky top-0 z-40 bg-white border-b shadow-lg cursor-pointer">
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
                pathMatchRoute("/sign-in") || pathMatchRoute("/profile")
                  ? "border-b-[3px] border-red-500 font-semibold"
                  : "text-gray-500 font-semibold border-b-[3px] border-b-transparent"
              }
              onClick={() => {
                navigate("/profile");
              }}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
