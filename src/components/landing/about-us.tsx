import React from "react";
import SectionHeader from "../ui/section-header";
import Gardener from "@/src/assets/images/gardener.png";
import GetQuoteButton from "../ui/get-quote-button";
import Image from "next/image";
import { Logo, LogoIntl } from "../icons/navbar";
import { SECTIONS } from "@/src/constants";
import { useLocale, useTranslations } from "next-intl";



const AboutUs = () => {
  const t =useTranslations('aboutUsSection')
  const locale = useLocale()
  
  return (
    <section id={SECTIONS.ABOUT_US} className="w-full scroll-m-32">
      <div className="container mx-auto mb-[50px]">
        <SectionHeader id="aboutus" title={t('title')} />
      </div>
      <div className="bg-about-us-bg bg-cover relative">
        <div className="container mx-auto flex flex-col px-4 py-7 md:pt-[155px] pb-[49px] gap-7 md:gap-[77px] ">
          <div className="flex items-center gap-7 md:gap-[108px]  flex-col-reverse lg:flex-row ">
            <div className="flex flex-col gap-[2px] md:gap-11 text-about-us text-white lg:w-1/2">
              <p>
               {t('description1')}
              </p>
              <p>
              {t('description2')}
              </p>
              <p>
              {t('description3')}
              </p>
            </div>
            <Image
              className=" lg:w-1/2 rounded-[30px] lg:self-start xl:self-center"
              src={Gardener}
              alt="about-us-image"
            />
          </div>
          <GetQuoteButton className="w-fit mx-auto" />
          {locale === "hu" ? <Logo className="hidden md:block absolute bottom-8 right-8" /> : <LogoIntl className="hidden md:block absolute bottom-8 right-8" />}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
