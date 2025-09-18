import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex">
              <img
                src="/image-Photoroom (1).png"
                className="h-10 md:h-15 me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-200">
                Estudio Martinez
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-200 uppercase ">
                Enlaces Rapidos
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-2">
                  <a href="#home" className="hover:underline">
                    Inicio
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#about-us" className="hover:underline">
                    Nuestro Equipo
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#services" className="hover:underline">
                    Areas de Practica
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-200 uppercase ">
                Siguenos
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-2">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Instagram
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex items-center justify-center">
          <span className="text-sm text-center text-gray-400">
            © 2025 Estudio Juridico Martinez.
            <a
              href="https://gnehemias04.github.io/Portafolio/index.html"
              className="hover:underline"
            >
              <br /> Desarrollado por Gabriel Rengifo
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
