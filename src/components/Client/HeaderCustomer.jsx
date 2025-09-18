import React from "react";
import { Link, Navigate } from "react-router";

export default function HeaderCustomer({ path, hidden }) {
  return (
    <header className=" bg-gray-600 flex items-center justify-between rounded-b-2xl md:rounded-2xl shadow-md  p-6 ">
      <div className="">
        <Link to={path}>
          <button
            className={`${
              hidden === "true" ? "hidden" : "flex"
            } text-white hover:text-blue-400 text-xs 2xl:text-sm font-medium cursor-pointer items-center justify-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
          </button>
        </Link>
      </div>
      <h1 className=" text-2xl md:text-3xl font-bold text-white">
        Estudio Martinez
      </h1>
      <div className="">
        <Link to={"/Login"}>
          {" "}
          <button className="  text-white hover:text-red-400 text-xs 2xl:text-sm font-medium cursor-pointer flex items-center justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
}
