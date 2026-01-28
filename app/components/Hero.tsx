"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import Image from "next/image";
// import Loading from "@/app/loading";
//hook

const content = {
  hero: {
    textos: [
      {
        titulo: "Tu presencia online empieza con una web profesional",
        subtitulo:
          "Desarrollamos páginas web y landing pages efectivas para mostrar tu negocio y generar confianza desde el primer clic.",
      },
      {
        titulo: "Creación de páginas web y  landing pages que venden",
        subtitulo:
          "Ayudamos a emprendedores y profesionales a tener presencia online con sitios modernos, claros y efectivos.",
      },
    ],
    imagen: "/logo/hero.png",
  },
};

export default function HeroSectionComp() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 6000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  //   if (!content) return <Loading></Loading>;

  return (
    <div className="relative overflow-hidden">
      {/* Imagen + overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={content.hero.imagen}
          alt="carousel desktop"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#993251]/35" />
      </div>

      {/* SLIDER */}
      <div
        ref={emblaRef}
        className="relative z-10 overflow-hidden h-[85vh] sm:h-[80vh] md:h-[90vh] xl:h-screen"
      >
        {/* CONTAINER necesario para embla */}
        <div className="flex h-full">
          {content.hero.textos.map((itemTexto, index) => (
            <div
              key={index}
              className="
          min-w-full
          h-full
          flex flex-col
          justify-center
          items-center
          text-center
          px-4
        "
            >
              <h1 className="lg:max-w-[1080px] font-sans text-[#E5E7EB] font-bold  text-[40px] sm:text-4xl md:text-5xl lg:text-[72px]  pb-4">
                {itemTexto.titulo}
              </h1>

              <p
                className="lg:max-w-[946px] font-mono font-light mt-6 text-[#DDDDDD]/70 text-[24px] xs:text-[18px] md:text-xl
              px-[60px] pb-[15px] "
              >
                {itemTexto.subtitulo}
              </p>

              <div className="mt-8">
                <a href="#planes">
                  <button className="px-7 py-4 bg-[#AF254F] rounded-[100px] font-sans font-medium text-white hover:bg-[#AF254F]/45 transition-colors duration-500 ease-in-out cursor-pointer">
                    Leer más
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {content.hero.textos.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full ${
              index === selectedIndex ? "bg-white scale-110" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
