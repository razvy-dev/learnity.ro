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
      "Our active play space where children develop physical skills through movement, games, and sports. The Arena features soft surfaces, climbing structures, and versatile equipment that encourages both individual and team activities.",
    image: arena,
    link: "/playground/arena",
    color: "customWhite",
  },
  {
    id: 2,
    name: "The Fireplace",
    description:
      "A cozy gathering spot where storytelling, discussion, and reflection happen. This intimate space features comfortable seating arranged in a circle, creating the perfect environment for sharing ideas, listening to stories, and building community.",
    image: fireplace,
    link: "/playground/fireplace",
    color: "customOrange",
  },
  {
    id: 3,
    name: "The Roots",
    description:
      "Our nature-based learning area where children connect with the natural world. The Roots features a garden, water play stations, and natural materials that invite exploration, observation, and hands-on discovery of environmental concepts.",
    image: roots,
    link: "/playground/roots",
    color: "customWhite",
  },
  {
    id: 4,
    name: "The Tower",
    description:
      "A vertical adventure space that challenges children to reach new heights—both literally and figuratively. The Tower combines climbing elements with observation platforms, offering new perspectives and encouraging children to overcome challenges.",
    image: tower,
    link: "/playground/tower",
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

