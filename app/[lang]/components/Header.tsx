"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import LangSwitcher from "./ButtonLang";

type Props = {
  lang: "es" | "en";

  nav: {
    inicio: string;
    servicios: string;
    about: string;
    trabajos: string;
    contacto: string;
  };
};

export default function HeaderComp({ lang, nav }: Props) {
  const [showNav, setShowNav] = useState(false);
  const [active, setActive] = useState("inicio");

  const openNav = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // cuánto debe verse para activarse
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    `
    font-nav font-normal text-[14px] cursor-pointer
    transition-colors duration-500 ease-in-out
    ${
      active === id
        ? "text-[#AF254F]"
        : "text-[#E5E7EB] hover:text-[#AF254F]/75"
    }
  `;
  return (
    <header>
      <div className="lg:hidden relative flex items-center bg-[#111827] h-22.5 px-6">
        {/* Burger */}
        <button onClick={openNav} className="z-10">
          <Image
            src="/logo/burger-bar.png"
            alt="burger"
            width={35}
            height={35}
            priority
            unoptimized
          />
        </button>

        {/* Logo centrado real */}
        <div className="absolute left-1/2 -translate-x-1/2 pt-2">
          <Link href="/">
            <Image
              src="/logo/logo.svg"
              alt="Logo"
              width={202}
              height={57}
              priority
              unoptimized
            />
          </Link>
        </div>
      </div>
      <div
        className={`
    fixed top-0 left-0 w-screen h-screen bg-[#252525]/95
    z-50 rounded-b-3xl
    flex flex-col items-center
    space-y-8
    transition-all duration-300 ease-out
    ${
      showNav
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 -translate-y-6 pointer-events-none"
    }
  `}
      >
        <div className="flex w-full justify-between px-5 py-6">
          <div onClick={openNav}>
            <Image
              src="/logo/close.png"
              alt="Logo"
              width={24}
              height={24}
            ></Image>
          </div>
          <LangSwitcher lang={lang} />
        </div>

        <Link
          className="py-8 text-[22px] font-sans font-semibold text-white drop-shadow-[0px_0px_5px_rgba(197,75,140,1)]"
          href="#servicios"
          onClick={openNav}
        >
          {nav.servicios}
        </Link>
        <Link
          className="py-8 text-[22px] font-sans font-semibold text-white drop-shadow-[0px_0px_5px_rgba(197,75,140,1)]"
          href={`/${lang}#acercade`}
          onClick={openNav}
        >
          {nav.about}
        </Link>
        <Link
          className="py-8 text-[22px] font-sans font-semibold text-white drop-shadow-[0px_0px_5px_rgba(197,75,140,1)]"
          href="#trabajos"
          onClick={openNav}
        >
          {nav.trabajos}
        </Link>

        <Link
          className="py-8 text-[22px] font-sans font-semibold text-white drop-shadow-[0px_0px_5px_rgba(197,75,140,1)]"
          href="#contacto"
          onClick={openNav}
        >
          {nav.contacto}
        </Link>
      </div>
      {/*  bg-gradient-to-t from-[#160E12] to-[#482739]  */}
      <div className="bg-[#0D1321]">
        <div className="hidden lg:flex justify-between h-[85px] max-w-[1440px] mx-auto px-8">
          <div className="cursor-pointer">
            <Link href="/">
              <Image
                src="/logo/logo.svg"
                alt="Logo-Webkelar"
                width={202}
                height={57}
                priority
                unoptimized
                className="py-2"
              />
            </Link>
          </div>

          <nav className="flex">
            <ul className="flex justify-center items-center gap-14">
              <li>
                <Link className={linkClass("inicio")} href={`/${lang}#inicio`}>
                  {nav.inicio}
                </Link>
              </li>
              <li>
                <Link
                  className="font-nav font-normal text-[#E5E7EB] text-[14px] cursor-pointer hover:text-[#AF254F]/75 transition-colors duration-500 ease-in-out"
                  href="#servicios"
                >
                  {nav.servicios}
                </Link>
              </li>
              <li>
                <Link
                  className="font-nav font-normal text-[#E5E7EB] text-[14px] cursor-pointer hover:text-[#AF254F]/75 transition-colors duration-500 ease-in-out"
                  href="#acercade"
                >
                  {nav.about}
                </Link>
              </li>

              <li>
                <Link
                  className="font-nav font-normal text-[#E5E7EB] text-[14px] cursor-pointer hover:text-[#AF254F]/75 transition-colors duration-500 ease-in-out"
                  href="#trabajos"
                >
                  {nav.trabajos}
                </Link>
              </li>

              <li>
                <a
                  className="
                    inline-flex items-center justify-center
                    border border-[#AF254F] rounded-[100px]
                    px-5 py-3
                    font-nav font-normal text-[#E5E7EB] text-[14px] cursor-pointer
                    transition-colors duration-300 ease-in-out 
                   hover:text-[#AF254F]/75
                     "
                  href="https://wa.link/5h41dw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {nav.contacto}
                </a>
              </li>
              <LangSwitcher lang={lang} />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
