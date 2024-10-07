"use client"

import Link from "next/link";
import { Logo } from "../icons/navbar";
import { scrollToSection } from "@/lib/utils";
import { FacebookLogo, LinkedInLogo, TwitterLogo } from "../icons/footer";

const Footer = () => {
  return (
    <section className="w-full min-h-[120px]  md:min-h-[320px] bg-tertiary-green">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex gap-10 md:gap-0 flex-col md:flex-row md:justify-between">
          <Logo />
          <div className="flex gap-7 flex-col-reverse md:flex-row">
            <ul className="flex flex-col gap-4 text-footer text-white mb-7">
              <li className="cursor-pointer">
                <p onClick={() => scrollToSection("services")}>
                  Szolgáltatások
                </p>
              </li>
              <li className="cursor-pointer">
                <p onClick={() => scrollToSection("aboutUs")}>Rólunk</p>
              </li>
              <li className="cursor-pointer">
                <p onClick={() => scrollToSection("testimonials")}>
                  Visszajelzések
                </p>
              </li>
              <li className="cursor-pointer">
                <p onClick={() => scrollToSection("testimonials")}>
                  Ajánlatkérés
                </p>
              </li>
            </ul>
            <div className="flex items-center self-start gap-5">
              <Link href="/"><LinkedInLogo/></Link>
              <Link href="/"><FacebookLogo/></Link>
              <Link href="/"><TwitterLogo/></Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[19px]">
          <div className="h-px w-full bg-white" />
          <div className="flex flex-col-reverse gap-7 md:flex-row md:justify-between text-white">
            <p>© 2024 Harmatcsepp Kerttervezés. Minden jog fentartva.</p>
            <Link className="underline" href="/">Adatkezelési szabályzat</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
