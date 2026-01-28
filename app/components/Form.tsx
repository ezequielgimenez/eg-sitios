"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // estados controlados para los inputs
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [motivo, setMotivo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError(false);

    const data = { nombre, email, motivo, mensaje };

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setSuccess(true);
        setError(false);
        // limpiar inputs
        setNombre("");
        setEmail("");
        setMotivo("");
        setMensaje("");
      } else {
        setError(true);
        setSuccess(false);
      }
    } catch (err) {
      console.error(err);
      setError(true);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#FFFFFF]/5 rounded-2xl w-full max-w-[592px] h-[600px] p-[48px] border border-[#FFFFFF]/10"
    >
      <div className="flex flex-col gap-4">
        <label className="font-mono font-medium text-[#D1D5DB] text-[14px]">
          Nombre
        </label>
        <input
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          placeholder="Tu nombre"
          className="bg-[#FFFFFF]/5 border font-mono text-[#9CA3AF] border-[#FFFFFF]/10 rounded-md p-3 outline-none focus:ring-2 focus:ring-[#FFFFFF]/15"
        />

        <label className="font-mono font-medium text-[#D1D5DB] text-[14px]">
          Email
        </label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="tu@email.com"
          className="bg-[#FFFFFF]/5 border font-mono text-[#9CA3AF] border-[#FFFFFF]/10 rounded-md p-3 outline-none focus:ring-2 focus:ring-[#FFFFFF]/15"
        />

        <label className="font-mono font-medium text-[#D1D5DB] text-[14px]">
          Mensaje
        </label>
        <textarea
          name="mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
          rows={4}
          placeholder="Contanos sobre tu proyecto, negocio o emprendimiento.."
          className="h-[154px] bg-[#FFFFFF]/5 border font-mono text-[#9CA3AF] border-[#FFFFFF]/10 rounded-md p-3 outline-none focus:ring-2 focus:ring-[#FFFFFF]/15"
        />
        <div className="max-w-[494px] pt-[24px]">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#AF254F] w-full h-[64px]  text-white py-3 rounded-xl font-sans font-bold hover:opacity-70 transition disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>
        </div>

        {success && (
          <p className="text-green-600 text-sm text-center">
            Mensaje enviado correctamente ✔
          </p>
        )}

        {error && (
          <p className="text-red-600 text-sm text-center">
            Ocurrió un error. Intentá nuevamente.
          </p>
        )}
      </div>
    </form>
  );
}
