import { GrassIcon } from "../icons/general";

const SectionHeader = ({ id, title }: { id?: string; title: string }) => {
  return (
    <div className="relative">
      <h2 id={id} className="text-section-header-mobile md:text-section-header text-primary-grey text-center">
        {title}
      </h2>
      <GrassIcon data-id={id} className="hidden data-[id=services]:block data-[id=aboutus]:block absolute data-[id=services]:left-[40%] data-[id=aboutus]:left-[50%]   -translate-x-1/2 top-[35%] z-[-1] w-[54px] md:w-auto h-auto"/>
    </div>
  );
};

export default SectionHeader;
