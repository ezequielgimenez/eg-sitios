import HeaderComp from "./components/Header";
import HeroSectionComp from "./components/Hero";
import ServiciosComp from "./components/Servicios";
import SobreNosotrosComp from "./components/AboutMe";
import IncludesComp from "./components/Includes";
import WorksComp from "./components/Works";
import ContactComp from "./components/Contact";

import { getDictionary, hasLocale } from "./dictionaries";
import { notFound } from "next/navigation";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const content = await getDictionary(lang);
  return (
    <div>
      <HeaderComp nav={content.nav} lang={lang} />
      <HeroSectionComp hero={content.hero} />
      <ServiciosComp services={content.services} />
      <SobreNosotrosComp sobreNosotros={content.sobreNosotros} />
      <IncludesComp incluye={content.incluye} />
      <WorksComp tituloTrabajos={content.tituloTrabajos} />
      <ContactComp contacto={content.contacto} />
    </div>
  );
}
