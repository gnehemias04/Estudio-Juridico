import React from "react";

export default function AboutUs() {
  const team = [
    {
      name: "Doctora Juana Martinez",
      img: "/Juana Martinez.png",
      contact:
        "https://www.linkedin.com/in/gabriel-nehemias-rengifo-krunfli-14aa7a36b/",
      position: "Abogada Fundadora",
    },
    {
      name: "Doctor Juana Martinez",
      img: "/Diego Lorenzetti.png",
      contact:
        "https://www.linkedin.com/in/gabriel-nehemias-rengifo-krunfli-14aa7a36b/",
      position: "Abogado Co-Fundador",
    },
    {
      name: "Martin Godoy",
      img: "/Martin Godoy.png",
      contact:
        "https://www.linkedin.com/in/gabriel-nehemias-rengifo-krunfli-14aa7a36b/",
      position: "Asistente Legal",
    },
    {
      name: "Ariela Flores",
      img: "/Ariela Flores.png",
      contact:
        "https://www.linkedin.com/in/gabriel-nehemias-rengifo-krunfli-14aa7a36b/",
      position: "Administrativa",
    },
  ];

  return (
    <section id="about-us" className="about-us grid gap-4 w-full py-5 bg-black">
      <div className="grid justify-center">
        <h2 className="text-gray-200 font-bold text-3xl md:text-4xl text-center">
          Conoce a nuestro Equipo
        </h2>
        <p className="max-w-200 font-semibold md:text-lg text-gray-200 text-center ">
          En <u>Estudio Martinez</u> nos dedicamos a brindar asesoramiento legal
          personalizado y soluciones efectivas en diversas áreas del derecho.
          Nuestro compromiso es acompañar a cada cliente con transparencia,
          ética y experiencia, garantizando un servicio confiable y de calidad.
        </p>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 place-items-center">
        {team.map((e) => (
          <div
            key={e.name}
            className=" w-38 sm:w-50  lg:w-60 xl:w-70 h-[100%] border border-gray-700 rounded-lg shadow-sm "
          >
            <a href={e.contact}>
              <img className="rounded-t-lg" src={e.img} alt={e.name} />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200">
                  {e.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-200">{e.position}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex flex-col justify-center items-center md:w-[50%]">
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
      </p> */}
    </section>
  );
}
