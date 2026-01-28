import Image from "next/image";

export default function SobreNosotrosComp() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center py-[100px] gap-8 px-8">
      <div className="flex flex-col">
        <p className="font-mono text-[#AF254F] text-[14px] tracking-[2px] ">
          SOBRE NOSOTROS
        </p>
        <div className="lg:max-w-[643px] pt-[10px] ">
          <h3 className="font-sans font-semibold text-[#121212] text-[26px] xs:text-[28px] sm:text-[32px] lg:text-[40px]">
            Enfocados en crear soluciones web claras, modernas y adaptadas a
            cada necesidad.
          </h3>
        </div>
        <div className="lg:max-w-[392px] pt-[50px] space-y-[17px]">
          <p className="font-mono font-light text-[#666666] text-[16px] sm:text-[18px]">
            Nuestro objetivo es interpretar de la mejor manera las ideas del
            cliente y asesorarlo sobre la implementación de las tecnologías que
            su proyecto necesita.
          </p>
          <p className="font-mono font-light text-[#666666] text-[16px] sm:text-[18px]">
            EG Sitios nace como un proyecto de desarrollo web enfocado en
            acompañar a emprendedores y profesionales en la creación de su
            presencia digital.
          </p>
        </div>
      </div>
      <div className="lg:pt-8">
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
