"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeaderComp() {
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
      }
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
              src="/logo/logo.png"
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
        </div>

        <Link
          className="py-8 text-[22px] font-sans font-semibold text-white drop-shadow-[0px_0px_5px_rgba(197,75,140,1)]"
          href="/#servicios"
          onClick={openNav}
        >
          SERVICIOS
        </Link>
        <Link
          className="py-8 text-[22px] font-sans font-semibold text-white drop-shadow-[0px_0px_5px_rgba(197,75,140,1)]"
          href="/#sobre"
          onClick={openNav}
        >
          SOBRE EG SITIOS
        </Link>
        <Link
          className="py-8 text-[22px] font-sans font-semibold text-white drop-shadow-[0px_0px_5px_rgba(197,75,140,1)]"
          href="/#trabajos"
          onClick={openNav}
        >
          TRABAJOS
        </Link>

        <Link
          className="py-8 text-[22px] font-sans font-semibold text-white drop-shadow-[0px_0px_5px_rgba(197,75,140,1)]"
          href="/#contacto"
          onClick={openNav}
        >
          CONTACTO
        </Link>
      </div>

      <div className="hidden lg:flex justify-between bg-[#111827] h-[85px]  px-12">
        <div className="cursor-pointer">
          <Link href="/">
            <Image
              src="/logo/logo.png"
              alt="Logo-EG-sitios"
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
              <Link className={linkClass("inicio")} href="/#inicio">
                INICIO
              </Link>
            </li>
            <li>
              <Link
                className="font-nav font-normal text-[#E5E7EB] text-[14px] cursor-pointer hover:text-[#AF254F]/75 transition-colors duration-500 ease-in-out"
                href="/#sobre-mi"
              >
                SERVICIOS
              </Link>
            </li>
            <li>
              <Link
                className="font-nav font-normal text-[#E5E7EB] text-[14px] cursor-pointer hover:text-[#AF254F]/75 transition-colors duration-500 ease-in-out"
                href="/#recetarios"
              >
                SOBRE EG SITIOS
              </Link>
            </li>

            <li>
              <Link
                className="font-nav font-normal text-[#E5E7EB] text-[14px] cursor-pointer hover:text-[#AF254F]/75 transition-colors duration-500 ease-in-out"
                href="/#recursos"
              >
                TRABAJOS
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
                href="https://wa.link/20og9y"
                target="_blank"
                rel="noopener noreferrer"
              >
                CONTACTO
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
