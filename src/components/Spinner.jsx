import React from "react";
import spinner from "../Assests/svg/spinner.svg";

const Spinner = () => {
  return (
    <div>
      <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
        <img src={spinner} alt="Loading..." className="h-24 text-white" />
      </div>
    </div>
  );
};

export default Spinner;
