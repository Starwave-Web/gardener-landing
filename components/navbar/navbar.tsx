"use client";

import { scrollToSection } from "@/lib/utils";
import { Button } from "../ui/button";
import CloseIcon, { HamburgerMenu, Logo } from "@/components/icons/navbar";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSectionMobile = (section: string) => {
    setOpen(!open);
    scrollToSection(section);
  };
  return (
    <nav className="w-full mx-auto px-4 pt-4 md:px-[18px] md:pt-[18px] ">
      <div className="flex justify-between items-center px-[18px] md:px-6 rounded-[12px] container mx-auto h-[84px] bg-gradient-to-tr from-primary-green from-0% via-primary-green/25 via-36% to-primary-green to-100% backdrop-blur-sm">
        <div onClick={() => scrollToSection("hero")}>
          <Logo className="w-[210px] md:w-full h-auto" />
        </div>
        <div className="lg:flex items-center gap-[29px] hidden">
          <ul className="flex items-center gap-16 text-white">
            <li className="cursor-pointer">
              <p onClick={() => scrollToSection("services")}>Szolgáltatások</p>
            </li>
            <li className="cursor-pointer">
              <p onClick={() => scrollToSection("aboutUs")}>Rólunk</p>
            </li>
            <li className="cursor-pointer">
              <p onClick={() => scrollToSection("testimonials")}>
                Visszajelzések
              </p>
            </li>
          </ul>
          <Button onClick={() => scrollToSection("contactUs")}>
            Ajánlatkérés
          </Button>
        </div>
        <div onClick={() => setOpen(!open)} className="lg:hidden">
          <HamburgerMenu />
        </div>
      </div>
      <div
        data-open={open}
        className="hidden data-[open=true]:flex justify-end w-full h-[120vh] bg-black/25 absolute -top-[60px]"
      >
        <div className="w-1/2 h-[120vh] bg-footer-green px-[22px] py-[29px] flex flex-col gap-11">
          <div className="self-end mt-14" onClick={() => setOpen(!open)}>
            <CloseIcon />
          </div>
          <div>
            <ul className="flex flex-col gap-8 text-p text-white">
              <li className="cursor-pointer">
                <p onClick={() => scrollToSectionMobile("services")}>
                  Szolgáltatások
                </p>
              </li>
              <li className="cursor-pointer">
                <p onClick={() => scrollToSectionMobile("aboutUs")}>Rólunk</p>
              </li>
              <li className="cursor-pointer">
                <p onClick={() => scrollToSectionMobile("testimonials")}>
                  Visszajelzések
                </p>
              </li><li className="cursor-pointer">
                <p onClick={() => scrollToSectionMobile("contactUs")}>
                Ajánlatkérés
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
