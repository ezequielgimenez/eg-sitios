import HeaderComp from "./components/Header";
import HeroSectionComp from "./components/Hero";
import ServiciosComp from "./components/Servicios";
import SobreNosotrosComp from "./components/AboutMe";
import IncludesComp from "./components/Includes";
import WorksComp from "./components/Works";
import ContactComp from "./components/Contact";

export default function Home() {
  return (
    <div>
      <HeaderComp />
      <HeroSectionComp />
      <ServiciosComp />
      <SobreNosotrosComp />
      <IncludesComp />
      <WorksComp />
      <ContactComp />
    </div>
  );
}
