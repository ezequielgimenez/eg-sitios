import Image from "next/image";

type Props = {
  sobreNosotros: {
    titulo: string;
    subtitulo: string;
    descripcion1: string;
    descripcion2: string;
  };
};

export default function SobreNosotrosComp({ sobreNosotros }: Props) {
  return (
    <div
      id="acercade"
      className="flex flex-col lg:flex-row justify-center items-center py-[100px] gap-8 px-8"
    >
      <div className="flex flex-col">
        <p
          data-aos="fade-up"
          className="font-mono text-[#AF254F] text-[14px] tracking-[2px] "
        >
          {sobreNosotros.titulo}
        </p>
        <div data-aos="fade-up" className="lg:max-w-[643px] pt-[10px] ">
          <h3 className="font-sans font-semibold text-[#121212] text-[26px] xs:text-[28px] sm:text-[32px] lg:text-[40px]">
            {sobreNosotros.subtitulo}
          </h3>
        </div>
        <div className="lg:max-w-[392px] pt-[50px] space-y-[17px]">
          <p
            data-aos="fade-up"
            className="font-mono font-light text-[#666666] text-[16px] sm:text-[18px]"
          >
            {sobreNosotros.descripcion1}
          </p>
          <p
            data-aos="fade-up"
            className="font-mono font-light text-[#666666] text-[16px] sm:text-[18px]"
          >
            {sobreNosotros.descripcion2}
          </p>
        </div>
      </div>
      <div data-aos="fade-up" className="lg:pt-8">
        <Image
          src="/logo/services.png"
          width={666}
          height={575}
          alt="services"
          unoptimized
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}
