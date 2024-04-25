import React from "react";
import { FcGoogle } from "react-icons/fc";

const OAuth = () => {
  return (
    <button className="flex items-center justify-center w-full py-2 mx-auto text-lg font-semibold text-center text-white transition duration-150 ease-in-out bg-red-600 rounded shadow-sm flex-center hover:bg-red-700 active:bg-red-900 hover:shadow-lg active:shadow-lg">
      <FcGoogle className="mr-2 text-2xl bg-white rounded-full" />
      Continue with google
    </button>
  );
};

export default OAuth;
