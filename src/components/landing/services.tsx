import React from "react";
import SectionHeader from "../ui/section-header";
import { ServiceCarousel } from "../ui/services-carousel";

import ServiceImageOne from "@/src/assets/images/service-image-1.png";
import ServiceImageTwo from "@/src/assets/images/service-image-2.png";
import ServiceImageThree from "@/src/assets/images/service-image-3.png";
import GetQuoteButton from "../ui/get-quote-button";
import { SECTIONS } from "@/src/constants";
import { useTranslations } from "next-intl";

const serviceItems = [
  {
    id: "artificial-grass",
    image: ServiceImageOne,
    title: "Műfű telepítés",
    description:
      "Kiváló minőségű, tartós műfüvet telepítünk, amely természetes hatást kelt, minimális karbantartást igényel, és egész évben gyönyörű zöld kertet biztosít.",
  },
  {
    id: "drain-system",
    image: ServiceImageTwo,
    title: "Öntözőrendszer telepítés",
    description:
      "Automata öntözőrendszereinkkel időt, vizet és energiát takaríthatsz meg, így a kerted mindig üde és egészséges marad.",
  },
  {
    id: "lawn-care",
    image: ServiceImageThree,
    title: "Kertépítés, kertgondozás",
    description:
      "Professzionális kertépítési megoldások a tökéletes zöld oázisért, valamint átfogó kertgondozási szolgáltatások, hogy kerted mindig rendezett és virágzó legyen.",
  },
];

const Services = () => {
  const t = useTranslations('servicesSection')

  const serviceItems = [
    {
      id: "artificial-grass",
      image: ServiceImageOne,
      title: t.raw('serviceItems')[0].title,
      description:
        t.raw('serviceItems')[0].description,
    },
    {
      id: "drain-system",
      image: ServiceImageTwo,
      title: t.raw('serviceItems')[1].title,
      description:
      t.raw('serviceItems')[1].description,
    },
    {
      id: "lawn-care",
      image: ServiceImageThree,
      title: t.raw('serviceItems')[2].title,
      description:
      t.raw('serviceItems')[2].description,
    },
  ];


  return (
    <section id={SECTIONS.SERVICES} className="w-full scroll-m-32">
      <div className="container mx-auto pt-7 pb-[72px] md:py-[72px]">
        <div className="w-full flex flex-col gap-7 md:gap-[50px]">
          <SectionHeader id="services" title={t('title')} />
          <ServiceCarousel items={serviceItems} />
          <GetQuoteButton className="mt-5 w-fit mx-auto"/>
        </div>
      </div>
    </section>
  );
};

export default Services;
