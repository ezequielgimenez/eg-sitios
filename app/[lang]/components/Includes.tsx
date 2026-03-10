import Image from "next/image";

type contentProps = {
  icon: string;
  title: string;
  description: string;
};

type Props = {
  incluye: {
    titulo: string;
    titulo2: string;
    content: contentProps[];
  };
};

export default function IncludesComp({ incluye }: Props) {
  const content = incluye.content;
  return (
    <div
      id="incluye"
      className="flex justify-center bg-[#E8E8E8] py-[100px] px-8 lg:px-0"
    >
      <div className="flex flex-col items-center text-center ">
        <div data-aos="fade-up" className="max-w-[250px] md:max-w-[600px]">
          <h3 className="font-sans font-extrabold text-[#121212] text-[30px] md:text-[35px] lg:text-[40px]">
            {incluye.titulo} <br />
            <span
              className="font-sans font-extrabold text-[30px] md:text-[35px] lg:text-[40px]
            bg-gradient-to-r
            from-[#e6aeae]
            to-[#B1255B]
            bg-clip-text
            text-transparent"
            >
              {incluye.titulo2}
            </span>{" "}
          </h3>
        </div>
        <div className="bg-[#AF254F] w-[80px] h-[4px]" />
        <div
          data-aos="fade-up"
          className="max-w-[1440px] flex flex-col items-center justify-center flex-wrap gap-[24px] pt-[70px] lg:flex-row lg:px-4"
        >
          {content?.map((item, index) => {
            const isLast = index === content.length - 1;

            return (
              <div
                key={index}
                className={`flex flex-col 
              w-[350px]
              group
            bg-white
              p-[32px]
              h-[320px]
             rounded-[24px]
              border border-[#FF4BAB20]
              transition-all duration-300
              hover:border-[#AF254F]
              hover:shadow-2xl hover:shadow-[#AF254F]/10
              hover:-translate-y-2 ${isLast ? "lg:w-[845px]" : "lg:w-[410px]"}`}
              >
                <Image
                  src={item.icon}
                  width={64}
                  height={64}
                  alt={"icon " + index}
                  unoptimized
                  className="
                  transition-transform duration-500 ease-out
                  group-hover:rotate-12
                  group-hover:scale-110
                "
                />
                <div>
                  <h5 className="font-sans font-bold text-start text-[#1C1F26] text-[24px] pt-4 lg:pt-[32px]">
                    {item.title}
                  </h5>
                  <p className="font-manrope text-start text-[#666666] text-[14px] lg:text-[16px] pt-2 lg:pt-[16px]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
