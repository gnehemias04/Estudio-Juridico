import React from "react";
import { Link } from "react-router";

export default function Navbar({ on, setOn }) {
  return (
    <>
      <section className={`${on ? "flex" : "hidden"} w-full h-full`}>
        <aside
          id="default-sidebar"
          className={`${on ? "grid" : "hidden"}
        sm:hidden fixed top-0 left-0 z-40 w-[60%] h-screen transition-transform duration-300 `}
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-black/90">
            <ul className="space-y-2 font-medium">
              <li className="flex">
                <img
                  className="w-20"
                  src="/public/image-Photoroom (1).png"
                  alt="logo"
                />
                <span className="ms-3">Estudio Martinez</span>
              </li>
              <li>
                <a
                  onClick={() => setOn(!on)}
                  href="#home"
                  className="flex items-center p-2 text-xl rounded-lg text-white hover:bg-gray-100 group"
                >
                  <span className="ms-3">Inicio</span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setOn(!on)}
                  href="#about-us"
                  className="flex items-center p-2 text-xl rounded-lg text-white hover:bg-gray-100 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Nuestro Equipo
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setOn(!on)}
                  href="#services"
                  className="flex items-center p-2 text-xl rounded-lg text-white hover:bg-gray-100 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Areas de Practica
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setOn(!on)}
                  href="#contact"
                  className="flex items-center p-2 text-xl rounded-lg text-white hover:bg-gray-100 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Contacto
                  </span>
                </a>
              </li>
              <li>
                <Link to={"/Login"}>
                  <div className="flex items-center p-2 text-xl rounded-lg text-white hover:bg-gray-100 group">
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Portal
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <div
          onClick={() => setOn(!on)}
          className={`sm:hidden fixed top-0 right-0 bg-black/50 z-40 w-[40%] h-screen`}
        ></div>
      </section>
    </>
  );
}
