import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, email, mensaje } = body;

    if (!nombre || !email || !mensaje) {
      return new Response(
        JSON.stringify({ success: false, error: "Faltan campos obligatorios" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    await resend.emails.send({
      from: `"Contacto Web - EG Sitios" <${process.env.EMAIL_FROM}>`,
      to: "ezequielezequiel9@gmail.com",
      replyTo: email,
      subject: `Nueva consulta`,
      html: `
        <h2>Nueva consulta desde la web</h2>
        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mensaje:</b></p>
        <p>${mensaje.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error enviando mail:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Error enviando el mensaje" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}
