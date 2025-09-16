import React from "react";

export default function HeroSection() {
  return (
    <>
      <section class=" relative py-20 bg-[url(/Justice.png)] bg-cover bg-center">
        <div class=" grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class=" text-[#F5F5DC] max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
              Asesoría legal clara y confiable para cada paso importante de tu
              vida
            </h1>
            <p class="max-w-2xl mb-6  text-white lg:mb-8 md:text-lg lg:text-xl ">
              Defendemos tus derechos con ética, transparencia y compromiso.
            </p>
            <a
              href="#"
              class="text-gray-100 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 focus:ring-4 focus:ring-gray-100 "
            >
              Agenda tu consulta
            </a>
          </div>
        </div>
      </section>
      {/* <section className="hero-section relative flex items-center justify-center w-full h-[90vh] bg-cyan-700 overflow-hidden">
        <img
          className="object-cover h-full w-full hidden sm:flex"
          src="/public/Diseño sin título.png"
          alt=""
        />
        <img
          className="object-cover h-full w-full sm:hidden"
          src="/public/Diseño sin título (1).png"
          alt=""
        />
        <div className="absolute bg-black/70 p-2 rounded-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-center text-white font-semibold  ">
            Estudio Juridico
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl  text-center text-white font-semibold">
            Doctora Juana de Arco
          </h2>
        </div>
      </section> */}
    </>
  );
}
