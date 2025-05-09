import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"
import { Calendar, ArrowRight } from "lucide-react"
import jam from './assets/jam.jpg';
import photo from './assets/photo.jpg';
import bookClub from './assets/book-club.jpeg';
import halloween from './assets/pg2.jpg';
import traditii from './assets/traditii.jpeg';
import coping from './assets/coping.jpeg';
import cinema from './assets/cinema.jpeg';

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
          "Children explore the art of storytelling through creative writing, illustration, and performance in this immersive workshop.",
        image: coping,
        date: "15 Iunie 2023",
        link: "/playground/workshops/storytelling",
      },
      {
        id: 2,
        title: "Tradiții libaneze",
        description:
          "Young scientists conduct exciting experiments to discover fundamental scientific principles through hands-on activities.",
        image: traditii,
        date: "22 Iulie 2023",
        link: "/playground/workshops/science",
      },
      {
        id: 3,
        title: "Arta cinematografiei",
        description:
          "Workshopul a abordat relația dintre film și psihologie, concentrându-se pe impactul emoțional și social al filmelor. S-au analizat filme psihologice și s-a discutat despre modul în care emoțiile sunt transmise prin limbaj vizual, auditiv și tehnici cinematografice. De asemenea, a fost inclus un scurt parcurs prin istoria cinematografiei și influența acesteia asupra societății.",
        image: cinema,
        date: "5 August 2023",
        link: "/playground/workshops/digital-art",
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
        link: "/playground/groups/eco",
      },
      {
        id: 2,
        title: "Jam Sessions",
        description:
          "Nu este nevoie sa fii vreun guitar god🎸, sa stii teorie muzicala🎼 sau sa poti atinge pana si cele mai inalte note🎤, trebuie doar sa ai un minim de skilluri pe instrumentul tau in asa fel incat sa putem canta impreuna, dar cel mai important este sa ai dorinta de a te lasa purtat de muzica si de a te armoniza cu alti learnitasi ce iti impartasesc pasiunea!🎹",
        image: jam,
        date: "În fiecare Joi",
        link: "/playground/groups/entrepreneurs",
      },
      {
        id: 3,
        title: "Grupul de foto",
        description:
          "Grupul autonom de fotografie este un grup în care învățăm cum să facem poze cât mai calitative, ne ajutăm reciproc să cultivăm această pasiune comună pentru fotografie și petrecem timp de calitate împreună, apropiindu-ne unii de alții.",
        image: photo,
        date: "În fiecare Vineri",
        link: "/playground/groups/book-club",
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
        link: "/playground/events/summer-festival",
      },
      {
        id: 2,
        title: "Excursie Foto",
        description:
          "A collaborative event where parents and children work together to design and create innovative solutions to everyday challenges.",
        image: "/placeholder.svg?height=300&width=500",
        date: "18 August 2023",
        link: "/playground/events/make-a-thon",
      },
      {
        id: 3,
        title: "Treasure Hunt",
        description:
          "Young scientists present their experiments and discoveries to the community in this celebration of curiosity and innovation.",
        image: "/placeholder.svg?height=300&width=500",
        date: "25 Septembrie 2023",
        link: "/playground/events/science-fair",
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

                {/* CTA link */}
                <Link
                  to={experience.link}
                  className="group inline-flex items-center text-customBlue hover:text-customOrange transition-colors duration-300"
                >
                  <span className="font-bold">Learn More</span>
                  <ArrowRight
                    size={18}
                    className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div
          className={`text-center mt-12 ${inView ? "animate-fade-in" : "opacity-0"}`}
          style={{ transitionDelay: "0.7s" }}
        >
          <Link
            to={`/playground/${activeCategory}`}
            className="inline-flex items-center bg-customOrange hover:bg-customBlue text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md"
          >
            View All {experienceCategories.find((cat) => cat.id === activeCategory)?.name}
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PlaygroundWorkshops

