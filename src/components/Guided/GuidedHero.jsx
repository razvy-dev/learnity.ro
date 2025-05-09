import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"
import { ArrowRight, Compass, Map, BookOpen, Lightbulb, Target } from "lucide-react"
import g1 from './assets/g1.jpg';
import g2 from './assets/g2.jpg';

const GuidedHero = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  return (
    <section ref={ref} className="py-24 px-4 bg-customLightBlue relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-40 h-40 bg-white rounded-full opacity-20 animate-float-slow"></div>
        <div
          className="absolute bottom-20 left-20 w-56 h-56 bg-customOrange rounded-full opacity-20 animate-float-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 left-1/4 w-24 h-24 bg-white rounded-full opacity-30 animate-float-slow"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Floating icons */}
      <div className="absolute top-1/4 right-1/4 animate-float-slow" style={{ animationDelay: "0.7s" }}>
        <Compass className="text-customBlack w-12 h-12 opacity-30" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 animate-float-slow" style={{ animationDelay: "1.2s" }}>
        <Target className="text-customBlack w-10 h-10 opacity-30" />
      </div>
      <div className="absolute top-2/3 right-1/3 animate-float-slow" style={{ animationDelay: "0.5s" }}>
        <Lightbulb className="text-customBlack w-14 h-14 opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 md:mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Image */}
          <div
            className={`order-2 lg:order-1 ${inView ? "animate-zoom-in" : "opacity-0"}`}
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="relative">
              {/* Main image */}
              <div className="bg-white p-4 rounded-2xl shadow-xl transform -rotate-2 transition-transform hover:rotate-0 duration-500">
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={g1}
                    height={500}
                    width={700}
                    alt="Profesor ghidând elevi într-o activitate educațională"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-customOrange rounded-full opacity-20 z-0"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-full opacity-30 z-0"></div>

              {/* Floating elements */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-lg z-20">
                <Compass className="text-customBlue w-10 h-10" />
              </div>

              {/* Path illustration */}
              <div className="absolute -right-5 top-1/3 bottom-1/3 w-10 flex flex-col items-center z-10">
                <div className="w-2 h-2 bg-customOrange rounded-full"></div>
                <div className="w-1 h-16 bg-customOrange"></div>
                <div className="w-2 h-2 bg-customOrange rounded-full"></div>
                <div className="w-1 h-16 bg-customOrange"></div>
                <div className="w-2 h-2 bg-customOrange rounded-full"></div>
              </div>

              {/* Small floating image */}
              <div className="absolute -bottom-10 -right-10 w-1/3 bg-white p-2 rounded-xl shadow-lg transform rotate-6 z-10">
                <img
                  src={g2}
                  width={200}
                  height={200}
                  alt="Elev descoperind prin învățare ghidată"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right column - Text content */}
          <div className="order-1 lg:order-2">
            <div className={`mb-6 ${inView ? "animate-slide-up" : "opacity-0"}`} style={{ transitionDelay: "0.1s" }}>
              <h1 className="text-5xl md:text-6xl font-bangers text-customBlack mb-4 italic">
                Guided Learning
              </h1>
              <div className="w-40 h-2 bg-customOrange rounded-full"></div>
            </div>

            <p
              className={`text-xl text-customBlack mb-8 max-w-xl leading-relaxed ${inView ? "animate-fade-in" : "opacity-0"}`}
              style={{ transitionDelay: "0.3s" }}
            >
              Partea din Learnity care oferă experiențe de învățare precum cursuri și workshop-uri susținute de profesioniști. Acestea diferă de educația formală prin modul de predare cât mai practic și atractiv, lipsa temelor obligatorii sau activităților impuse și relația de egalitate dintre profesori și elevi. 
            </p>

            <div
              className={`flex flex-wrap gap-4 ${inView ? "animate-fade-in" : "opacity-0"}`}
              style={{ transitionDelay: "0.5s" }}
            >
              <Link
                to="/guided/approach"
                className="group inline-flex items-center bg-white hover:bg-customOrange hover:text-white text-customBlue font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg transform hover:scale-105"
              >
                Descoperă Abordarea Noastră
                <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link
                to="/guided/programs"
                className="group inline-flex items-center bg-customOrange text-white hover:bg-white hover:text-customOrange font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg transform hover:scale-105"
              >
                Programe Educaționale
                <BookOpen className="ml-2 w-5 h-5" />
              </Link>
            </div>

            {/* Feature highlights */}
            <div
              className={`mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 ${inView ? "animate-slide-up" : "opacity-0"}`}
              style={{ transitionDelay: "0.7s" }}
            >
              <div className="bg-white bg-opacity-70 rounded-lg p-4 backdrop-blur-sm">
                <Map className="text-customBlack mb-2 w-6 h-6" />
                <h3 className="text-customBlack font-bold">Cursuri</h3>
              </div>
              <div className="bg-white bg-opacity-70 rounded-lg p-4 backdrop-blur-sm">
                <Lightbulb className="text-customBlack mb-2 w-6 h-6" />
                <h3 className="text-customBlack font-bold">Workshop-uri</h3>
              </div>
              <div className="bg-white bg-opacity-70 rounded-lg p-4 backdrop-blur-sm">
                <Target className="text-customBlack mb-2 w-6 h-6" />
                <h3 className="text-customBlack font-bold">Bootcamp-uri</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New wave divider implementation */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-full">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 left-0 w-full h-full"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-customWhite"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default GuidedHero

