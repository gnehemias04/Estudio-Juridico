import React from "react";

export default function Services() {
  "Hola, quisiera agendar una consulta con [Nombre del Estudio Jurídico].";

  function url(name) {
    const url = `https://wa.me/5491170153125?text=${encodeURIComponent(
      mensaje
    )}`;
    return url;
  }
  const services = [
    {
      name: "Despidos e Indemnizaciones",
      description:
        "Asesoramiento y representación para garantizar el cobro justo de su liquidación final.",
      img: "/Despidos.png",
    },
    {
      name: "Accidentes de Tránsito",
      description:
        "Asistencia legal desde el momento del siniestro para asegurar la correcta valoración del daño.",
      img: "/Accidentes de Transito.png",
    },
    {
      name: "Accidentes de Trabajo (ART)",
      description:
        "Gestionamos su reclamo ante las Comisiones Médicas y la justicia para una reparación integral.",
      img: "/Accidentes de Trabajo.png",
    },
    {
      name: "Familia",
      description:
        "Realizamos divorcios, división de bienes, reclamos por alimentos, tenencia y régimen de visitas, medidas de restricción y compensaciones económicas.",
      img: "/Familia.png",
    },
    {
      name: "Sucesiones y Testamentos",
      description:
        "Realizamos los trámites necesarios para la declaratoria de herederos y la adjudicación de bienes.",
      img: "/Susecion y Testamento.png",
    },

    {
      name: "Defensa Penal",
      description:
        "Defensa técnica y estratégica para imputados durante todas las etapas del proceso penal.",
      img: "/Defensa Penal.png",
    },
  ];
  return (
    <section
      id="services"
      className="services  w-full p-4 bg-[url(/abogado-1.jpg)] bg-cover bg-center "
    >
      <h2 className="text-gray-200 text-center text-3xl lg:text-4xl font-bold p-4">
        Areas de Trabajo
      </h2>
      <div className="w-full flex flex-wrap justify-center gap-4 ">
        {services.map((e) => (
          <div key={e.name}>
            {" "}
            <div className="max-w-sm bg-black/80 border rounded-lg shadow-sm border-gray-700">
              <img className="rounded-t-lg" src={e.img} alt={e.name} />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200">
                  {e.name}
                </h5>

                <p className="mb-3 font-normal text-gray-300">
                  {e.description}
                </p>
                <a
                  href={`https://wa.me/5491170153125?text=Hola%2C%20quisiera%20agendar%20una%20consulta%20con%20el%20Estudio%20Jur%C3%ADdico%20sobre%20${e.name}`}
                  className="text-gray-100 inline-flex items-center justify-center px-2 py-2 text-base font-medium text-center  border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 focus:ring-4 focus:ring-gray-100 "
                >
                  Consultanos
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
