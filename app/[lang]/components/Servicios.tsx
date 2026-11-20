import Image from "next/image";

type ServiceItem = {
  img: string;
  titulo: string;
  descripcion: string;
};

type PricingPlan = {
  title: string;
  price: string;
  buttonText: string;
  href: string;
  features: string[];
};

type Props = {
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
    pricing: {
      title: string;
      subtitle: string;
      currencyLabel: string;
      plans: PricingPlan[];
    };
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  };
};

export default function ServiciosComp({ services }: Props) {
  return (
    <div className="bg-[#E8E8E8] py-[70px]">
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
        className="w-full max-w-[1440px] mx-auto flex items-center justify-center flex-wrap gap-[32px] pt-[73px] px-4 sm:px-8"
      >
        {services.items.map((item, index) => (
          <div
            key={index}
            className="
              group
              w-full max-w-[584px] min-w-0
              min-h-[330px]
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
            <div className="flex h-full min-w-0 flex-col p-6 sm:p-8 lg:p-10">
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
              <h5 className="break-words pt-8 font-sans text-[24px] font-bold text-[#1C1F26]">
                {item.titulo}
              </h5>

              {/* Descripción */}
              <p className="break-words pt-4 font-manrope text-[16px] font-normal text-[#666666] md:text-[18px]">
                {item.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pricing */}
      <section
        id="servicios"
        className="mx-auto mt-20 max-w-[1280px] px-6 sm:px-8 lg:mt-24"
      >
        <div className="mx-auto max-w-[720px] text-center">
          <h3
            data-aos="fade-up"
            className="font-sans text-3xl font-extrabold text-[#121212] sm:text-4xl"
          >
            {services.pricing.title}
          </h3>
          <div
            data-aos="fade-up"
            className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#AF254F]"
          />
          <p
            data-aos="fade-up"
            className="pt-4 font-mono text-base leading-7 text-[#666666] sm:text-lg"
          >
            {services.pricing.subtitle}
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3"
        >
          {services.pricing.plans.map((plan, index) => (
            <article
              key={plan.title}
              className="group flex h-full flex-col rounded-3xl border border-[#FF4BAB20] bg-white p-7 shadow-[0_12px_35px_rgba(15,23,42,0.04)] transform-gpu scale-100 translate-y-0 transition-transform transition-shadow transition-colors duration-300 ease-out hover:scale-103 hover:-translate-y-2 hover:border-[#AF254F] hover:shadow-2xl hover:shadow-[#AF254F]/20 sm:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#AF254F]/10 text-[#AF254F] transition-transform duration-500 ease-out group-hover:rotate-12 group-hover:scale-110">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6"
                >
                  {index === 0 ? (
                    <path
                      d="M4 5h16v14H4zM8 9h8M8 13h5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ) : index === 1 ? (
                    <path
                      d="M4 6h16v13H4zM4 10h16M8 15h3"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ) : (
                    <path
                      d="M3 5h18v14H3zM3 9h18M7 14h4M16 13v4M14 15h4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}
                </svg>
              </div>

              <h4 className="mt-6 font-sans text-xl font-bold text-[#1C1F26] sm:text-2xl">
                {plan.title}
              </h4>
              <p className="mt-4 font-sans text-4xl font-extrabold tracking-tight text-[#AF254F]">
                ${plan.price}
              </p>
              <p className="mt-1 font-mono text-xs text-[#777777]">
                {services.pricing.currencyLabel}
              </p>

              <ul className="mt-6 flex flex-1 flex-col gap-3 border-t border-[#E5E7EB] pt-6">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 font-mono text-sm leading-6 text-[#525866]"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="mt-1 h-4 w-4 shrink-0 text-[#AF254F]"
                    >
                      <path
                        d="m4 10 4 4 8-8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-[#AF254F] px-5 py-3 text-center font-sans text-sm font-bold text-[#AF254F] transition-colors duration-300 hover:bg-[#AF254F] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#AF254F]"
              >
                {plan.buttonText}
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </section>

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
