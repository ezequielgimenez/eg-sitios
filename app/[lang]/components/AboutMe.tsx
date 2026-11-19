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
      className="bg-[#F8FAFC] px-6 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto flex max-w-[1080px] flex-col items-center text-center">
        <p
          data-aos="fade-up"
          className="font-mono text-[13px] font-semibold tracking-[0.2em] text-[#AF254F]"
        >
          {sobreNosotros.titulo}
        </p>
        <h2
          data-aos="fade-up"
          className="mt-4 max-w-[820px] font-sans text-[28px] font-bold leading-tight text-[#121212] sm:text-[36px] lg:text-[44px]"
        >
          {sobreNosotros.subtitulo}
        </h2>
        <div
          data-aos="fade-up"
          className="mt-6 h-1 w-20 rounded-full bg-[#AF254F]"
        />
        <div className="mt-12 grid w-full gap-5 text-left md:grid-cols-2">
          <p
            data-aos="fade-up"
            className="rounded-2xl border border-[#E5E7EB] border-t-2 border-t-[#AF254F] bg-white p-7 font-mono text-[15px] leading-7 text-[#525866] shadow-[0_12px_35px_rgba(15,23,42,0.04)] sm:p-9 sm:text-[16px]"
          >
            {sobreNosotros.descripcion1}
          </p>
          <p
            data-aos="fade-up"
            className="rounded-2xl border border-[#E5E7EB] border-t-2 border-t-[#AF254F] bg-white p-7 font-mono text-[15px] leading-7 text-[#525866] shadow-[0_12px_35px_rgba(15,23,42,0.04)] sm:p-9 sm:text-[16px]"
          >
            {sobreNosotros.descripcion2}
          </p>
        </div>
      </div>
    </div>
  );
}
