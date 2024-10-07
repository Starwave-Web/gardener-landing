import SectionHeader from "../ui/section-header"
import Anna from "@/assets/images/anna.jpg"
import Peter from "@/assets/images/peter.jpg"
import Erika from "@/assets/images/erika.jpg"
import Leslie from "@/assets/images/laszlo.jpg"
import TestimonialsCard from "../ui/testimonials-card"
import { SECTIONS } from "@/constants"


const testimonials = [{
  id: "kovacs-anna",
  image: Anna,
  name: "Kovács Anna",
  description: "Álmaim kertjét hozták létre! Profi hozzáállásuk és kreativitásuk lenyűgözött. Minden részletre figyeltek, a növények kiválasztásától a kert végső kialakításáig. Mindenkinek ajánlom őket!",
  stars: 5,
},{
  id: "nagy-peter",
  image: Peter ,
  name: "Nagy Péter",
  description: "A Harmatcsepp Kerttervező csapata fantasztikus munkát végzett a kertünkön. Minden kívánságunkat figyelembe vették, és csodálatos végeredményt kaptunk. Azóta is gyönyörködünk a munkájukban, és nagyon hálásak vagyunk!",
  stars: 5,
},{
  id: "szabo-erika",
  image: Erika,
  name: "Szabó Erika",
  description: "Szakértelmük és elhivatottságuk példátlan. A kertünk most gyönyörű és rendezett, minden évszakban pompázik. Köszönöm a csapatnak a fantasztikus munkát és a kedves hozzáállást!",
  stars: 5,
},{
  id: "toth-laszlo",
  image: Leslie,
  name: "Tóth László",
  description: "Nagyon elégedett vagyok a cég szolgáltatásaival. Precíz és profi munkát végeztek, és a kertünk most olyan, mintha egy magazinból lépett volna ki. Mindenkinek csak ajánlani tudom őket!",
  stars: 5,
},]


const Testiomonials = () => {
  return (
    <section id={SECTIONS.TESTIMONIALS} className='w-full scroll-m-32'>
      <div className='container mx-auto my-7 md:my-[60px] flex flex-col gap-10 md:gap-[70px]'>
        <SectionHeader title="Visszajelzések"/>
        <div className="flex flex-wrap gap-4 md:gap-[45px] justify-center px-4">
          {testimonials.map((testimonial) => (<TestimonialsCard key={testimonial.id} id={testimonial.id} image={testimonial.image} name={testimonial.name} description={testimonial.description} stars={testimonial.stars}/>))}
        </div>
      </div>
    </section>
  )
}

export default Testiomonials