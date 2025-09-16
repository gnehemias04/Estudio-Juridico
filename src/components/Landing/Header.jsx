import React from "react";

export default function Header() {
  return (
    <header className="h-[10vh] w-full flex justify-around items-center bg-black">
      <img className="h-18" src="/image-Photoroom (1).png" alt="" />
      <ul className="flex gap-6 text-center text-gray-300 font-semibold">
        <a href="#about-us">
          {" "}
          <li className="hidden sm:flex  hover:text-white">Nosotros</li>
        </a>
        <a href="#services">
          {" "}
          <li className="hidden sm:flex  hover:text-white">Servicios</li>
        </a>
        <li className="hidden sm:flex  hover:text-white">Empresa</li>
        <li className="hidden sm:flex  hover:text-white">Contacto</li>
        <li className="sm:hidden  hover:text-white">
          <select>
            <option>Acerca de</option>
            <option>Nosotros</option>
            <option>Servicios</option>
            <option>Empresa</option>
            <option>Contacto</option>
          </select>
        </li>
        <li className="">Portal</li>
      </ul>
    </header>
  );
}
