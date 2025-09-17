import React from "react";

export default function Header() {
  return (
    <header
      id="home"
      className="h-[10vh] w-full flex justify-around items-center bg-black "
    >
      <img className="h-18 ml-4" src="/image-Photoroom (1).png" alt="" />
      <ul className="flex justify-end  w-full px-4 md:px-10 items-center gap-6 text-center text-gray-300 font-semibold">
        <a href="#about-us">
          {" "}
          <li className="hidden sm:flex  hover:text-white">Nuestro Equipo</li>
        </a>
        <a href="#services">
          {" "}
          <li className="hidden sm:flex  hover:text-white">Areas de Trabajo</li>
        </a>
        <a href="#contact">
          <li className="hidden sm:flex  hover:text-white">Contacto</li>
        </a>
        <li className="">Portal</li>
        <li className="sm:hidden border border-white rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </li>
      </ul>
    </header>
  );
}
