"use client";

import { scrollToSection } from "@/lib/utils";
import { Button } from "../ui/button";
import { Logo } from "@/components/icons/navbar";

const Navbar = () => {
  return (
    <nav className="w-full mx-auto px-4 pt-4 md:px-[18px] md:pt-[18px] ">
      <div className="flex justify-between items-center px-[18px] md:px-6 rounded-[12px] container mx-auto h-[84px] bg-gradient-to-tr from">
        <div onClick={() => scrollToSection("hero")}>
          <Logo className="" />
        </div>
        <div className="flex items-center gap-[29px]">
          <ul className="flex items-center gap-16">
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
      </div>
    </nav>
  );
};

export default Navbar;
