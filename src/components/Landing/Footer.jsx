import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex">
              <img
                src="/public/image-Photoroom (1).png"
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
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  ></a>
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
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.0334450666165!2d-58.38583382400056!3d-34.782171868771214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a327fc36df7c49%3A0x9f2a7ee7c1b84a56!2sHip%C3%B3lito%20Yrigoyen%2024273%2C%20Guernica%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1726500753927!5m2!1ses!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </div>
      </div>
    </footer>
  );
}
