import GetQuoteButton from "../ui/get-quote-button";

const Hero = () => {
  return (
    <section className="bg-hero-bg  min-h-[647px] md:min-h-[840px] -mt-[102px]">
      <div className="bg-gradient-to-b from-[#123616]/60 to-[#277B2F]/5 min-h-[647px] md:min-h-[840px]">
        <div className="h-[102px]" />
        <div className="container mx-auto">
          <div className="flex flex-col gap-[17px]">
            <div className="w-full mt-16">
              <p className="text-white text-hero-banner p-5 rounded-[60px] bg-black/50 w-fit mx-auto">Minőségi kertépítés az ország egész területén.</p>
            </div>
            <h1 className="text-white text-hero-text text-center drop-shadow-2xl">
              Kertépítés,
              <br /> tereprendezés
            </h1>
            <GetQuoteButton className="w-fit mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
