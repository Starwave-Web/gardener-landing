import { SECTIONS } from "@/constants";
import GetQuoteButton from "../ui/get-quote-button";

const Hero = () => {
  return (
    <section id={SECTIONS.HERO} className="bg-hero-bg  min-h-[647px] md:min-h-[840px] -mt-[102px]">
      <div className="bg-gradient-to-b from-[#123616]/60 to-[#277B2F]/5 min-h-[647px] md:min-h-[840px]">
        <div className="h-[102px]" />
        <div className="container mx-auto">
          <div className="flex flex-col gap-[27px]">
            <div className="w-full mt-16">
              <p className="text-white text-hero-banner-mobile text-center md:text-hero-banner py-3 px-4 md:p-5 rounded-[60px] bg-black/50 w-fit mx-auto">Minőségi kertépítés az ország<br className="block md:hidden"/> egész területén.</p>
            </div>
            <p className="text-white text-hero-text-mobile md:text-hero-text-md lg:text-hero-text-lg xl:text-hero-text text-center drop-shadow-2xl">
              Kertépítés,<br/> tereprendezés
            </p>
            <GetQuoteButton className="w-fit mx-auto mt-[100px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
