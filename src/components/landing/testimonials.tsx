import SectionHeader from "../ui/section-header"
import Anna from "@/src/assets/images/anna.jpg"
import Peter from "@/src/assets/images/peter.jpg"
import Erika from "@/src/assets/images/erika.jpg"
import Leslie from "@/src/assets/images/laszlo.jpg"
import TestimonialsCard from "../ui/testimonials-card"
import { SECTIONS } from "@/src/constants"
import { useTranslations } from "next-intl"





const Testiomonials = () => {
  const t = useTranslations('testimonialsSection')

  const testimonials = [{
    id: "kovacs-anna",
    image: Anna,
    name: t.raw('testimonials')[0].name,
    description: t.raw('testimonials')[0].description,
    stars: 5,
  },{
    id: "nagy-peter",
    image: Peter ,
    name: t.raw('testimonials')[1].name,
    description: t.raw('testimonials')[1].description,
    stars: 5,
  },{
    id: "szabo-erika",
    image: Erika,
    name: t.raw('testimonials')[2].name,
    description: t.raw('testimonials')[2].description,
    stars: 5,
  },{
    id: "toth-laszlo",
    image: Leslie,
    name: t.raw('testimonials')[3].name,
    description: t.raw('testimonials')[3].description,
    stars: 5,
  },]


  return (
    <section id={SECTIONS.TESTIMONIALS} className='w-full scroll-m-32'>
      <div className='container mx-auto my-7 md:my-[60px] flex flex-col gap-10 md:gap-[70px]'>
        <SectionHeader title={t('title')}/>
        <div className="flex flex-wrap gap-4 md:gap-[45px] justify-center px-4">
          {testimonials.map((testimonial) => (<TestimonialsCard key={testimonial.id} id={testimonial.id} image={testimonial.image} name={testimonial.name} description={testimonial.description} stars={testimonial.stars}/>))}
        </div>
      </div>
    </section>
  )
}

export default Testiomonials