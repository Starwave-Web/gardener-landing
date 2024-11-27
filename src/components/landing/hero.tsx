import { SECTIONS } from "@/src/constants";
import GetQuoteButton from "../ui/get-quote-button";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations('heroSection')
  return (
    <section id={SECTIONS.HERO} className="bg-hero-bg  min-h-[647px] md:min-h-[840px] -mt-[102px]">
      <div className="bg-gradient-to-b from-[#123616]/60 to-[#277B2F]/5 min-h-[647px] md:min-h-[840px]">
        <div className="h-[102px]" />
        <div className="container mx-auto">
          <div className="flex flex-col gap-[27px]">
            <div className="w-full mt-16">
              <p className="text-white text-hero-banner-mobile text-center md:text-hero-banner py-3 px-4 md:p-5 rounded-[60px] bg-black/50 w-fit mx-auto">{t('subtitle1')}<br className="block md:hidden"/>{t('subtitle2')}</p>
            </div>
            <p className="text-white text-hero-text-mobile md:text-hero-text-md lg:text-hero-text-lg xl:text-hero-text text-center drop-shadow-2xl">
              {t('title1')}<br/>{t('title2')}
            </p>
            <GetQuoteButton className="w-fit mx-auto mt-[100px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
