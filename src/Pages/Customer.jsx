import React, { useState } from "react";
import HeaderCustomer from "../components/Client/HeaderCustomer";
import { Link } from "react-router";

export default function Customer() {
  // Estado del perfil del cliente
  const [profile, setProfile] = useState({
    nombre: "Juan",
    apellido: "Perez",
    email: "juan@mail.com",
    telefono: "11 90909090",
    iniciales: "JP",
  });

  // Estado de los casos del cliente
  const [cases, setCases] = useState([
    {
      nombre: "Demanda Laboral contra empresa",
      fecha: "11/07/25",
      estado: "En Proceso",
    },
    {
      nombre: "Divorcio",
      fecha: "12/05/24",
      estado: "Finalizado",
    },
    {
      nombre: "Accidente de transito",
      fecha: "18/12/23",
      estado: "Finalizado",
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-300 to-gray-700 ">
      <div className="min-h-screen max-w-3xl mx-auto bg-white md:p-3 rounded-lg shadow-md ">
        <HeaderCustomer hidden={"true"} />
        <main className="p-4">
          <section className="flex">
            <div className="bg-blue-100 lg:w-42 lg:h-42 md:w-36 md:h-36 w-24 h-24 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
              <span className="font-serif font-bold lg:text-8xl md:text-6xl text-4xl">
                {profile.iniciales}
              </span>
            </div>
            <div className="p-6 font-semibold">
              <h3 className="text-2xl">Perfil</h3>
              <div className="flex gap-3">
                <h4>Nombre:</h4>
                <p>{profile.nombre}</p>
              </div>
              <div className="flex gap-3">
                <h4>Apellido:</h4>
                <p>{profile.apellido}</p>
              </div>
              <div className="flex gap-3">
                <h4>Email:</h4>
                <p>{profile.email}</p>
              </div>
              <div className="flex gap-3">
                <h4>Telefono:</h4>
                <p>{profile.telefono}</p>
              </div>
            </div>
          </section>

          <section className="py-10">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right border-2 border-gray-300 text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-300">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Nombre del Caso
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Fecha de Abertura
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Estado
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Detalles
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cases.map((c, index) => (
                    <tr key={index} className="border-b-2 border-gray-300">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {c.nombre}
                      </th>
                      <td className="px-6 py-4">{c.fecha}</td>
                      <td
                        className={`px-6 py-4 ${
                          c.estado === "En Proceso"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {c.estado}
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          to={"/Details"}
                          className="font-medium text-blue-600 hover:underline"
                        >
                          Detalles
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
