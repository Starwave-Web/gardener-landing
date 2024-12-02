import Image, { StaticImageData } from "next/image";
import { Star } from "../icons/testimonials";

const TestimonialsCard = ({
  id,
  image,
  name,
  description,
  stars,
}: {
  id: string;
  image: StaticImageData;
  name: string;
  description: string;
  stars: number;
}) => {
  return (
    <div
      data-id={id}
      className="rounded-[40px] border border-primary-green p-7 flex gap-[14px] md:basis-1/2 md:max-w-[310px] lg:max-w-[467px] xl:max-w-[577px]"
    >
      <Image className="rounded-full h-20 w-20 object-cover" src={image} alt={`testimonial-image-${id}`} />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-[14px]">
          <p className="text-testimonial-name text-primary-green">{name}</p>
          <p className="text-testimonial-description text-tertiary-green">{description}</p>
        </div>
        <div className="flex gap-1.5">
          {Array.from({ length: stars }).map((_, index) => (
            <Star key={`${id}-star-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
