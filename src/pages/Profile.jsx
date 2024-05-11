import React, { useState } from "react";
import { app } from "../Firebase";
import { getAuth } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = getAuth(app);
  const [formData, SetFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;
  const navigate = useNavigate();
  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <>
      <section className="flex flex-col items-center justify-center max-w-6xl mx-auto">
        <h1 className="mt-6 text-3xl font-bold text-center">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3 ">
          <form>
            <input
              type="text"
              id="name"
              value={name}
              disabled
              className="w-full px-4 py-2 mb-6 text-xl text-gray-700 transition ease-in-out bg-white border border-gray-300 rounded "
            />

            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="w-full px-4 py-2 mb-6 text-xl text-gray-700 transition ease-in-out bg-white border border-gray-300 rounded "
            />

            <div className="flex justify-between mb-6">
              <p className="flex items-center ">
                Do you want to change name?
                <span className="ml-1 text-red-500 transition ease-in-out cursor-pointer hover:text-red-700">
                  Edit
                </span>
              </p>

              <p
                onClick={onLogout}
                className="text-blue-600 transition ease-in-out cursor-pointer hover:text-blue-800"
              >
                Sign Out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile;
