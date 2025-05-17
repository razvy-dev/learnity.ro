import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"
import { ArrowRight, Sparkles, Puzzle, Rocket, Star } from "lucide-react"
import pg1 from './assets/playground1.jpg';
import pg2 from './assets/playground2.jpg';


const PlaygroundHero = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  return (
    <section
      ref={ref}
      className="py-24 px-4 bg-customWhite md:h-[100dvh] relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-40 h-40 bg-customOrange rounded-full opacity-10 animate-float-slow"></div>
        <div
          className="absolute bottom-20 left-20 w-56 h-56 bg-customBlue rounded-full opacity-20 animate-float-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 left-1/4 w-24 h-24 bg-customLightOrange rounded-full opacity-30 animate-float-slow"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Floating icons */}
      <div className="absolute top-1/4 right-1/4 animate-float-slow" style={{ animationDelay: "0.7s" }}>
        <Puzzle className="text-customBlue w-12 h-12 opacity-20" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 animate-float-slow" style={{ animationDelay: "1.2s" }}>
        <Star className="text-customOrange w-10 h-10 opacity-20" />
      </div>
      <div className="absolute top-2/3 right-1/3 animate-float-slow" style={{ animationDelay: "0.5s" }}>
        <Rocket className="text-customBlue w-14 h-14 opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:mt-36 items-center">
          {/* Left column - Text content */}
          <div>
            <div className={`mb-6 ${inView ? "animate-slide-up" : "opacity-0"}`} style={{ transitionDelay: "0.1s" }}>
              <h1 className="text-5xl md:text-6xl font-bangers text-customBlack mb-4 italic transform -rotate-1">
                Playground
              </h1>
              <div className="w-40 h-2 bg-customOrange rounded-full"></div>
            </div>

            <p
              className={`text-xl text-customBlack mb-8 max-w-xl leading-relaxed ${inView ? "animate-fade-in" : "opacity-0"}`}
              style={{ transitionDelay: "0.3s" }}
            >
               Spațiul care oferă adolescenților oportunitatea de a-și lua învățarea în propriile mâini și de a organiza experiențe bazate pe interesele lor (precum grupuri autonome, cursuri, workshop-uri sau evenimente fun), totodată fiind și partea în care se construiește spiritul de comunitate.
            </p>

            <div
              className={`flex flex-wrap gap-4 ${inView ? "animate-fade-in" : "opacity-0"}`}
              style={{ transitionDelay: "0.5s" }}
            >
              <Link
                to="/playground/register"
                className="group inline-flex items-center bg-customBlue hover:bg-customOrange text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg transform hover:scale-105"
              >
                Vezi mai mult
                <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center bg-white border-2 border-customBlue text-customBlue hover:bg-customLightBlue font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg transform hover:scale-105"
              >
                Înscrie-te în Playground
                <Sparkles className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right column - Image */}
          <div className={`${inView ? "animate-zoom-in" : "opacity-0"}`} style={{ transitionDelay: "0.4s" }}>
            <div className="relative">
              {/* Main image */}
              <div className="bg-white p-4 rounded-2xl shadow-xl transform rotate-2 transition-transform hover:rotate-0 duration-500">
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={pg2}
                    alt="Copii explorând și învățând în playground-ul Learnity"
                    className=""
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-customOrange rounded-full opacity-20 z-0"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-customBlue rounded-full opacity-30 z-0"></div>

              {/* Badge overlay */}
              <div className="absolute top-6 -right-6 bg-customOrange text-white font-bold px-4 py-2 rounded-full shadow-lg transform -rotate-12 z-20">
                Nou!
              </div>

              {/* Small floating image */}
              <div className="absolute -bottom-10 -left-10 w-1/3 bg-white p-2 rounded-xl shadow-lg transform -rotate-6 z-10">
                <img
                  src={pg1}
                  height={200}
                  width={200}
                  alt="Activitate educativă în playground"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlaygroundHero

