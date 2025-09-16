import React from "react";

export default function Header() {
  return (
    <header className="h-[10vh] w-full flex justify-around items-center bg-black">
      <img className="h-18" src="/image-Photoroom (1).png" alt="" />
      <ul className="flex gap-6 text-center text-white">
        <li className="hidden sm:flex">Nosotros</li>
        <li className="hidden sm:flex">Servicios</li>
        <li className="hidden sm:flex">Empresa</li>
        <li className="hidden sm:flex">Contacto</li>
        <li className="sm:hidden">
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
