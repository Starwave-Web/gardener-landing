"use client";

import { scrollToSection } from "@/src/lib/utils";
import { Button } from "../ui/button";
import CloseIcon, { HamburgerMenu, Logo, LogoIntl } from "@/src/components/icons/navbar";
import { useState } from "react";
import { SECTIONS } from "@/src/constants";
import { useLocale, useTranslations } from "next-intl";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const t = useTranslations("navBar")
  const locale = useLocale()

  const scrollToSectionMobile = (section: string) => {
    setOpen(!open);
    scrollToSection(section);
  };
  return (
    <nav className="w-full sticky top-0 mx-auto px-4 pt-4 md:px-[18px] md:pt-[18px] z-10">
      <div className="flex justify-between items-center px-[18px] md:px-6 rounded-[12px] container mx-auto h-[84px] bg-gradient-to-tr from-primary-green from-0% via-primary-green/25 via-36% to-primary-green to-100% backdrop-blur-sm">
        <div onClick={() => scrollToSection(SECTIONS.HERO)}>
          {locale === "hu" ? <Logo className="w-[210px] md:w-full h-auto" /> : <LogoIntl className="w-[210px] md:w-full h-auto" />}
        </div>
        <div className="lg:flex items-center gap-[29px] hidden">
          <ul className="flex items-center gap-16 text-white">
            <li className="cursor-pointer">
              <p onClick={() => scrollToSection(SECTIONS.SERVICES)}>{t('services')}</p>
            </li>
            <li className="cursor-pointer">
              <p onClick={() => scrollToSection(SECTIONS.ABOUT_US)}>{t('aboutUs')}</p>
            </li>
            <li className="cursor-pointer">
              <p onClick={() => scrollToSection(SECTIONS.TESTIMONIALS)}>
                {t('testimonials')}
              </p>
            </li>
          </ul>
          <Button size="sm" onClick={() => scrollToSection(SECTIONS.CONTACT_US)}>
            {t('getQuoteBtn')}
          </Button>
        </div>
        <div onClick={() => setOpen(!open)} className="lg:hidden">
          <HamburgerMenu />
        </div>
      </div>
      <div
        data-open={open}
        className="hidden data-[open=true]:flex justify-end w-full h-[120vh] bg-black/25 absolute top-0 left-0"
      >
        <div className="w-1/2 h-[120vh] bg-footer-green px-[22px] py-[px] flex flex-col gap-11">
          <div className="self-end mt-14" onClick={() => setOpen(!open)}>
            <CloseIcon />
          </div>
          <div>
            <ul className="flex flex-col gap-8 text-p text-white">
            <li className="cursor-pointer">
                <p onClick={() => scrollToSectionMobile(SECTIONS.HERO)}>
                  {t('home')}
                </p>
              </li>
              <li className="cursor-pointer">
                <p onClick={() => scrollToSectionMobile(SECTIONS.SERVICES)}>
                  {t('services')}
                </p>
              </li>
              <li className="cursor-pointer">
                <p onClick={() => scrollToSectionMobile(SECTIONS.ABOUT_US)}>{t('aboutUs')}</p>
              </li>
              <li className="cursor-pointer">
                <p onClick={() => scrollToSectionMobile(SECTIONS.TESTIMONIALS)}>
                  {t('testimonials')}
                </p>
              </li><li className="cursor-pointer">
                <p onClick={() => scrollToSectionMobile(SECTIONS.CONTACT_US)}>
                {t('getQuoteBtn')}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
