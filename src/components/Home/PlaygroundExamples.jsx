import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"
import { Calendar, ArrowRight, Play } from "lucide-react"
import pg3 from './assets/pg3.jpg'
import pg2 from './assets/pg2.jpg';
import pg1 from './assets/pg1.jpg'

const playgroundWorkshops = [
  {
    id: 1,
    title: "Excursie: Târgul de Crăciun din Craiova",
    description:
      "Children discover the wonders of nature through guided exploration, scavenger hunts, and hands-on activities in our outdoor learning spaces. Perfect for curious minds who love the outdoors!",
    image: pg1,
    date: "May 12, 2023",
    link: "/playground/nature-explorers",
  },
  {
    id: 2,
    title: "Halloweenity",
    description:
      "🎃 La “Halloweenity”, anuala petrecere de Halloween, ne-am costumat, am sculptat dovleci, ne-am jucat diverse joculețe, am avut un murder mystery, iar la final am avut premii și snack-uri tematice. 😋",
    image: pg2,
    date: "July 22, 2023",
    link: "/playground/music-jam",
  },
  {
    id: 3,
    title: "Playground Day",
    description:
      "La Playground Day reflectăm asupra obiectivelor noastre de învățare și stabilim ce alte experiențe de învățare ne dorim în continuare 🥰. 👉 În cadrul acestei sesiuni learnitaşii şi-au stabilit obiectivele de învațare pe care vor sa se concentreze şi le-au tranformat in “Badges” - reprezentări grafice, reprezentând obiectivul nostru de învățare.",
    image: pg3,
    date: "11 Decembrie, 2024",
    link: "/playground/engineering",
  },
]

const PlaygroundExamples = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  return (
    <section ref={ref} className="py-20 px-4 bg-customWhite relative overflow-hidden">
      {/* Playful background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-customOrange rounded-full opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-customLightOrange rounded-full opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-customBlue rounded-full opacity-10"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-customOrange rounded-full opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className={`inline-block ${inView ? "animate-slide-up" : "opacity-0"}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <h2 className="text-4xl md:text-5xl font-bangers text-customBlack mb-4 italic">
              Câteva evenimente din Playground
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

        {/* Playground workshops - overlapping cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-start">
          {playgroundWorkshops.map((workshop, index) => (
            <div
              key={workshop.id}
              className={`md:col-span-6 lg:col-span-4 ${index === 1 ? "md:mt-12" : index === 2 ? "md:mt-24" : ""} ${
                inView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
                {/* Workshop image */}
                <div className="relative">
                  <img
                    height={400}
                    width={600}
                    src={workshop.image || "/placeholder.svg"}
                    alt={workshop.title}
                    className="w-full h-56 object-cover"
                  />

                  {/* Date badge */}
                  <div className="absolute bottom-0 right-0 bg-customBlue text-white text-sm font-bold px-4 py-2 rounded-tl-2xl">
                    <Calendar size={16} className="inline-block mr-2" />
                    {workshop.date}
                  </div>
                </div>

                {/* Workshop content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-customBlack mb-3">{workshop.title}</h3>

                  <p className="text-customBlack mb-6 flex-grow">{workshop.description}</p>

                  {/* CTA button */}
                  <Link
                    to={workshop.link}
                    className="group flex items-center justify-center bg-customOrange hover:bg-customBlue text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 mt-auto"
                  >
                    Join the Fun!
                    <ArrowRight
                      size={18}
                      className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all playground workshops button */}
        <div
          className={`text-center mt-16 ${inView ? "animate-bounce-slow" : "opacity-0"}`}
          style={{ transitionDelay: "0.7s" }}
        >
          <Link
            to="/playground/workshops"
            className="inline-flex items-center bg-white border-2 border-customOrange hover:bg-customOrange text-customOrange hover:text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md"
          >
            Explore All Playground Activities
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PlaygroundExamples

