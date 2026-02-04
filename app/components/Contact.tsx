import Image from "next/image";
import ContactForm from "./Form";
import { link } from "fs";

const redes = [
  {
    title: "INSTAGRAM",
    subtitle: "EGsitios",
    img: "/icons/instagram.png",
    link: "https://www.instagram.com/ezegimenez1",
  },
  {
    title: "EMAIL",
    subtitle: "egsitios@gmail.com",
    img: "/icons/email.png",
    link: "mailto:egsitios@gmail.com",
  },
  {
    title: "WHATSAPP",
    subtitle: "+54 3756 567472",
    img: "/icons/whatsapp.png",
    link: "https://wa.link/5h41dw",
  },
];

export default function ContactComp() {
  return (
    <div
      id="contacto"
      className="
        bg-gradient-to-b from-[#160E12] from-[40%] to-[#482739]
        px-6 sm:px-10 lg:px-[80px]
        pt-[80px]
      "
    >
      {/* HEADER */}
      <div className="flex flex-col items-center">
        <h5 className="font-sans font-bold text-white text-[36px] sm:text-[44px] lg:text-[60px]">
          Contacto
        </h5>
        <div className="bg-[#AF254F] w-[80px] h-[4px] mt-2" />
      </div>

      {/* CONTENT */}
      <div
        className="
          flex flex-col lg:flex-row
          justify-center
          items-center
          gap-12 lg:gap-[96px]
          pt-[64px]
        "
      >
        {/* LEFT */}
        <div className="flex flex-col max-w-[525px]">
          <h5 className="font-sans font-bold text-white text-[24px] sm:text-[28px] lg:text-[30px]">
            Hablanos de tu próximo proyecto
          </h5>

          <p className="font-mono text-[#9CA3AF] text-[16px] sm:text-[18px] pt-[24px]">
            Estamos listos para transformar tu visión en una realidad digital.
            Elige el canal que prefieras o envíanos un mensaje directo.
          </p>

          {/* REDES */}
          <div className="pt-[24px]">
            {redes.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div
                  className="
                    flex gap-[16px] sm:gap-[24px]
                    pt-[32px]
                    transition-all duration-300
                    lg:group-hover:translate-x-2
                  "
                >
                  <Image
                    src={item.img}
                    width={48}
                    height={48}
                    alt={"Red social " + index}
                    unoptimized
                    className="
                      transition-transform duration-300
                      lg:group-hover:scale-110
                    "
                  />

                  <div className="flex flex-col">
                    <p className="font-mono text-[#9CA3AF] text-[13px] sm:text-[14px] tracking-[1.4px]">
                      {item.title}
                    </p>
                    <p
                      className="
                        font-sans font-semibold text-white
                        text-[18px] sm:text-[20px]
                        transition-colors duration-300
                        lg:group-hover:text-[#AF254F]
                      "
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full max-w-[500px]">
          <ContactForm />
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex flex-col items-center mt-[120px] pb-8">
        <div className="w-full max-w-[1200px] h-px bg-[#9CA3AF]/40" />

        <div
          className="
            w-full max-w-[1200px]
            flex flex-col sm:flex-row
            justify-between items-center
            gap-4
            pt-4
          "
        >
          <Image
            src="/logo/logo-footer.png"
            width={107}
            height={30}
            alt="Logo Footer"
            unoptimized
          />

          <div className="flex gap-4">
            <p className="font-mono text-[#9CA3AF] text-[14px] cursor-pointer hover:text-[#bdc0c5]">
              Privacidad
            </p>
            <p className="font-mono text-[#9CA3AF] text-[14px] cursor-pointer hover:text-[#bdc0c5]">
              Términos
            </p>
            <p className="font-mono text-[#9CA3AF] text-[14px] cursor-pointer hover:text-[#bdc0c5]">
              Soporte
            </p>
          </div>
        </div>

        <p className="font-sans font-light text-white text-[13px] text-center pt-4">
          © 2026 EG Sitios. <br className="sm:hidden" /> Todos los derechos
          reservados.
        </p>
      </div>
    </div>
  );
}
