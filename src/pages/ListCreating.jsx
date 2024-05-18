import React, { useState } from "react";

const ListCreating = () => {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: false,
    regularPrice: 0,
    discountPrice: 0,
  });
  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    description,
    offer,
    discountPrice,
    regularPrice,
  } = formData;
  const onChange = () => {};
  return (
    <main className="max-w-md px-2 mx-auto ">
      <h1 className="mt-6 text-3xl font-bold text-center">Create a Listing</h1>
      <form>
        <p className="mt-6 text-lg font-semibold">Sell / Rent</p>
        <div className="flex gap-4">
          <button
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md  rounded-sm hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
            ${
              type === "rent"
                ? "bg-white text-black "
                : "bg-slate-600 text-white"
            } `}
          >
            SELL
          </button>
          <button
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md  rounded-sm hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
            ${
              type === "sell"
                ? "bg-white text-black "
                : "bg-slate-600 text-white"
            } `}
          >
            Rent
          </button>
        </div>
        <p className="mt-6 text-lg font-semibold">Name</p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Name"
          maxLength="32"
          minLength="10"
          required
          className="w-full px-4 py-2 mb-6 text-xl text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded focus:border-slate-600 focus:text-gray-700 focus:bg-white"
        />

        <div className="flex gap-4 mb-6">
          <div className="">
            <p className="text-lg font-semibold">Beds</p>
            <input
              type="number"
              id="bedrooms"
              value={bedrooms}
              onChange={onChange}
              min="1"
              max="50"
              required
              className="w-full px-4 py-2 text-xl text-center text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 focus:bg-white focus:border-slate-600"
            />
          </div>
          <div className="">
            <p className="text-lg font-semibold">Baths</p>
            <input
              type="number"
              id="bedrooms"
              value={bathrooms}
              onChange={onChange}
              min="1"
              max="50"
              required
              className="w-full px-4 py-2 text-xl text-center text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 focus:bg-white focus:border-slate-600"
            />
          </div>
        </div>
        <p className="mt-6 text-lg font-semibold">Parking spot</p>
        <div className="flex gap-4">
          <button
            type="button"
            id="type"
            value={true}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md  rounded-sm hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
            ${!parking ? "bg-white text-black " : "bg-slate-600 text-white"} `}
          >
            YES
          </button>
          <button
            type="button"
            id="parking"
            value={false}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md  rounded-sm hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
            ${parking ? "bg-white text-black " : "bg-slate-600 text-white"} `}
          >
            NO
          </button>
        </div>

        <p className="mt-6 text-lg font-semibold">Furnished</p>
        <div className="flex gap-4">
          <button
            type="button"
            id="furnished"
            value={true}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md  rounded-sm hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
            ${
              !furnished ? "bg-white text-black " : "bg-slate-600 text-white"
            } `}
          >
            YES
          </button>
          <button
            type="button"
            id="furnished"
            value={false}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md  rounded-sm hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
            ${furnished ? "bg-white text-black " : "bg-slate-600 text-white"} `}
          >
            NO
          </button>
        </div>

        <p className="mt-6 text-lg font-semibold">Address</p>
        <textarea
          type="text"
          id="address"
          value={address}
          onChange={onChange}
          placeholder="Address"
          maxLength="32"
          minLength="10"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded focus:border-slate-600 focus:text-gray-700 focus:bg-white"
        />

        <p className="mt-6 text-lg font-semibold">Description</p>
        <textarea
          type="text"
          id="Description"
          value={description}
          onChange={onChange}
          placeholder="Description"
          maxLength="32"
          minLength="10"
          required
          className="w-full px-4 py-2 mb-6 text-xl text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded focus:border-slate-600 focus:text-gray-700 focus:bg-white"
        />

        <p className="text-lg font-semibold ">Offer</p>
        <div className="flex gap-4 mb-6">
          <button
            type="button"
            id="offer"
            value={true}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md  rounded-sm hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
            ${!offer ? "bg-white text-black " : "bg-slate-600 text-white"} `}
          >
            YES
          </button>
          <button
            type="number"
            id="offer"
            value={false}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md  rounded-sm hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
            ${offer ? "bg-white text-black " : "bg-slate-600 text-white"} `}
          >
            NO
          </button>
        </div>

        <div className="flex items-center mb-6">
          <div className="">
            <p className="text-lg font-semibold">Regular Price</p>
            <div className="flex gap-4 text-center">
              <input
                type="number"
                id="regularPrice"
                value={regularPrice}
                onChange={onChange}
                min="50"
                max="400000000"
                required
                className="w-40 px-4 py-2 text-xl text-center text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 focus:bg-white focus:border-slate-600"
              />

              {type === "rent" && (
                <div className="m-auto">
                  <p className="w-full text-md whitespace-nowrap">$ / Month</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {offer && (
          <div className="flex items-center mb-6">
            <div className="">
              <p className="text-lg font-semibold">Discount Price</p>
              <div className="flex gap-4">
                <input
                  type="number"
                  id="bedrooms"
                  value={discountPrice}
                  onChange={onChange}
                  min="50"
                  max="400000000000"
                  required
                  className="w-40 px-4 py-2 text-xl text-center text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 focus:bg-white focus:border-slate-600"
                />
                {type === "rent" && (
                  <div className="m-auto">
                    <p className="w-full text-md whitespace-nowrap">
                      $ / Month
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mb-6">
          <div>
            <p className="text-lg font-semibold">Images</p>
            <p className="text-gray-600">
              The first image will be cover (max 6)
            </p>
            <input
              type="file"
              id="images"
              onChange={onchange}
              accept=".jpg,.png,.jpeg"
              multiple
              required
              className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 mb-6 font-bold text-white transition duration-150 ease-in-out bg-blue-600 rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-md active:bg-blue-800 active:shadow-lg"
          >
            CREATE LISTING
          </button>
        </div>
      </form>
    </main>
  );
};

export default ListCreating;
