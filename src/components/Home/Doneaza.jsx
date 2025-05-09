import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"
import { Heart, BookOpen, Users, Sparkles } from "lucide-react"
import img1 from './assets/doneaza1.jpg';
import img2 from './assets/doneaza2.jpg';

const DonateSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  return (
    <section ref={ref} className="py-20 px-4 bg-customWhite relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 w-32 h-32 bg-customLightBlue rounded-full opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-customLightOrange rounded-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="order-2 lg:order-1">
            <div className={`mb-6 ${inView ? "animate-slide-up" : "opacity-0"}`} style={{ transitionDelay: "0.1s" }}>
              <h2 className="text-4xl md:text-5xl font-bangers text-customBlack mb-4 italic">
                Susține educația alternativă!
              </h2>
              <div className="w-32 h-2 bg-customOrange rounded-full"></div>
            </div>

            <p
              className={`text-lg text-customBlack mb-8 max-w-xl ${inView ? "animate-fade-in" : "opacity-0"}`}
              style={{ transitionDelay: "0.2s" }}
            >
              Investește în viitorul tinerilor și contribuie la crearea unei societăți mai bune prin educație de calitate, creativă și accesibilă tuturor.
            </p>

            <div
              className={`space-y-6 mb-10 ${inView ? "animate-fade-in" : "opacity-0"}`}
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="flex items-start">
                <div className="bg-customBlue rounded-full p-3 mr-4 text-white">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-customBlack mb-1">Susține un Learnitaș</h3>
                  <p className="text-customBlack">
                    Ajută-ne să oferim burse adolescenților care își doresc să poată beneficia de educație alternativă.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-customOrange rounded-full p-3 mr-4 text-white">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-customBlack mb-1">Egalitate</h3>
                  <p className="text-customBlack">
                    Acces la educație pentru toți adolescenții, inclusiv cei din mediul rural și zonele defavorizate.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-customLightOrange rounded-full p-3 mr-4 text-customBlack">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-customBlack mb-1">The outside world</h3>
                  <p className="text-customBlack">
                    Vrem să le oferim adolescenților diferite experiențe practice de învățare prin colaborarea cu diferite firme și ONG-uri.
                  </p>
                </div>
              </div>
            </div>

            <div className={`${inView ? "animate-bounce-slow" : "opacity-0"}`} style={{ transitionDelay: "0.4s" }}>
              <Link
                to="/donează"
                className="inline-flex items-center bg-customBlue hover:bg-customOrange text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg"
              >
                <Heart className="mr-2" size={20} />
                Donează
              </Link>
            </div>
          </div>

          {/* Right column - Images */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main image */}
              <div
                className={`rounded-2xl overflow-hidden shadow-xl transform rotate-2 z-10 relative ${inView ? "animate-zoom-in" : "opacity-0"}`}
                style={{ transitionDelay: "0.2s" }}
              >
                <img
                  src={img2}
                  height={400}
                  width={600}
                  alt="Happy students in a creative learning environment"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-customBlue to-transparent p-6">
                  <p className="text-white font-bold text-lg">Empowering young minds through creative education</p>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-customOrange rounded-full opacity-30 z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DonateSection

