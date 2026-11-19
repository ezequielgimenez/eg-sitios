"use client";

import { usePathname, useRouter } from "next/navigation";

type Lang = "es" | "en";

type Props = {
  lang: Lang;
};

const languages: { code: Lang; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
];

export default function LangSwitcher({ lang }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const changeLang = (newLang: Lang) => {
    if (newLang === lang) return;

    const newPath = pathname.replace(/^\/(es|en)(?=\/|$)/, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <div
      role="group"
      aria-label="Select language"
      className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/[0.06] p-1 shadow-inner shadow-black/10 backdrop-blur-sm"
    >
      <span className="flex h-8 w-8 items-center justify-center text-[#AF254F]">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className="h-[18px] w-[18px]"
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </span>
      {languages.map(({ code, label }) => {
        const isCurrent = lang === code;

        return (
          <button
            key={code}
            type="button"
            aria-label={code === "es" ? "Español" : "English"}
            aria-pressed={isCurrent}
            onClick={() => changeLang(code)}
            className={`min-w-11 rounded-full px-3 py-2 font-sans text-xs font-bold tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AF254F] ${
              isCurrent
                ? "bg-[#AF254F] text-white shadow-md shadow-[#AF254F]/25"
                : "text-[#E5E7EB] hover:bg-white/10 hover:text-white"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
