import Image from "next/image";

const content = [
  {
    img: "/icons/servicio1.png",
    titulo: "Diseño Web",
    descripcion:
      "Diseño y desarrollo de sitios web modernos para emprendedores y profesionales que quieren mostrar sus servicios con diseños claros, modernos y adaptables a cualquier dispositivo.",
  },
  {
    img: "/icons/servicio2.png",
    titulo: "Landing Pages",
    descripcion:
      "Diseño y desarrollo de landing pages de alto impacto, pensadas para mostrar lo que ofrecés de forma ordenada, vender tus productos, presentar tus servicios como profesional y captar nuevos clientes.",
  },
  {
    img: "/icons/servicio3.png",
    titulo: "Mantenimiento Web",
    descripcion:
      "Mantenimiento web continuo para que tu sitio esté siempre actualizado, seguro y funcionando correctamente, con soporte técnico ante cualquier inconveniente.",
  },
  {
    img: "/icons/servicio4.png",
    titulo: "Web Gestionada",
    descripcion:
      "Servicio de web gestionada que incluye diseño del sitio, registro y renovación de dominio, hosting, mantenimiento continuo y soporte técnico.",
  },
];

export default function ServiciosComp() {
  return (
    <div id="servicios" className="bg-[#E8E8E8] py-[70px]">
      {/* Header */}
      <div className="flex flex-col items-center px-8">
        <h3
          data-aos="fade-up"
          className="font-sans font-extrabold text-[#121212] text-[44px] text-center"
        >
          ¿Qué Ofrecemos?
        </h3>
        <div className="bg-[#AF254F] w-[80px] h-[4px]" />
        <p
          data-aos="fade-up"
          className="font-mono text-[#666666] text-[18px] text-center font-light pt-[10px]"
        >
          Brindamos diferentes servicios y soluciones web pensadas para cubrir
          las necesidades de tu proyecto.
        </p>
      </div>

      {/* Cards */}
      <div className="flex justify-center flex-wrap gap-[32px] pt-[73px] px-8">
        {content.map((item, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="
              group
              w-[350px]
              md:w-[450px]
              lg:w-[584px] h-[377px]
              rounded-[24px]
              bg-white
              border border-[#FF4BAB20]
              transition-all duration-300
              hover:border-[#AF254F]
              hover:shadow-2xl hover:shadow-[#AF254F]/10
              hover:-translate-y-2
            "
          >
            <div className="flex flex-col w-[340px] md:w-[440px] lg:w-[502px] h-[295px] p-[40px]">
              {/* Icono */}
              <Image
                src={item.img}
                width={56}
                height={56}
                alt={"Icon " + index}
                className="
                  transition-transform duration-500 ease-out
                  group-hover:rotate-12
                  group-hover:scale-110
                "
              />

              {/* Título */}
              <h5 className="font-sans font-bold text-[24px] text-[#1C1F26] pt-8">
                {item.titulo}
              </h5>

              {/* Descripción */}
              <p className="font-manrope font-normal text-[#666666] text-[16px] md:text-[18px]  pt-4">
                {item.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Background */}
      <div
        data-aos="fade-up"
        className="relative flex justify-center pt-[70px] px-2"
      >
        <Image
          src="/icons/background.png"
          width={1200}
          height={340}
          alt="background"
          unoptimized
          className="hidden lg:block"
        />

        <Image
          src="/icons/background-mobile.png"
          width={360}
          height={681}
          alt="background"
          unoptimized
          className="lg:hidden"
        />

        {/* textos y boton  */}
        <div className="absolute inset-0 flex justify-center items-center flex-col gap-[40px] lg:flex-row lg:gap-[240px] pt-[50px] px-3 ">
          <div className="flex flex-col px-2">
            <h4 className="max-w-[342px] lg:max-w-[406px] font-sans font-extrabold text-[48px] text-white leading-[48px] text-center lg:text-start">
              ¿Listo para el siguiente nivel?
            </h4>
            <p className="max-w-[342px] lg:max-w-[342px] lg:max-w-[511px] font-mono font-light text-[18px] text-[#CBD5E1] pt-[24px]  text-center">
              Convertimos tus ideas en una experiencia digital clara y efectiva.
            </p>
          </div>
          <div>
            <button className="w-[280px] h-[68px]  bg-[#AF254F] font-sans font-bold text-[18px] py-5 px-10 rounded-[24px] hover:bg-[#AF254F]/45 transition-colors duration-500 ease-in-out cursor-pointer ">
              Contactar ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
