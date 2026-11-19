type ProcessStep = {
  title: string;
  description: string;
};

type Props = {
  process: {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
};

const stepIcons = [
  <svg
    key="analysis"
    aria-hidden="true"
    viewBox="0 0 48 48"
    fill="none"
    className="h-8 w-8"
  >
    <path
      d="M18 8H12a3 3 0 0 0-3 3v27a3 3 0 0 0 3 3h24a3 3 0 0 0 3-3V11a3 3 0 0 0-3-3h-6"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 6h12v8H18zM16 23h16M16 30h10"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg
    key="design"
    aria-hidden="true"
    viewBox="0 0 48 48"
    fill="none"
    className="h-8 w-8"
  >
    <rect
      x="6"
      y="8"
      width="36"
      height="32"
      rx="4"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <path
      d="M6 17h36M13 12.5h.02M18 12.5h.02M20 25l-5 4 5 4M28 25l5 4-5 4M26 23l-4 12"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg
    key="launch"
    aria-hidden="true"
    viewBox="0 0 48 48"
    fill="none"
    className="h-8 w-8"
  >
    <path
      d="M40 8 22 26M40 8 29 40l-7-14-14-7L40 8Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m13 35-5 5M14 27l-6 1M20 34l-1 6"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>,
];

export default function ProcessComp({ process }: Props) {
  return (
    <section
      id="proceso"
      className="scroll-mt-8 bg-white px-6 py-16 sm:px-8 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[700px] text-center">
          <h2
            data-aos="fade-up"
            className="font-mono text-[13px] font-semibold tracking-[0.2em] text-[#AF254F]"
          >
            {process.title}
          </h2>
          <p
            data-aos="fade-up"
            className="mt-3 font-mono text-sm leading-6 text-[#666666] sm:text-base"
          >
            {process.subtitle}
          </p>
          <div
            data-aos="fade-up"
            className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#AF254F]"
          />
        </div>

        <ol
          data-aos="fade-up"
          className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3 md:gap-6"
        >
          {process.steps.map((step, index) => (
            <li
              key={step.title}
              className="group relative transform-gpu scale-100 translate-y-0 rounded-2xl border border-[#FF4BAB20] bg-white p-6 transition-transform transition-shadow transition-colors duration-300 ease-out hover:scale-103 hover:-translate-y-2 hover:border-[#AF254F] hover:shadow-2xl hover:shadow-[#AF254F]/20 sm:p-8"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#AF254F]/10 text-[#AF254F] transition-transform duration-500 ease-out group-hover:rotate-12 group-hover:scale-110">
                  {stepIcons[index]}
                </span>
                <span className="font-mono text-sm font-semibold tracking-[0.12em] text-[#AF254F]">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-6 font-sans text-xl font-bold leading-snug text-[#121212] sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 font-mono text-sm leading-7 text-[#666666] sm:text-base">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
