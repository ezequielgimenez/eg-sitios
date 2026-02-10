"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

type Lang = "es" | "en";

type Props = {
  lang: Lang;
};

export default function LangSwitcher({ lang }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const changeLang = (newLang: Lang) => {
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath);
    setOpen(false);
  };

  return (
    <div className="relative z-30">
      {/* BOTÓN */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1 border rounded text-sm cursor-pointer hover:transition-transform duration-300 ease-out hover:bg-[#AF254F]/40"
      >
        {lang.toUpperCase()}
        <span className="text-xs">▼</span>
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute right-0 mt-2 w-24 border rounded bg-[#111827] shadow-md">
          {lang !== "es" && (
            <button
              onClick={() => changeLang("es")}
              className="w-full px-3 py-2 text-left cursor-pointer hover:transition-transform duration-300 hover:bg-[#AF254F]/40 text-sm"
            >
              ES
            </button>
          )}

          {lang !== "en" && (
            <button
              onClick={() => changeLang("en")}
              className="w-full px-3 py-2 text-left cursor-pointer hover:transition-transform duration-300 hover:bg-[#AF254F]/40 text-sm"
            >
              EN
            </button>
          )}
        </div>
      )}
    </div>
  );
}
