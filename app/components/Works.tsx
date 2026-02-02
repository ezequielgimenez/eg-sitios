import Image from "next/image";

const imagenes = [
  {
    img: "/icons-work/trabajo1.png",
    title: "Landing Page - Lic. Nazarena Rodriguez",
    subtitle: "Nutricionista",
    link: "https://www.nazarenarodriguez.ar/",
  },
  {
    img: "/icons-work/trabajo2.png",
    title: "Pagina web - NutriciónxSofia",
    subtitle: "Nutricionista",
    link: "https://nutricionxsofia.vercel.app/",
  },
  {
    img: "/icons-work/trabajo3.png",
    title: "Landing page - Nutricionet",
    subtitle: "Nutricionista",
    link: "https://nutricionet.vercel.app/",
  },
];

export default function WorksComp() {
  return (
    <div className="pt-[100px] pb-[250px]">
      <div data-aos="fade-up" className="flex flex-col items-center px-4">
        <Image
          src="/icons-work/trabajo.png"
          width={75}
          height={60}
          alt="Trabajos"
          unoptimized
        />
        <h5 className="font-sans font-extrabold text-[#121212] text-[30px] text-center pt-[30px] md:text-[35px] lg:text-[40px]">
          Ultimos Trabajos Realizados
        </h5>
        <div className="bg-[#AF254F] w-[80px] h-[4px]" />
      </div>
      <div className="flex flex-col justify-center items-center flex-wrap gap-[22px] pt-[70px] px-8 lg:flex-row">
        {imagenes?.map((item, index) => (
          <a
            data-aos="fade-up"
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative overflow-hidden rounded-[16px] group cursor-pointer">
              <Image
                src={item.img}
                width={450}
                height={350}
                alt={"Trabajo " + index}
                unoptimized
                className="transition-transform duration-500 ease-out group-hover:scale-110"
              />
              {/* Overlay rosado */}
              <div className="absolute inset-0 bg-[#AF254F]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-mono text-white text-[20px] font-semibold">
                    {item.title}
                  </h4>
                  <p className="font-manrope text-white/90 text-[16px] mt-2 tracking-wide">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
