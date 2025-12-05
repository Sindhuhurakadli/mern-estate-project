import React from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);  // <-- FIX
  const fileRef=useRef(null);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>

      <form className="flex flex-col gap-4">
        <input type='file' ref={fileRef} hidden accept='image/ *'/>
        <img
        onClick={()=>fileRef.current.click()}
          src={currentUser?.avatar}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
        />

        <input
          type="text"
          placeholder="username"
          id="username"
          defaultValue={currentUser?.username}
          className="border p-3 rounded-lg"
        />

        <input
          type="email"
          placeholder="email"
          id="email"
          defaultValue={currentUser?.email}
          className="border p-3 rounded-lg"
        />

        <input
          type="password"
          placeholder="password"
          id="password"
          className="border p-3 rounded-lg"
        />

        <button className="bg-blue-500 text-white p-3 rounded-lg mt-4 uppercase hover:bg-blue-600 transition">
          Update Profile
        </button>
      </form>

      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
