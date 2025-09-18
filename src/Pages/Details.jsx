import React, { useState } from "react";
import HeaderCustomer from "../components/Client/HeaderCustomer";

const CasoDetalle = () => {
  const [nombre, setNombre] = useState("Juan Perez");
  const [email, setEmail] = useState("juan@mail.com");
  const [mensaje, setMensaje] = useState("");

  // Lista de documentos del caso (puedes reemplazar con datos reales)
  const documentos = ["demanda.pdf", "proxima-audiencia.pdf"];

  const handleEnviar = () => {
    alert(`Mail enviado a ${email} con mensaje:\n${mensaje}`);
    setMensaje("");
  };

  return (
    <div className=" min-h-screen bg-gradient-to-br from-gray-300 to-gray-700 ">
      <div className="min-h-screen max-w-3xl mx-auto bg-white md:p-3 rounded-lg shadow-md ">
        {/* Header */}
        <HeaderCustomer path={"/Customer"} />

        {/* Caso y documentos */}
        <div className="py-5 px-2">
          <p>
            <strong>Caso:</strong> "Demanda laboral contra Empresa X"
          </p>
          <p>
            <strong>Estado:</strong> "Proceso"
          </p>
          <p>
            <strong>Revisado última vez:</strong> 11/09/25
          </p>

          <p className="mt-4 mb-2">
            <strong>Documentos:</strong>
          </p>
          <div className="flex flex-wrap gap-2 p-2">
            {documentos.map((doc, idx) => (
              <button
                key={idx}
                className="px-4 py-2 border rounded bg-white hover:bg-gray-100"
              >
                {doc}
              </button>
            ))}
            <div className="flex items-center justify-center w-full ">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Haz clic para subir</span> o
                    arrastra un archivo
                  </p>
                  <p className="text-xs text-gray-500">
                    PDF, PNG, JPG (MAX. 5MB)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  accept="application/pdf,image/*"
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <p>
            <strong>Próxima audiencia:</strong> 15/09/2025 a las 10:00 hs.
          </p>
        </div>

        {/* Formulario para enviar mail */}
        <div className=" p-4 rounded">
          <p className="mb-2 font-semibold">Enviar un e-mail</p>
          <input
            type="text"
            className="w-full mb-2 p-2 border rounded"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="email"
            className="w-full mb-2 p-2 border rounded"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="w-full mb-2 p-2 border rounded h-32"
            placeholder="Escribir aquí..."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-gray-400 rounded hover:bg-gray-500"
            onClick={handleEnviar}
          >
            <p className="text-white"> Enviar</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CasoDetalle;
