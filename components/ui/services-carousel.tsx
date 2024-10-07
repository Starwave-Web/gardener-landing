import { StaticImageData } from "next/image";
import ServiceCard from "./service-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel";

export function ServiceCarousel({
  items,
}: {
  items: {
    id: string;
    image: StaticImageData;
    title: string;
    description: string;
  }[];
}) {
  return (
    <Carousel className="w-full max-w-container">
      <CarouselContent className="py-10 ml-px mr-4">
        {items.map((item, index) => {
          return (
            <CarouselItem key={item.id} className="sm:basis-1/2 md:basis-1/3 pl-[22px]">
                <ServiceCard
                  index={index}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
