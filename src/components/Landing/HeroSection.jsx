import React from "react";

export default function HeroSection() {
  const mensaje =
    "Hola, quisiera agendar una consulta con [Nombre del Estudio Jurídico].";
  const url = `https://wa.me/5491170153125?text=${encodeURIComponent(mensaje)}`;
  return (
    <>
      <section className=" relative py-21 bg-[url(/Justice.png)] bg-cover bg-center">
        <div className=" grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className=" text-[#F5F5DC] max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
              Asesoría legal clara y confiable para cada paso importante de tu
              vida
            </h1>
            <p className="max-w-2xl mb-6  text-white lg:mb-8 md:text-lg lg:text-xl ">
              Defendemos tus derechos con ética, transparencia y compromiso.
            </p>
            <a
              href={`${url}`}
              className="text-gray-100 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 focus:ring-4 focus:ring-gray-100 "
            >
              Agenda tu consulta
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
