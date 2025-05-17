import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Calendar, ArrowRight } from "lucide-react"
import jam from './assets/jam.jpg';
import photo from './assets/photo.jpg';
import bookClub from './assets/book-club.jpeg';
import halloween from './assets/pg2.jpg';
import traditii from './assets/traditii.jpeg';
import coping from './assets/coping.jpeg';
import cinema from './assets/cinema.jpeg';
import craiova from './assets/pg1.jpg';
import treasure_hunt from './assets/trasure_hunt.jpeg';

// Sample data for the three categories
const experienceCategories = [
  {
    id: "workshops",
    name: "Workshop-uri",
    items: [
      {
        id: 1,
        title: "Coping Mechanisms",
        description:
          "La workshopul despre coping mechanisms, participanții au vorbit deschis despre cum fac față emoțiilor puternice, stresului sau situațiilor dificile din viața de zi cu zi. Prin exemple concrete, jocuri și discuții relaxate, au descoperit metode simple și sănătoase de a-și recăpăta echilibrul atunci când lucrurile devin copleșitoare. A fost un spațiu sigur, cald și plin de înțelegere, în care fiecare a plecat cu idei noi și cu senzația că nu e singur în ceea ce simte.",
        image: coping,
        date: "15 Iunie 2023",
      },
      {
        id: 2,
        title: "Tradiții libaneze",
        description:
          "Alături de Georges am descoperit o parte din cultura libaneză, direct de la sursă. Am aflat despre tradițiile locale, locurile de vizitat și stilul de viață din Liban, am ascultat muzică tradițională, am învățat primele litere din alfabetul arab și, la final, ne-am bucurat de falafel și humus gătite chiar de el. Un workshop care ne-a adus mai aproape de o cultură diferită, prin povești, gusturi și sunete.",
        image: traditii,
        date: "22 Iulie 2023",
      },
      {
        id: 3,
        title: "Arta cinematografiei",
        description:
          "La workshopul despre coping mechanisms, am vorbit deschis despre cum fac față emoțiilor puternice, stresului sau situațiilor dificile din viața de zi cu zi. Prin exemple concrete, jocuri și discuții relaxate, am descoperit metode simple și sănătoase de a ne recăpăta echilibrul atunci când lucrurile devin copleșitoare. A fost un spațiu sigur, cald și plin de înțelegere, din care fiecare a plecat cu idei noi și tot felul de informații utile.",
        image: cinema,
        date: "5 August 2023"
      },
    ],
  },
  {
    id: "groups",
    name: "Grupuri Autonome",
    items: [
      {
        id: 1,
        title: "Book Club",
        description:
          "Îți doreşti să citeşti cât mai mult, dar simți că nu ai timp sau că oricât ai încerca stagnezi la un moment dat? 📚✨📖🔖 Dacă iubești lectura și vrei să împărtășești descoperirile tale literare cu alții sau pur şi simplu îți doreşti să începi de undeva, dar nu ştii de unde, te aşteptăm cu mare drag!💗 Vino să îți găsești inspirația alături de noi, într-o atmosferă cât mai cozy și prietenoasă! 📕❤️",
        image: bookClub,
        date: "În fiecare Marți",
      },
      {
        id: 2,
        title: "Jam Sessions",
        description:
          "Nu este nevoie sa fii vreun guitar god🎸, sa stii teorie muzicala🎼 sau sa poti atinge pana si cele mai inalte note🎤, trebuie doar sa ai un minim de skilluri pe instrumentul tau in asa fel incat sa putem canta impreuna, dar cel mai important este sa ai dorinta de a te lasa purtat de muzica si de a te armoniza cu alti learnitasi ce iti impartasesc pasiunea!🎹",
        image: jam,
        date: "În fiecare Joi",
      },
      {
        id: 3,
        title: "Grupul de foto",
        description:
          "Grupul autonom de fotografie este un grup în care învățăm cum să facem poze cât mai calitative, ne ajutăm reciproc să cultivăm această pasiune comună pentru fotografie și petrecem timp de calitate împreună, apropiindu-ne unii de alții.",
        image: photo,
        date: "În fiecare Vineri",
      },
    ],
  },
  {
    id: "events",
    name: "Evenimente",
    items: [
      {
        id: 1,
        title: "Halloweenity",
        description:
          "🎃 La “Halloweenity”, anuala petrecere de Halloween, ne-am costumat, am sculptat dovleci, ne-am jucat diverse joculețe, am avut un murder mystery, iar la final am avut premii și snack-uri tematice. 😋",
        image: halloween,
        date: "10 Iulie 2023",
      },
      {
        id: 2,
        title: "Excursie Foto",
        description:
          "Duminica trecută ne-am urcat în tren și am plecat într-o excursie de o zi de neuitat spre unul dintre cele mai spectaculoase târguri de Crăciun din România - 🚉🏔️ Târgul de Crăciun din Craiova. 🎡 Această excursie a fost organizată de Grupul autonom de Fotografie, coordonat de Alex 💖 . Am explorat orașul, ne-am oprit să mâncăm și am ajuns, în sfârșit, la târg.🎅🏻 De aici ne-am bucurat cu toții de spiritul Crăciunului, fie cu un kürtos kalac, o ciocolată caldă sau o pereche de patine în picioare.",
        image: craiova,
        date: "18 August 2023",
      },
      {
        id: 3,
        title: "Treasure Hunt",
        description:
          "Young scientists present their experiments and discoveries to the community in this celebration of curiosity and innovation.",
        image: treasure_hunt,
        date: "25 Septembrie 2023",
      },
    ],
  },
]

const PlaygroundWorkshops = () => {
  const [activeCategory, setActiveCategory] = useState("workshops")
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const activeExperiences = experienceCategories.find((cat) => cat.id === activeCategory)?.items || []

  return (
    <section ref={ref} className="py-20 px-4 bg-customWhite relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-40 h-40 bg-customOrange rounded-full opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-customLightBlue rounded-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className={`inline-block ${inView ? "animate-slide-up" : "opacity-0"}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <h2 className="text-4xl md:text-5xl font-bangers text-customBlack mb-4 italic transform -rotate-1">
              Learning Experiences
            </h2>
            <div className="w-40 h-2 bg-customOrange mx-auto rounded-full"></div>
          </div>

          <p
            className={`text-lg text-customBlack max-w-2xl mx-auto mt-6 ${inView ? "animate-fade-in" : "opacity-0"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            In Playground, elevii au oportunitatea de a-si lua invatarea in propriile maini, fie prin a deveni ei profi si a sustine workshop-uri sau prin a organiza evenimente alaturi de alti learnitasi pentru restul comunitatii, toate acestea sub ghidajul si indrumarea noastra
          </p>
        </div>

        {/* Category tabs */}
        <div
          className={`flex flex-wrap justify-center mb-12 ${inView ? "animate-fade-in" : "opacity-0"}`}
          style={{ transitionDelay: "0.3s" }}
        >
          {experienceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 mx-2 mb-2 rounded-full font-bold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-customOrange text-white shadow-md"
                  : "bg-white text-customBlack hover:bg-customLightOrange"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Experiences grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeExperiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                inView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
            >
              {/* Experience image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={experience.image || "/placeholder.svg"}
                  alt={experience.title}
                  height={500}
                  width={500}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />

                {/* Date badge */}
                <div className="absolute bottom-0 right-0 bg-customBlue text-white text-sm font-bold px-4 py-2 rounded-tl-2xl">
                  <Calendar size={16} className="inline-block mr-2" />
                  {experience.date}
                </div>
              </div>

              {/* Experience content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-customBlack mb-3">{experience.title}</h3>

                <p className="text-customBlack mb-6 flex-grow">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlaygroundWorkshops

