import { SECTIONS } from "@/src/constants";
import { EnvelopeIcon, LocationIcon, PhoneIcon } from "../icons/contact-us";
import ContactUsForm from "../ui/contact-us-form";
import SectionHeader from "../ui/section-header";

const ContactUs = () => {
  return (
    <section id={SECTIONS.CONTACT_US} className="w-full scroll-m-32">
      <div className="container mx-auto flex flex-col gap-9 md:gap-[70px] mt-0 mb-12 md:mb-[81px] md:mt-[50px]">
        <SectionHeader title="Kapcsolat" />
        <div className="flex flex-col-reverse md:flex-row px-4 gap-7 md:gap-[90px]">
          <div className="w-full md:w-1/2">
            <ContactUsForm />
          </div>
          <div className="flex flex-col gap-7 w-full md:w-1/2">
            <div className="flex items-center gap-5">
              <EnvelopeIcon />
              <p className="text-contact-us font-medium text-tertiary-green">
                info@harmatcsepp-kert.hu
              </p>
            </div>
            <div className="flex items-center gap-5">
              <PhoneIcon />
              <p className="text-contact-us font-medium text-tertiary-green">
                +36 30 609 0155
              </p>
            </div>
            <div className="flex items-center gap-5">
              <LocationIcon />
              <p className="text-contact-us font-medium text-tertiary-green">
                2440, Százhalombatta Tél utca 41.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
