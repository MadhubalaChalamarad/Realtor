import React, { useState } from "react";
import { app, db } from "../Firebase";
import { getAuth, updateProfile } from "firebase/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { doc } from "firebase/firestore/lite";
import { updateDoc, getDoc } from "firebase/firestore";
import { FcHome } from "react-icons/fc";

const Profile = () => {
  const auth = getAuth(app);

  const [changeDetail, setChangeDetail] = useState(false);
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

  const onChange = (e) => {
    SetFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onsubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        //update name in fire auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        //update name in the firebase store
        console.log(auth.currentUser.uid);
        const docRef = doc(db, "users", auth.currentUser.uid);

        console.log(docRef);
        await updateDoc(docRef, {
          name,
        });
      }
      toast("Profile update successfully");
    } catch (error) {
      toast.error("Could not update the profile details");
    }
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
              onChange={onChange}
              disabled={!changeDetail}
              className={`w-full px-4 py-2 mb-6 text-xl
               text-gray-700 transition ease-in-out
                bg-white border border-gray-300 rounded ${
                  changeDetail && "bg-gray-200 focus:bg-gray-200"
                }`}
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
                <span
                  onClick={() => {
                    changeDetail && onsubmit();
                    setChangeDetail((prevState) => !prevState);
                  }}
                  className="ml-1 text-red-500 transition ease-in-out cursor-pointer hover:text-red-700"
                >
                  {changeDetail ? "Apply change" : "Edit"}
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
          <button
            type="submit"
            className="flex items-center justify-center w-full p-2 font-medium text-center text-white transition duration-150 ease-in-out bg-blue-600 rounded-md text-md hover:bg-blue-700 hover:shadow-lg"
          >
            <Link
              to="/create-listing"
              className="flex items-center justify-center gap-2 "
            >
              <FcHome className="p-1 text-3xl bg-orange-400 border-2 rounded-full font-md" />
              Sell or rent your home
            </Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default Profile;
