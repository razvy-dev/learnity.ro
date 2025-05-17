import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import arena from './assets/arena.svg';
import fireplace from './assets/fireplace.svg';
import tower from './assets/tower.svg';
import roots from './assets/roots.svg';

const playgroundAreas = [
  {
    id: 1,
    name: "The Arena",
    description:
      "The Arena este scena principală a învățării. Este arena procesului tău de învățare: locul în care faci ceva nou sau provocator. Deși învățarea se întâmplă constant și în cele mai obișnuite momente, nu la asta ne referim prin Arenă. În Arenă învățarea se întâmplă pentru că faci ceva dificil și provocator! Este vorba de partea concreta de acțiune din procesul tău de învățare.",
    image: arena,
    link: "/coming-soon",
    color: "customWhite",
  },
  {
    id: 2,
    name: "The Fireplace",
    description:
      "The Fireplace este punctul din procesul de învățare în care reflectezi, cercetezi sau te odihnești, astfel încât să te poți întoarce la The Arena (practică) cu idei noi despre cum să-ți îmbunătățești și să-ți reîmprospătezi energia.",
    image: fireplace,
    link: "/coming-soon",
    color: "customOrange",
  },
  {
    id: 3,
    name: "The Roots",
    description:
      "The Roots este locul în care îți dai seama cum să-ți alimentezi cu energie procesul de învățare atunci când simți că nu ai energie, încredere sau curaj pentru următorul pas.",
    image: roots,
    link: "/coming-soon",
    color: "customWhite",
  },
  {
    id: 4,
    name: "The Tower",
    description:
      "The Tower este spațiul în care îți stabilești intențiile, obiectivele de învățare și unde te întorci atunci când trebuie să obții claritate și o privire de ansamblu asupra procesului de învățare.",
    image: tower,
    link: "/coming-soon",
    color: "customOrange",
  },
]

const Titirez = () => {
  return (
    <section className="w-full">
      {playgroundAreas.map((area, index) => (
        <AreaSection key={area.id} area={area} isEven={index % 2 === 1} />
      ))}
    </section>
  )
}

const AreaSection = ({ area, isEven }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  const bgColor = area.color === "customOrange" ? "bg-customOrange" : "bg-customWhite"
  const textColor = area.color === "customOrange" ? "text-white" : "text-customBlack"
  const btnColor =
    area.color === "customOrange"
      ? "bg-white text-customOrange hover:bg-customBlack hover:text-white"
      : "bg-customBlue text-white hover:bg-customOrange"

  return (
    <div ref={ref} className={`w-full py-20 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? "lg:flex-row-reverse" : ""}`}>
          {/* Image side */}
          <div className={`${inView ? "animate-fade-in" : "opacity-0"}`} style={{ transitionDelay: "0.2s" }}>
            <div className="relative">
              <div
                className={`rounded-3xl overflow-hidden shadow-xl ${isEven ? "transform -rotate-2" : "transform rotate-2"}`}
              >
                <img src={area.image || "/placeholder.svg"} alt={area.name} height={500} width={700} className="w-full h-auto object-cover" />
              </div>

              {/* Decorative elements */}
              <div
                className={`absolute -bottom-6 ${isEven ? "-left-6" : "-right-6"} w-32 h-32 bg-customLightBlue rounded-full opacity-30 z-0`}
              ></div>

              {/* Badge */}
              <div
                className={`absolute ${isEven ? "top-6 left-6" : "top-6 right-6"} bg-customBlue text-white text-lg font-bold px-6 py-2 rounded-full shadow-lg transform ${isEven ? "rotate-3" : "-rotate-3"}`}
              >
                Explore
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className={`${inView ? "animate-slide-up" : "opacity-0"}`} style={{ transitionDelay: "0.3s" }}>
            <div className="space-y-6">
              <h2
                className={`text-4xl md:text-5xl font-bangers ${textColor} italic transform ${isEven ? "rotate-1" : "-rotate-1"}`}
              >
                {area.name}
              </h2>

              <div className="w-24 h-2 bg-customBlue rounded-full"></div>

              <p className={`text-lg ${textColor} leading-relaxed`}>{area.description}</p>

              <Link
                to={area.link}
                className={`inline-flex items-center ${btnColor} font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md mt-4`}
              >
                Discover {area.name}
                <ArrowRight
                  className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  size={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Titirez

