import React from "react";

export default function AboutUs() {
  return (
    <section className="about-us md:flex w-full p-4 h-[100vh] bg-black">
      <div className="flex flex-col justify-center items-center md:w-[50%]">
        <img
          className="h-64 w-64 md:h-72 md:w-72 lg:h-96 lg:w-96 rounded-full"
          src="/public/flex items-center justify-center w-full h-[90vh].png"
          alt=""
        />
        <div className="flex items-center justify-center">
          <h2 className="text-white text-2xl lg:text-3xl font-medium p-4 ">
            Doctora Juana de Arco
          </h2>
          <svg
            className="w-6 h-6 bg-white rounded-sm text-blue-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
              clip-rule="evenodd"
            />
            <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
          </svg>
        </div>
      </div>
      <p className="text-white flex justify-center items-center  text-center text-xl lg:text-2xl md:w-[50%] p-7">
        Soy la Dra. Juana de Arco, abogado especializado en derecho civil,
        laboral y comercial, con más de 10 años de experiencia. Me gradué en la
        Universidad de Buenos Aires y desde entonces me dedico a brindar
        asesoramiento jurídico confiable y soluciones prácticas tanto a
        particulares como a empresas. Trabajo con un enfoque basado en la
        transparencia y la atención personalizada, buscando siempre la mejor
        estrategia para cada caso. Actualmente formo parte del Estudio Jurídico
        López & Asociados en Buenos Aires.
      </p>
    </section>
  );
}
