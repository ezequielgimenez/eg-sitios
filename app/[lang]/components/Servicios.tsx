import Image from "next/image";

type ServiceItem = {
  img: string;
  titulo: string;
  descripcion: string;
};

type Props = {
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  };
};

export default function ServiciosComp({ services }: Props) {
  return (
    <div id="servicios" className="bg-[#E8E8E8] py-[70px]">
      {/* Header */}
      <div className="flex flex-col items-center px-8">
        <h3
          data-aos="fade-up"
          className="font-sans font-extrabold text-[#121212] text-[44px] text-center"
        >
          {services.title}
        </h3>
        <div className="bg-[#AF254F] w-[80px] h-[4px]" />
        <p
          data-aos="fade-up"
          className="font-mono text-[#666666] text-[18px] text-center font-light pt-[10px]"
        >
          {services.subtitle}
        </p>
      </div>

      {/* Cards */}
      <div
        data-aos="fade-up"
        className="flex justify-center flex-wrap gap-[32px] pt-[73px] px-8"
      >
        {services.items.map((item, index) => (
          <div
            key={index}
            className="
              group
              w-[350px]
              md:w-[450px]
              lg:w-[584px] h-[377px]
              rounded-[24px]
              bg-white
              border border-[#FF4BAB20]

              transform-gpu
              scale-100 translate-y-0
              transition-transform transition-shadow transition-colors
              duration-300 ease-out

              hover:scale-103
              hover:-translate-y-2
              hover:border-[#AF254F]
              hover:shadow-2xl hover:shadow-[#AF254F]/20
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
              {services.ctaTitle}
            </h4>
            <p className="max-w-[342px] lg:max-w-[342px] lg:max-w-[511px] font-mono font-light text-[18px] text-[#CBD5E1] pt-[24px]  text-center">
              {services.ctaText}
            </p>
          </div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.link/5h41dw"
            >
              <button className="w-[280px] h-[68px]  bg-[#AF254F] font-sans font-bold text-[18px] py-5 px-10 rounded-[24px] hover:bg-[#AF254F]/45 transition-colors duration-500 ease-in-out cursor-pointer ">
                {services.ctaButton}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
