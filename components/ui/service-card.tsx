import { type StaticImageData } from "next/image";
import Image from "next/image";

const ServiceCard = ({
  index,
  id,
  image,
  title,
  description,
}: {
  index: number;
  id: string;
  image: StaticImageData;
  title: string;
  description: string;
}) => {
  return (
    <div data-id={id} className="group flex flex-col rounded-[30px] shadow-lg sm:max-w-[358px] md:max-w-[385px] h-[484px]">
      <Image className="h-auto w-full rounded-t-[30px]" src={image} alt={`service-image-${index}`} />
      <div className="w-full h-full p-[30px] flex flex-col gap-[10px]">
        <h4 className="text-services-title text-tertiary-green">{title}</h4>
        <p className="text-services-description text-tertiary-green">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
