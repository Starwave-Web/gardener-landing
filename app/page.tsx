import AboutUs from "@/components/landing/about-us";
import ContactUs from "@/components/landing/contact-us";
import Hero from "@/components/landing/hero";
import Services from "@/components/landing/services";
import Testimonials from "@/components/landing/testimonials";

export default function Home() {
  return (
      <main>
        <Hero/>
        <Services/>
        <AboutUs/>
        <Testimonials/>
        <ContactUs/>
      </main>
  );
}
